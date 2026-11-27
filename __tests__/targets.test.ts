import {
    TARGETS_STORAGE_KEY,
    clampTarget,
    clearTargets,
    loadTargets,
    resetTarget,
    setTarget,
} from '../src/features/maturity/targets';

describe('targets', () => {
    beforeEach(() => localStorage.clear());

    it('clamps values to the AISVS 0-3 scale in quarter steps', () => {
        expect(clampTarget(-1)).toBe(0);
        expect(clampTarget(3.2)).toBe(3);
        expect(clampTarget(1.38)).toBe(1.5);
        expect(clampTarget(Number.NaN)).toBe(0);
    });

    it('persists valid targets and ignores unknown requirement IDs', () => {
        const next = setTarget({}, 'C1.1', 2.26, '  Reduce the risk  ');
        expect(next['C1.1']).toEqual({ target: 2.25, notes: 'Reduce the risk' });
        expect(setTarget(next, 'SAMM-only-name', 2)).toBe(next);
        expect(loadTargets()).toEqual(next);
    });

    it('drops invalid saved entries and clears targets', () => {
        localStorage.setItem(TARGETS_STORAGE_KEY, JSON.stringify({
            'C1.1': { target: 4 },
            'C99.1': { target: 2 },
            'C1.2': { target: 'high' },
        }));
        expect(loadTargets()).toEqual({ 'C1.1': { target: 3, notes: undefined } });

        const remaining = resetTarget(loadTargets(), 'C1.1');
        expect(remaining).toEqual({});
        clearTargets();
        expect(localStorage.getItem(TARGETS_STORAGE_KEY)).toBeNull();
    });
});
