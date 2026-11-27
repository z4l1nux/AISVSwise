import { CONTROLS, PRACTICE_CATALOG } from './practiceCatalog';
import type { TargetsMap } from './targets';

export interface PracticeGap {
    practiceId: string;
    control: string;
    current: number | null;
    target: number | null;
    gap: number | null;
    hasTarget: boolean;
    assessed: boolean;
}

export interface ControlGap {
    control: string;
    current: number | null;
    target: number | null;
    gap: number | null;
}

export interface GapSummary {
    byPractice: PracticeGap[];
    byControl: ControlGap[];
    overall: { current: number | null; target: number | null; gap: number | null };
    coverage: { practicesWithTarget: number; totalPractices: number; assessedPractices: number };
}

export interface GapInput {
    practiceNames: string[];
    practiceScores: number[];
    practiceCompleted: boolean[];
    targets: TargetsMap;
}

function round2(value: number): number {
    return Math.round(value * 100) / 100;
}

function average(values: number[]): number | null {
    if (!values.length) return null;
    return round2(values.reduce((sum, value) => sum + value, 0) / values.length);
}

export function computeGap({
    practiceNames,
    practiceScores,
    practiceCompleted,
    targets,
}: GapInput): GapSummary {
    const currentByName = new Map<string, { score: number; completed: boolean }>();
    practiceNames.forEach((name, index) => {
        currentByName.set(name, {
            score: practiceScores[index] ?? 0,
            completed: practiceCompleted[index] ?? false,
        });
    });

    const byPractice: PracticeGap[] = PRACTICE_CATALOG.map(practice => {
        const result = currentByName.get(practice.name);
        const assessed = result?.completed === true;
        const current = assessed ? round2(result.score) : null;
        const targetEntry = targets[practice.id];
        const hasTarget = typeof targetEntry?.target === 'number';
        const target = assessed ? (hasTarget ? round2(targetEntry.target) : current) : null;
        return {
            practiceId: practice.id,
            control: practice.control,
            current,
            target,
            gap: current !== null && target !== null ? round2(target - current) : null,
            hasTarget,
            assessed,
        };
    });

    const byControl: ControlGap[] = CONTROLS.map(control => {
        const rows = byPractice.filter(row => row.control === control.name && row.current !== null);
        const current = average(rows.map(row => row.current!));
        const target = average(rows.map(row => row.target!));
        return {
            control: control.name,
            current,
            target,
            gap: current !== null && target !== null ? round2(target - current) : null,
        };
    });

    const assessedControls = byControl.filter(row => row.current !== null);
    const current = average(assessedControls.map(row => row.current!));
    const target = average(assessedControls.map(row => row.target!));
    const assessedPractices = byPractice.filter(row => row.assessed).length;

    return {
        byPractice,
        byControl,
        overall: {
            current,
            target,
            gap: current !== null && target !== null ? round2(target - current) : null,
        },
        coverage: {
            practicesWithTarget: byPractice.filter(row => row.hasTarget).length,
            totalPractices: PRACTICE_CATALOG.length,
            assessedPractices,
        },
    };
}

export function topGaps(summary: GapSummary, limit = 10): PracticeGap[] {
    return summary.byPractice
        .filter((row): row is PracticeGap & { gap: number } =>
            row.hasTarget && row.gap !== null && row.gap > 0,
        )
        .sort((a, b) => b.gap - a.gap)
        .slice(0, limit);
}
