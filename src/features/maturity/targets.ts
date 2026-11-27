import { findPractice } from './practiceCatalog';

export const TARGETS_STORAGE_KEY = 'aisvswise_targets';
export const MAX_TARGET = 3;

export interface PracticeTarget {
    target: number;
    notes?: string;
}

export type TargetsMap = Record<string, PracticeTarget>;

export function clampTarget(value: number): number {
    if (!Number.isFinite(value)) return 0;
    return Math.round(Math.min(MAX_TARGET, Math.max(0, value)) * 4) / 4;
}

function sanitizeNotes(notes: unknown): string | undefined {
    if (typeof notes !== 'string') return undefined;
    const trimmed = notes.slice(0, 2000).trim();
    return trimmed || undefined;
}

export function loadTargets(): TargetsMap {
    if (typeof window === 'undefined') return {};
    const raw = window.localStorage.getItem(TARGETS_STORAGE_KEY);
    if (!raw) return {};
    try {
        const parsed: unknown = JSON.parse(raw);
        if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
        const targets: TargetsMap = {};
        for (const [id, value] of Object.entries(parsed)) {
            if (!findPractice(id) || !value || typeof value !== 'object') continue;
            const entry = value as Partial<PracticeTarget>;
            if (typeof entry.target !== 'number' || !Number.isFinite(entry.target)) continue;
            targets[id] = {
                target: clampTarget(entry.target),
                notes: sanitizeNotes(entry.notes),
            };
        }
        return targets;
    } catch (error) {
        console.error('Failed to parse saved AISVS targets.', error);
        return {};
    }
}

export function saveTargets(targets: TargetsMap): void {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(TARGETS_STORAGE_KEY, JSON.stringify(targets));
}

export function setTarget(
    targets: TargetsMap,
    practiceId: string,
    target: number,
    notes?: string,
): TargetsMap {
    if (!findPractice(practiceId)) return targets;
    const next = {
        ...targets,
        [practiceId]: { target: clampTarget(target), notes: sanitizeNotes(notes) },
    };
    saveTargets(next);
    return next;
}

export function resetTarget(targets: TargetsMap, practiceId: string): TargetsMap {
    if (!(practiceId in targets)) return targets;
    const next = { ...targets };
    delete next[practiceId];
    saveTargets(next);
    return next;
}

export function clearTargets(): void {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem(TARGETS_STORAGE_KEY);
}
