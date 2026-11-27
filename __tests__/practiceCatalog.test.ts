import assessmentCalculator from '../src/features/assessment/graphs/testCalculator';
import getSurvey from '../src/features/assessment/surveys/totalsurvey';
import { CONTROLS, PRACTICE_CATALOG } from '../src/features/maturity/practiceCatalog';

function buildAnswers(): Record<string, number> {
    const answers: Record<string, number> = {};
    getSurvey().pages.forEach((page: any) => {
        (page.elements || []).forEach((panel: any) => {
            (panel.elements || []).forEach((question: any) => {
                answers[question.name] = 0.5;
            });
        });
    });
    return answers;
}

describe('AISVS practice catalog', () => {
    it('matches every scored sub-control in the survey and calculator order', () => {
        const calculator = new assessmentCalculator(buildAnswers());
        calculator.computeResults();

        expect(PRACTICE_CATALOG.map(practice => practice.name)).toEqual(calculator.practiceNames);
        expect(PRACTICE_CATALOG).toHaveLength(97);
        expect(CONTROLS).toHaveLength(14);
    });

    it('uses unique stable AISVS requirement IDs', () => {
        const ids = PRACTICE_CATALOG.map(practice => practice.id);
        expect(new Set(ids).size).toBe(ids.length);
        expect(ids.every(id => /^C\d+\.\d+$/.test(id))).toBe(true);
    });
});
