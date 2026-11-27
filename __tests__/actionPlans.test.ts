import {
    ACTION_PLANS_STORAGE_KEY,
    createActionPlan,
    deleteActionPlan,
    isOverdue,
    loadActionPlans,
    openPlanCountByPractice,
    updateActionPlan,
} from '../src/features/maturity/actionPlans';

describe('action plans', () => {
    beforeEach(() => localStorage.clear());

    it('creates, updates, counts, and deletes plans by stable sub-control ID', () => {
        const created = createActionPlan([], {
            practiceId: 'C2.1',
            title: '  Add prompt input filtering  ',
            status: 'pending',
            priority: 'high',
        }, new Date('2026-01-01T12:00:00.000Z'));

        expect(created[0].title).toBe('Add prompt input filtering');
        expect(loadActionPlans()).toEqual(created);
        expect(openPlanCountByPractice(created)).toEqual({ 'C2.1': 1 });

        const updated = updateActionPlan(created, created[0].id, { status: 'done' });
        expect(openPlanCountByPractice(updated)).toEqual({});
        expect(deleteActionPlan(updated, created[0].id)).toEqual([]);
    });

    it('rejects unknown sub-controls and short titles', () => {
        expect(() => createActionPlan([], {
            practiceId: 'C99.1',
            title: 'A valid title',
            status: 'pending',
            priority: 'medium',
        })).toThrow('Unknown sub-control');

        expect(() => createActionPlan([], {
            practiceId: 'C1.1',
            title: ' ',
            status: 'pending',
            priority: 'medium',
        })).toThrow('at least 2 characters');
    });

    it('marks overdue only for open plans', () => {
        const plan = createActionPlan([], {
            practiceId: 'C1.1',
            title: 'Review data provenance',
            dueDate: '2026-01-02',
            status: 'pending',
            priority: 'medium',
        })[0];
        expect(isOverdue(plan, new Date('2026-01-03T12:00:00.000Z'))).toBe(true);
        expect(isOverdue({ ...plan, status: 'done' }, new Date('2026-01-03T12:00:00.000Z'))).toBe(false);
        expect(localStorage.getItem(ACTION_PLANS_STORAGE_KEY)).not.toBeNull();
    });
});
