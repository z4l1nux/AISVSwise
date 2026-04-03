import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { Bar } from 'react-chartjs-2';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import {
    Chart as ChartJS,
    CategoryScale, LinearScale, RadialLinearScale,
    PointElement, LineElement, BarElement, ArcElement,
    Title, Tooltip, Legend, Filler,
} from 'chart.js';
import Link from 'next/link';
import { Bot } from 'lucide-react';
import LLMAnalysis from '../features/ai-analysis/LLMAnalysis';
import { loadLLMSettings } from '../features/ai-analysis/LLMSettings';
import { exportReportToPdf } from '../lib/exportPdf';
import Bargraph from '../features/assessment/graphs/bargraph';
import InputFile from '../components/inputfile';
import Dataset from '../features/assessment/graphs/datasetprops';
import assessmentCalculator from '../features/assessment/graphs/testCalculator';
import SurveyButton from '../components/buttons/surveybuttons';
import type { GetServerSideProps } from 'next';
import type {
    ScoreData, ScorePayload, PreviousPayload, PracticeRow, AnalysisResult,
    LevelStat, ControlLevelData,
} from '../types';

ChartJS.register(
    CategoryScale, LinearScale, RadialLinearScale,
    PointElement, LineElement, BarElement, ArcElement,
    Title, Tooltip, Legend, Filler
);

const totalsBarGraph   = new Bargraph();
const bussFuncBarGraph = new Bargraph();
const practiceBarGraph = new Bargraph();
totalsBarGraph.set_aspect_ratio(3);
bussFuncBarGraph.set_aspect_ratio(1);
practiceBarGraph.set_aspect_ratio(1);

let dataENV: any[] = [];

function saveText(text: string, filename: string) {
    const a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    a.setAttribute('download', filename);
    a.click();
}

interface SectionCardProps {
    title?: string;
    children: React.ReactNode;
    id?: string;
}

const SectionCard = ({ title, children, id }: SectionCardProps) => (
    <div id={id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-7 mb-7 shadow-xl">
        {title && (
            <h2 className="m-0 mb-5 pb-3.5 border-b border-white/10 text-slate-200 font-[Poppins] font-semibold text-lg">
                {title}
            </h2>
        )}
        {children}
    </div>
);

// ── Heatmap cell color ────────────────────────────────────────────────────────
function heatmapColor(pct: number): { bg: string; text: string } {
    if (pct < 0)  return { bg: '#1f2937', text: '#6b7280' };   // N/A
    if (pct < 50) return { bg: '#7f1d1d', text: '#fca5a5' };   // red
    if (pct < 75) return { bg: '#78350f', text: '#fcd34d' };   // amber
    if (pct < 90) return { bg: '#14532d', text: '#86efac' };   // green
    return              { bg: '#1e3a5f', text: '#93c5fd' };    // blue
}

// ── Level compliance bar ──────────────────────────────────────────────────────
interface LevelBarProps {
    label: string;
    desc: string;
    stat: LevelStat;
    color: string;
}
const LevelBar = ({ label, desc, stat, color }: LevelBarProps) => {
    const pct = stat.pct < 0 ? 0 : stat.pct;
    return (
        <div className="mb-5">
            <div className="flex justify-between items-baseline mb-1">
                <span className="font-semibold text-slate-200 text-sm">{label}</span>
                <span className="font-bold text-lg" style={{ color }}>{pct}%</span>
            </div>
            <div className="text-xs text-slate-500 mb-2">{desc} &mdash; {stat.met}/{stat.total} requisitos</div>
            <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <div
                    className="h-3 rounded-full transition-all duration-700"
                    style={{ width: `${pct}%`, background: color }}
                />
            </div>
        </div>
    );
};

// ── Control heatmap ───────────────────────────────────────────────────────────
interface HeatmapProps {
    controlNames: string[];
    controlData: ControlLevelData[];
    naLabel: string;
    overallLabel: string;
    tCharts: any;
}
const ControlHeatmap = ({ controlNames, controlData, naLabel, overallLabel, tCharts }: HeatmapProps) => (
    <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
            <thead>
                <tr className="bg-white/5">
                    <th className="px-3 py-2.5 text-left text-slate-400 font-bold border-b-2 border-white/10 min-w-[160px]">Controle</th>
                    <th className="px-3 py-2.5 text-center text-slate-400 font-bold border-b-2 border-white/10 w-20">L1</th>
                    <th className="px-3 py-2.5 text-center text-slate-400 font-bold border-b-2 border-white/10 w-20">L2</th>
                    <th className="px-3 py-2.5 text-center text-slate-400 font-bold border-b-2 border-white/10 w-20">L3</th>
                    <th className="px-3 py-2.5 text-center text-slate-400 font-bold border-b-2 border-white/10 w-24">{overallLabel}</th>
                </tr>
            </thead>
            <tbody>
                {controlNames.map((name, i) => {
                    const cd = controlData[i];
                    if (!cd) return null;
                    const label = tCharts(`businessFunctions.${name}`) || name;
                    const overall = heatmapColor(cd.pct);
                    return (
                        <tr key={name} className={i % 2 === 0 ? 'bg-transparent' : 'bg-white/3'}>
                            <td className="px-3 py-2 text-slate-300 font-medium border-b border-white/5">{label}</td>
                            {[1, 2, 3].map(lv => {
                                const stat = cd.byLevel[lv];
                                const c = stat ? heatmapColor(stat.pct) : heatmapColor(-1);
                                const display = !stat || stat.pct < 0 ? naLabel : `${stat.pct}%`;
                                return (
                                    <td key={lv} className="px-3 py-2 text-center border-b border-white/5">
                                        <span
                                            className="inline-block rounded-md px-2 py-0.5 font-bold text-xs min-w-[48px]"
                                            style={{ background: c.bg, color: c.text }}
                                            title={stat && stat.pct >= 0 ? `${stat.met}/${stat.total}` : ''}
                                        >
                                            {display}
                                        </span>
                                    </td>
                                );
                            })}
                            <td className="px-3 py-2 text-center border-b border-white/5">
                                <span
                                    className="inline-block rounded-md px-2 py-0.5 font-bold text-xs min-w-[48px]"
                                    style={{ background: overall.bg, color: overall.text }}
                                    title={`${cd.met}/${cd.total}`}
                                >
                                    {cd.pct}%
                                </span>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
);

const Results = () => {
    const t       = useTranslations('results');
    const tCharts = useTranslations('charts');
    const tLLM    = useTranslations('llm');
    const tMeta   = useTranslations('meta');
    const router  = useRouter();
    const locale  = router.locale || 'en';

    const currentLabel  = tCharts('currentAssessment');
    const previousLabel = tCharts('previousAssessment');
    const responseLabels = [
        tCharts('responseLabels.no'),
        tCharts('responseLabels.yesForSome'),
        tCharts('responseLabels.yesForMost'),
        tCharts('responseLabels.yesForAll'),
    ];

    totalsBarGraph.metaData.labels = responseLabels;
    totalsBarGraph.setDatasetLabel(currentLabel);
    bussFuncBarGraph.setDatasetLabel(currentLabel);
    practiceBarGraph.setDatasetLabel(currentLabel);

    const [display,          setDisplay]         = useState(false);
    const [showPrevious,     setShowPrevious]     = useState(false);
    const [scoreData,        setScoreData]        = useState<ScoreData | null>(null);
    const [completionText,   setCompletionText]   = useState('');
    const [llmSettings,      setLLMSettings]      = useState<any>(null);
    const [scorePayload,     setScorePayload]     = useState<ScorePayload | null>(null);
    const [prevPayload,      setPrevPayload]      = useState<PreviousPayload | null>(null);
    const [practiceTable,    setPracticeTable]    = useState<PracticeRow[]>([]);
    const [storedAnalysis,   setStoredAnalysis]   = useState<AnalysisResult | null>(null);
    const [isFreshCompletion,setIsFreshCompletion]= useState(false);
    const [isExporting,      setIsExporting]      = useState(false);
    const [exportError,      setExportError]      = useState('');
    const [levelStats,       setLevelStats]       = useState<{ L1: LevelStat; L2: LevelStat; L3: LevelStat } | null>(null);
    const [controlData,      setControlData]      = useState<ControlLevelData[]>([]);
    const componentRef = useRef<HTMLDivElement>(null);

    const handleExport = async () => {
        if (!componentRef.current) return;
        setIsExporting(true);
        setExportError('');
        try {
            const company = scoreData?.company || 'AISVS';
            const project = scoreData?.project || new Date().toLocaleDateString();
            await exportReportToPdf(componentRef.current, `${company}-${project}.pdf`);
        } catch (err: any) {
            console.error('PDF export failed:', err);
            setExportError(t('exportError'));
        } finally {
            setIsExporting(false);
        }
    };

    function reloadPage() { location.reload(); }

    useEffect(() => {
        setLLMSettings(loadLLMSettings());

        const fresh = sessionStorage.getItem('freshCompletion') === 'true';
        sessionStorage.removeItem('freshCompletion');
        setIsFreshCompletion(fresh);

        const previousData           = sessionStorage.getItem('prevResults');
        const assessmentSessionState = JSON.parse(sessionStorage.getItem('assessmentState')!);
        const userStateUpdate        = JSON.parse(sessionStorage.getItem('userState') || '{}');
        userStateUpdate['page']              = 'resultsPage';
        userStateUpdate['has_switched_page'] = true;
        sessionStorage.setItem('userState', JSON.stringify(userStateUpdate));

        const hasAnswers = assessmentSessionState &&
            Object.keys(assessmentSessionState).some(
                k => k.startsWith('q_c') && assessmentSessionState[k] !== null
            );
        if (!hasAnswers) {
            setCompletionText(t('mustComplete'));
            return;
        }

        dataENV[0] = assessmentSessionState;

        if (assessmentSessionState.llmAnalysis) {
            setStoredAnalysis(assessmentSessionState.llmAnalysis);
        }

        if (previousData) {
            setShowPrevious(true);
            dataENV[1] = JSON.parse(previousData);
            if (bussFuncBarGraph.metaData.datasets.length < 2) {
                const prevLabel = tCharts('previousDataset');
                totalsBarGraph.metaData.datasets.push(new Dataset(prevLabel).metaData);
                bussFuncBarGraph.metaData.datasets.push(new Dataset(prevLabel).metaData);
                practiceBarGraph.metaData.datasets.push(new Dataset(prevLabel).metaData);
            }
        }

        let builtTable: PracticeRow[] = [];

        for (let dataNum = 0; dataNum < dataENV.length; dataNum++) {
            const testCalc = new assessmentCalculator(dataENV[dataNum]);
            testCalc.computeResults();

            const bfLabels = testCalc.businessFunctionNames.map(
                (name: string) => tCharts(`businessFunctions.${name}`) || name
            );
            const practiceLabels = testCalc.practiceNames;

            bussFuncBarGraph.metaData.labels           = bfLabels;
            bussFuncBarGraph.metaData.datasets[dataNum].data = testCalc.businessFunctionScores;

            practiceBarGraph.metaData.labels           = practiceLabels;
            practiceBarGraph.metaData.datasets[dataNum].data = testCalc.practiceScores;

            const totalsCount: number[] = [
                testCalc.responseCount['No'],
                testCalc.responseCount['Yes, for some'],
                testCalc.responseCount['Yes, for most'],
                testCalc.responseCount['Yes, for all'],
            ];
            totalsBarGraph.metaData.datasets[dataNum].data = totalsCount;

            if (dataNum === 0) {
                const score   = parseFloat(testCalc.overallScore.toFixed(2));
                const percent = parseFloat((score / 3).toFixed(4));
                setScoreData({
                    score, prevScore: null, percent,
                    company: dataENV[0]['Company Name']           || '',
                    project: dataENV[0]['Project name']           || '',
                    desc:    dataENV[0]['Description of Project'] || '',
                });
                setScorePayload({
                    overallScore:   score,
                    bfNames:        testCalc.businessFunctionNames,
                    bfScores:       testCalc.businessFunctionScores,
                    practiceNames:  testCalc.practiceNames,
                    practiceScores: testCalc.practiceScores,
                    responseCount:  testCalc.responseCount,
                    company:        dataENV[0]['Company Name'] || '',
                    project:        dataENV[0]['Project name'] || '',
                    levelCompliance: testCalc.levelCompliance,
                    controlData:     testCalc.controlData,
                });
                setLevelStats(testCalc.levelCompliance);
                setControlData(testCalc.controlData);

                builtTable = [];
                for (const bf of testCalc.businessFunctionNames) {
                    const practicesObj = testCalc.sammModel[bf].practices;
                    for (const practice of Object.keys(practicesObj)) {
                        builtTable.push({ bf, practice, score: practicesObj[practice].score });
                    }
                }
                setPracticeTable(builtTable);
            }

            if (dataNum === 1) {
                setPrevPayload({
                    overallScore:   parseFloat(testCalc.overallScore.toFixed(2)),
                    bfNames:        testCalc.businessFunctionNames,
                    bfScores:       testCalc.businessFunctionScores,
                    practiceNames:  testCalc.practiceNames,
                    practiceScores: testCalc.practiceScores,
                    responseCount:  testCalc.responseCount,
                    company: '', project: '',
                });
            }
        }

        setCompletionText(t('completionText'));
        setDisplay(true);
    }, []);

    useEffect(() => {
        if (!scorePayload) return;
    }, [scorePayload]);

    const handleAnalysisGenerated = (analysisObj: AnalysisResult) => {
        setStoredAnalysis(analysisObj);
        if (dataENV[0]) {
            dataENV[0].llmAnalysis = analysisObj;
            sessionStorage.setItem('assessmentState', JSON.stringify(dataENV[0]));
        }
    };

    const llmIsConfigured = llmSettings && (llmSettings.encryptedKey || llmSettings.provider === 'ollama');

    // pct → compliance level label/color (for table)
    function complianceBand(pct: number): { color: string; label: string } {
        if (pct < 50) return { color: '#fc8181', label: t('maturityBands.initial') };
        if (pct < 75) return { color: '#f6ad55', label: t('maturityBands.managed') };
        if (pct < 90) return { color: '#68d391', label: t('maturityBands.defined') };
        return              { color: '#4299e1', label: t('maturityBands.optimized') };
    }

    return (
        <>
            <Head>
                <title>{tMeta('resultsTitle')}</title>
                <meta name="description" content={tMeta('description')} />
                <meta name="keywords" content={tMeta('keywords')} />
            </Head>

            <div ref={componentRef}>

                {/* ── Header ── */}
                {completionText && (
                    <div className="results-header-card bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-400/20 backdrop-blur-md rounded-2xl p-8 mb-7 shadow-[0_8px_32px_rgba(0,229,255,0.15)] relative">
                        <h1 className="text-white m-0 font-[Poppins] text-2xl font-semibold">{completionText}</h1>
                        {scoreData && (
                            <>
                                {scoreData.company && (
                                    <p className="text-slate-300 mt-2 text-base">
                                        {scoreData.company}{scoreData.project ? ` — ${scoreData.project}` : ''}
                                    </p>
                                )}
                                {scoreData.desc && (
                                    <p className="text-slate-400 mt-1 text-sm">{scoreData.desc}</p>
                                )}
                            </>
                        )}
                        <Link href="/ai" className="no-print absolute top-5 right-5 px-4 py-2 rounded-xl bg-white/10 border border-white/30 text-white text-sm font-semibold hover:bg-white/20 transition-all duration-200 no-underline">
                            <Bot className="w-4 h-4 inline mr-1.5" /> {tLLM('configureButton')}
                            {llmIsConfigured && llmSettings?.autoAnalysis && (
                                <span className="ml-1.5 bg-green-500 rounded-full px-1.5 py-0.5 text-xs">ON</span>
                            )}
                        </Link>
                    </div>
                )}

                {/* ── L1 / L2 / L3 Compliance ── */}
                {display && levelStats && (
                    <SectionCard id="levelSection" title={t('levelCompliance')}>
                        <p className="text-slate-500 text-sm mb-6">{t('levelDesc')}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white/5 rounded-xl p-5 border border-red-400/20">
                                <LevelBar
                                    label={t('l1Label')}
                                    desc={t('l1Desc')}
                                    stat={levelStats.L1}
                                    color="#f87171"
                                />
                            </div>
                            <div className="bg-white/5 rounded-xl p-5 border border-amber-400/20">
                                <LevelBar
                                    label={t('l2Label')}
                                    desc={t('l2Desc')}
                                    stat={levelStats.L2}
                                    color="#fbbf24"
                                />
                            </div>
                            <div className="bg-white/5 rounded-xl p-5 border border-blue-400/20">
                                <LevelBar
                                    label={t('l3Label')}
                                    desc={t('l3Desc')}
                                    stat={levelStats.L3}
                                    color="#60a5fa"
                                />
                            </div>
                        </div>

                        {/* Maturity legend */}
                        <div className="mt-6 flex flex-wrap gap-2 justify-center text-xs text-slate-500">
                            {[
                                { range: '0–49%',  color: '#fca5a5', label: t('maturityBands.initial')   },
                                { range: '50–74%', color: '#fcd34d', label: t('maturityBands.managed')   },
                                { range: '75–89%', color: '#86efac', label: t('maturityBands.defined')   },
                                { range: '90–100%',color: '#93c5fd', label: t('maturityBands.optimized') },
                            ].map(b => (
                                <span key={b.label} className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full">
                                    <span className="w-2 h-2 rounded-full inline-block" style={{ background: b.color }} />
                                    {b.label} ({b.range})
                                </span>
                            ))}
                        </div>

                        {/* Response distribution */}
                        <h3 className="text-center mt-8 mb-3 text-slate-400 font-semibold text-sm uppercase tracking-wider">{t('responseCount')}</h3>
                        <div className="no-print text-center mb-3">
                            <SurveyButton name={t('refresh')} onClick={reloadPage} />
                        </div>
                        <Bar data={totalsBarGraph.metaData} options={totalsBarGraph.layout_props} className="totalsBar" />
                    </SectionCard>
                )}

                {/* ── Control Heatmap ── */}
                {display && controlData.length > 0 && scorePayload && (
                    <SectionCard id="heatmapSection" title={t('controlHeatmap')}>
                        <p className="text-slate-500 text-sm mb-5">{t('heatmapDesc')}</p>
                        <ControlHeatmap
                            controlNames={scorePayload.bfNames}
                            controlData={controlData}
                            naLabel={t('naLabel')}
                            overallLabel={t('overallPct')}
                            tCharts={tCharts}
                        />
                    </SectionCard>
                )}

                {/* ── Score by Control (bar) ── */}
                {display && (
                    <SectionCard id="bussFuncSection" title={t('controlCompliance')}>
                        <Bar data={bussFuncBarGraph.metaData} options={bussFuncBarGraph.layout_props} className="bussFuncBar" />
                        {showPrevious && prevPayload && (
                            <p className="text-xs text-slate-500 text-center mt-2">
                                {tCharts('currentAssessment')} vs {tCharts('previousAssessment')}
                            </p>
                        )}
                    </SectionCard>
                )}

                {/* ── Sub-Control Breakdown (practice table) ── */}
                {display && practiceTable.length > 0 && (
                    <SectionCard id="practiceTableSection" title={t('subControlBreakdown')}>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="px-3.5 py-2.5 text-left text-slate-400 font-bold border-b-2 border-white/10">{t('businessFunction')}</th>
                                        <th className="px-3.5 py-2.5 text-left text-slate-400 font-bold border-b-2 border-white/10">{t('practice')}</th>
                                        <th className="px-3.5 py-2.5 text-center text-slate-400 font-bold border-b-2 border-white/10">{t('compliancePct')}</th>
                                        <th className="px-3.5 py-2.5 text-left text-slate-400 font-bold border-b-2 border-white/10">{t('maturityLevel')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {practiceTable.map((row, i) => {
                                        // score is 0–3; convert to 0–100%
                                        const pct = Math.round((row.score / 3) * 100);
                                        const band = complianceBand(pct);
                                        return (
                                            <tr key={i} className={i % 2 === 0 ? 'bg-transparent' : 'bg-white/3'}>
                                                <td className="px-3.5 py-2 text-slate-400 border-b border-white/5">
                                                    {tCharts(`businessFunctions.${row.bf}`) || row.bf}
                                                </td>
                                                <td className="px-3.5 py-2 text-slate-300 font-medium border-b border-white/5">
                                                    {row.practice}
                                                </td>
                                                <td className="px-3.5 py-2 text-center border-b border-white/5">
                                                    <span className="font-bold rounded-full px-2.5 py-0.5" style={{ color: band.color, background: band.color + '30' }}>
                                                        {pct}%
                                                    </span>
                                                </td>
                                                <td className="px-3.5 py-2 border-b border-white/5">
                                                    <span className="text-xs font-semibold" style={{ color: band.color }}>
                                                        {band.label}
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </SectionCard>
                )}

                {/* ── Score by Sub-Control (bar) ── */}
                {display && (
                    <SectionCard id="practiceSection" title={t('maturityByPractice')}>
                        <Bar data={practiceBarGraph.metaData} options={practiceBarGraph.layout_props} className="practiceBar" />
                    </SectionCard>
                )}

                {/* ── AI Analysis ── */}
                {display && scorePayload && (
                    <LLMAnalysis
                        scorePayload={scorePayload}
                        previous={prevPayload}
                        locale={locale}
                        storedAnalysis={storedAnalysis}
                        onAnalysisGenerated={handleAnalysisGenerated}
                        autoTrigger={llmSettings?.autoAnalysis && !storedAnalysis && isFreshCompletion}
                    />
                )}

            </div>

            {/* ── Export / Load ── */}
            {display && (
                <SectionCard>
                    <div className="flex flex-wrap gap-8 justify-center">
                        <div className="text-center">
                            <p className="font-semibold mb-3 text-slate-200">{t('saveJson')}</p>
                            <button className="btn" onClick={() =>
                                saveText(
                                    JSON.stringify(dataENV[0]),
                                    `${scoreData?.company || 'AISVS'}-${scoreData?.project || 'Assessment'}.json`
                                )
                            }>
                                {t('saveFile')}
                            </button>
                        </div>
                        <div className="text-center">
                            <p className="font-semibold mb-3 text-slate-200">{t('loadPrevious')}</p>
                            <InputFile fileName="prevResults" />
                        </div>
                        <div className="text-center">
                            <p className="font-semibold mb-3 text-slate-200">{t('exportPdf')}</p>
                            <button className="btn" onClick={handleExport} disabled={isExporting}>
                                {isExporting ? t('exportGenerating') : t('exportGraphs')}
                            </button>
                            {exportError && (
                                <p className="text-red-400 text-sm mt-2">{exportError}</p>
                            )}
                        </div>
                    </div>
                </SectionCard>
            )}
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
    props: {
        messages: (await import(`../messages/${locale}.json`)).default,
    },
});

export default Results;
