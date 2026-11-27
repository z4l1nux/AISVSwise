import { findPractice } from './practiceCatalog';

export const ACTION_PLANS_STORAGE_KEY = 'aisvswise_action_plans';

export const ACTION_STATUSES = ['pending', 'in_progress', 'blocked', 'done', 'cancelled'] as const;
export type ActionStatus = (typeof ACTION_STATUSES)[number];

export const ACTION_PRIORITIES = ['low', 'medium', 'high', 'critical'] as const;
export type ActionPriority = (typeof ACTION_PRIORITIES)[number];

export interface ActionPlan {
    id: string;
    practiceId: string;
    title: string;
    description?: string;
    owner?: string;
    dueDate?: string;
    status: ActionStatus;
    priority: ActionPriority;
    createdAt: string;
}

export type ActionPlanInput = Omit<ActionPlan, 'id' | 'createdAt'>;

const CLOSED_STATUSES: ActionStatus[] = ['done', 'cancelled'];

function newId(): string {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    return `ap_${Date.now().toString(36)}${Math.floor(Math.random() * 1e9).toString(36)}`;
}

function isStatus(value: unknown): value is ActionStatus {
    return typeof value === 'string' && (ACTION_STATUSES as readonly string[]).includes(value);
}

function isPriority(value: unknown): value is ActionPriority {
    return typeof value === 'string' && (ACTION_PRIORITIES as readonly string[]).includes(value);
}

export function loadActionPlans(): ActionPlan[] {
    if (typeof window === 'undefined') return [];
    const raw = window.localStorage.getItem(ACTION_PLANS_STORAGE_KEY);
    if (!raw) return [];
    try {
        const parsed: unknown = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.filter((plan): plan is ActionPlan =>
            !!plan && typeof plan === 'object' &&
            typeof plan.id === 'string' &&
            typeof plan.practiceId === 'string' && !!findPractice(plan.practiceId) &&
            typeof plan.title === 'string' &&
            isStatus(plan.status) && isPriority(plan.priority),
        );
    } catch (error) {
        console.error('Failed to parse saved AISVS action plans.', error);
        return [];
    }
}

export function saveActionPlans(plans: ActionPlan[]): void {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(ACTION_PLANS_STORAGE_KEY, JSON.stringify(plans));
}

export function createActionPlan(
    plans: ActionPlan[],
    input: ActionPlanInput,
    now = new Date(),
): ActionPlan[] {
    if (!findPractice(input.practiceId)) throw new Error(`Unknown sub-control: ${input.practiceId}`);
    const title = input.title.trim();
    if (title.length < 2) throw new Error('Title must be at least 2 characters');

    const plan: ActionPlan = {
        id: newId(),
        practiceId: input.practiceId,
        title: title.slice(0, 180),
        description: input.description?.trim().slice(0, 4000) || undefined,
        owner: input.owner?.trim().slice(0, 120) || undefined,
        dueDate: input.dueDate || undefined,
        status: isStatus(input.status) ? input.status : 'pending',
        priority: isPriority(input.priority) ? input.priority : 'medium',
        createdAt: now.toISOString(),
    };
    const next = [plan, ...plans];
    saveActionPlans(next);
    return next;
}

export function updateActionPlan(
    plans: ActionPlan[],
    id: string,
    patch: Partial<ActionPlanInput>,
): ActionPlan[] {
    const next = plans.map(plan => {
        if (plan.id !== id) return plan;
        if (patch.practiceId !== undefined && !findPractice(patch.practiceId)) {
            throw new Error(`Unknown sub-control: ${patch.practiceId}`);
        }
        return {
            ...plan,
            ...(patch.practiceId !== undefined ? { practiceId: patch.practiceId } : {}),
            ...(patch.title !== undefined ? { title: patch.title.trim().slice(0, 180) } : {}),
            ...(patch.description !== undefined ? { description: patch.description.trim().slice(0, 4000) || undefined } : {}),
            ...(patch.owner !== undefined ? { owner: patch.owner.trim().slice(0, 120) || undefined } : {}),
            ...(patch.dueDate !== undefined ? { dueDate: patch.dueDate || undefined } : {}),
            ...(patch.status !== undefined && isStatus(patch.status) ? { status: patch.status } : {}),
            ...(patch.priority !== undefined && isPriority(patch.priority) ? { priority: patch.priority } : {}),
        };
    });
    saveActionPlans(next);
    return next;
}

export function deleteActionPlan(plans: ActionPlan[], id: string): ActionPlan[] {
    const next = plans.filter(plan => plan.id !== id);
    saveActionPlans(next);
    return next;
}

export function isOverdue(plan: ActionPlan, today = new Date()): boolean {
    if (!plan.dueDate || CLOSED_STATUSES.includes(plan.status)) return false;
    const localToday = [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, '0'),
        String(today.getDate()).padStart(2, '0'),
    ].join('-');
    return plan.dueDate < localToday;
}

export function openPlanCountByPractice(plans: ActionPlan[]): Record<string, number> {
    const counts: Record<string, number> = {};
    for (const plan of plans) {
        if (CLOSED_STATUSES.includes(plan.status)) continue;
        counts[plan.practiceId] = (counts[plan.practiceId] ?? 0) + 1;
    }
    return counts;
}
