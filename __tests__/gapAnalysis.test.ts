import { computeGap, topGaps } from '../src/features/maturity/gapAnalysis';

describe('AISVS gap analysis', () => {
    it('does not turn incomplete sub-controls into zero-score gaps', () => {
        const summary = computeGap({
            practiceNames: ['C1.1 Training Data Origin & Traceability'],
            practiceScores: [0],
            practiceCompleted: [false],
            targets: { 'C1.1': { target: 2 } },
        });

        expect(summary.byPractice[0]).toMatchObject({
            practiceId: 'C1.1',
            current: null,
            target: null,
            gap: null,
            assessed: false,
            hasTarget: true,
        });
        expect(summary.overall).toEqual({ current: null, target: null, gap: null });
        expect(topGaps(summary)).toEqual([]);
    });

    it('compares completed scores against targets and ignores unassessed rows in aggregates', () => {
        const summary = computeGap({
            practiceNames: [
                'C1.1 Training Data Origin & Traceability',
                'C1.2 Training Data Security & Integrity',
            ],
            practiceScores: [1, 0],
            practiceCompleted: [true, false],
            targets: { 'C1.1': { target: 2 }, 'C1.2': { target: 3 } },
        });

        expect(summary.byPractice[0].gap).toBe(1);
        expect(summary.overall).toEqual({ current: 1, target: 2, gap: 1 });
        expect(summary.coverage).toEqual({
            practicesWithTarget: 2,
            totalPractices: 97,
            assessedPractices: 1,
        });
        expect(topGaps(summary).map(row => row.practiceId)).toEqual(['C1.1']);
    });

    it('weights overall gap by control, matching assessment score aggregation', () => {
        const summary = computeGap({
            practiceNames: [
                'C1.1 Training Data Origin & Traceability',
                'C1.2 Training Data Security & Integrity',
                'C2.1 Prompt Injection Defense',
            ],
            practiceScores: [3, 1, 0],
            practiceCompleted: [true, true, true],
            targets: {},
        });

        expect(summary.overall.current).toBe(1);
    });
});
