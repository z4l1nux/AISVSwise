import getSurvey from '../surveys/totalsurvey';

interface AnswerMap {
  [key: string]: number | null;
}

interface PracticeData {
  answers: Map<string, number | null>;
  levels: Map<string, number>;
  score: number;
}

interface BusinessFunction {
  totalScore: number;
  practices: Record<string, PracticeData>;
}

interface SAMMModel {
  [bussFunc: string]: BusinessFunction;
}

interface ResponseCount {
  [key: string]: number;
  'No': number;
  'Yes, for some': number;
  'Yes, for most': number;
  'Yes, for all': number;
}

export interface LevelStat {
  total: number;
  met: number;
  pct: number;  // -1 = N/A (no questions at this level)
}

export interface ControlLevelData {
  total: number;
  met: number;
  pct: number;
  byLevel: { [level: number]: LevelStat };
}

function parseLevel(description: string): number {
  const m = description?.match(/Level:\s*(\d)/);
  return m ? parseInt(m[1], 10) : 0;
}

function isMet(val: number | null): boolean {
  return val !== null && val >= 0.5;
}

export default class assessmentCalculator {
  answerValues: AnswerMap;
  sammModel: SAMMModel;
  overallScore: number;
  responseCount: ResponseCount;
  businessFunctionNames: string[];
  practiceNames: string[];
  businessFunctionScores: number[];
  practiceScores: number[];
  levelCompliance: { L1: LevelStat; L2: LevelStat; L3: LevelStat };
  controlData: ControlLevelData[];

  constructor(answerValues: AnswerMap) {
    this.answerValues = answerValues;
    this.overallScore = 0;
    this.responseCount = { 'No': 0, 'Yes, for some': 0, 'Yes, for most': 0, 'Yes, for all': 0 };
    this.businessFunctionNames = [];
    this.practiceNames = [];
    this.businessFunctionScores = [];
    this.practiceScores = [];
    this.levelCompliance = {
      L1: { total: 0, met: 0, pct: 0 },
      L2: { total: 0, met: 0, pct: 0 },
      L3: { total: 0, met: 0, pct: 0 },
    };
    this.controlData = [];

    const dynamicModel: SAMMModel = {};
    const surveyData = getSurvey();

    surveyData.pages.forEach((page: any) => {
      const bussFunc = page.name || page.title;
      this.businessFunctionNames.push(bussFunc);
      const practices: Record<string, PracticeData> = {};

      if (page.elements) {
        page.elements.forEach((panel: any) => {
          const practiceName = panel.title || panel.name;
          const answerMap = new Map<string, number | null>();
          const levelsMap = new Map<string, number>();

          if (panel.elements) {
            panel.elements.forEach((q: any) => {
              answerMap.set(
                q.name,
                this.answerValues && this.answerValues[q.name] !== undefined
                  ? this.answerValues[q.name]
                  : null
              );
              levelsMap.set(q.name, parseLevel(q.description || ''));
            });
          }

          practices[practiceName] = { answers: answerMap, levels: levelsMap, score: 0 };
        });
      }

      dynamicModel[bussFunc] = { totalScore: 0, practices };
    });

    this.sammModel = dynamicModel;
  }

  isPracticeCompleted(values: (number | null)[]): boolean {
    return !values.some(el => el == null);
  }

  sortResponseCount(values: (number | null)[]): void {
    for (let i = 0; i < values.length; i++) {
      const val = Number(values[i]);
      if (val === 0)    this.responseCount['No']++;
      if (val === 0.25) this.responseCount['Yes, for some']++;
      if (val === 0.5)  this.responseCount['Yes, for most']++;
      if (val === 1)    this.responseCount['Yes, for all']++;
    }
  }

  computeResults(): void {
    let totalScoreSum = 0;

    const globalLevel: { [l: number]: { total: number; met: number } } = {
      1: { total: 0, met: 0 },
      2: { total: 0, met: 0 },
      3: { total: 0, met: 0 },
    };

    for (const bussFunc in this.sammModel) {
      let bussFuncTotalScore = 0;
      const practices = this.sammModel[bussFunc].practices;
      const practiceKeys = Object.keys(practices);

      const ctrlLevel: { [l: number]: { total: number; met: number } } = {
        1: { total: 0, met: 0 },
        2: { total: 0, met: 0 },
        3: { total: 0, met: 0 },
      };
      let ctrlTotal = 0;
      let ctrlMet = 0;

      for (const practice of practiceKeys) {
        this.practiceNames.push(practice);
        const answers = practices[practice].answers;
        const levels  = practices[practice].levels;
        const question_values = Array.from(answers.values()) as (number | null)[];

        if (this.isPracticeCompleted(question_values) && question_values.length > 0) {
          this.sortResponseCount(question_values);
          const vals = question_values as number[];

          const sum   = vals.reduce((acc, v) => acc + v, 0);
          const avg   = sum / vals.length;
          const score = avg * 3.0;

          practices[practice].score = score;
          bussFuncTotalScore += score;
          this.practiceScores.push(score);

          answers.forEach((val, qName) => {
            const lv = levels.get(qName) ?? 0;
            if (lv >= 1 && lv <= 3) {
              globalLevel[lv].total++;
              ctrlLevel[lv].total++;
              ctrlTotal++;
              if (isMet(val)) {
                globalLevel[lv].met++;
                ctrlLevel[lv].met++;
                ctrlMet++;
              }
            }
          });
        } else {
          this.practiceScores.push(0);
        }
      }

      const numPractices = practiceKeys.length > 0 ? practiceKeys.length : 1;
      const avgBussFuncScore = bussFuncTotalScore / numPractices;
      this.sammModel[bussFunc].totalScore = avgBussFuncScore;
      this.businessFunctionScores.push(avgBussFuncScore);
      totalScoreSum += avgBussFuncScore;

      const mkStat = (acc: { total: number; met: number }): LevelStat => ({
        total: acc.total,
        met:   acc.met,
        pct:   acc.total > 0 ? Math.round((acc.met / acc.total) * 100) : -1,
      });

      this.controlData.push({
        total: ctrlTotal,
        met:   ctrlMet,
        pct:   ctrlTotal > 0 ? Math.round((ctrlMet / ctrlTotal) * 100) : 0,
        byLevel: {
          1: mkStat(ctrlLevel[1]),
          2: mkStat(ctrlLevel[2]),
          3: mkStat(ctrlLevel[3]),
        },
      });
    }

    const numBfs = this.businessFunctionNames.length > 0 ? this.businessFunctionNames.length : 1;
    this.overallScore = totalScoreSum / numBfs;

    const mkGlobal = (l: number): LevelStat => {
      const acc = globalLevel[l];
      return {
        total: acc.total,
        met:   acc.met,
        pct:   acc.total > 0 ? Math.round((acc.met / acc.total) * 100) : 0,
      };
    };
    this.levelCompliance = { L1: mkGlobal(1), L2: mkGlobal(2), L3: mkGlobal(3) };
  }
}
