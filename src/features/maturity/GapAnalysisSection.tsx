import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Bar } from 'react-chartjs-2';
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Tooltip,
} from 'chart.js';
import { Target } from 'lucide-react';
import { computeGap, topGaps, type GapSummary } from './gapAnalysis';
import { loadTargets } from './targets';
import { findPractice } from './practiceCatalog';
import type { ScorePayload } from '../../types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface GapAnalysisSectionProps {
    scorePayload: ScorePayload;
}

function gapColor(gap: number): string {
    if (gap <= 0) return '#68d391';
    if (gap < 0.75) return '#f6ad55';
    if (gap < 1.5) return '#fc8181';
    return '#e53e3e';
}

function formatScore(value: number | null): string {
    return value === null ? '—' : value.toFixed(2);
}

export default function GapAnalysisSection({ scorePayload }: GapAnalysisSectionProps) {
    const t = useTranslations('maturity');
    const tCharts = useTranslations('charts');
    const [summary, setSummary] = useState<GapSummary | null>(null);

    useEffect(() => {
        setSummary(computeGap({
            practiceNames: scorePayload.practiceNames,
            practiceScores: scorePayload.practiceScores,
            practiceCompleted: scorePayload.practiceCompleted ?? [],
            targets: loadTargets(),
        }));
    }, [scorePayload]);

    const top = useMemo(() => summary ? topGaps(summary, 10) : [], [summary]);
    const controlRows = summary?.byControl.filter(row => row.current !== null) ?? [];
    const barData = {
        labels: top.map(row => row.practiceId),
        datasets: [{
            label: t('gapColumn'),
            data: top.map(row => row.gap ?? 0),
            backgroundColor: top.map(row => gapColor(row.gap ?? 0)),
            borderColor: top.map(row => gapColor(row.gap ?? 0)),
            borderWidth: 1,
        }],
    };
    const controlData = {
        labels: controlRows.map(row => tCharts(`businessFunctions.${row.control}`)),
        datasets: [
            {
                label: t('gapCurrent'),
                data: controlRows.map(row => row.current ?? 0),
                backgroundColor: 'rgba(255, 99, 132, 0.55)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: t('gapTarget'),
                data: controlRows.map(row => row.target ?? 0),
                backgroundColor: 'rgba(0, 229, 255, 0.55)',
                borderColor: 'rgba(0, 229, 255, 1)',
                borderWidth: 1,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            x: { suggestedMin: 0, suggestedMax: 3, grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#94a3b8' } },
            y: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#e2e8f0' } },
        },
        plugins: { legend: { labels: { color: '#e2e8f0' } } },
    };
    const topChartOptions = {
        ...chartOptions,
        indexAxis: 'y' as const,
        scales: {
            x: { suggestedMin: 0, suggestedMax: 3, grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#94a3b8' } },
            y: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#e2e8f0' } },
        },
        plugins: { legend: { display: false } },
    };

    if (!summary) return null;

    const hasTargets = summary.coverage.practicesWithTarget > 0;
    const targetedRows = summary.byPractice
        .filter(row => row.hasTarget)
        .sort((a, b) => (b.gap ?? -Infinity) - (a.gap ?? -Infinity));

    return (
        <section id="gapAnalysisSection" className="mb-7 rounded-2xl border border-white/10 bg-white/5 p-7 shadow-xl backdrop-blur-md">
            <h2 className="mb-1 flex items-center gap-2 font-[Poppins] text-lg font-semibold text-slate-200">
                <Target className="h-5 w-5 text-cyan-400" /> {t('gapTitle')}
            </h2>
            <p className="mb-5 text-sm text-slate-400">{t('gapSubtitle')}</p>

            {!hasTargets ? (
                <div className="rounded-xl border border-dashed border-white/15 bg-white/5 px-4 py-8 text-center">
                    <p className="mb-4 text-slate-300">{t('gapNoTargets')}</p>
                    <Link href="/targets" className="no-print btn inline-block">{t('gapSetTargets')}</Link>
                </div>
            ) : (
                <>
                    <div className="mb-6 flex flex-wrap gap-3">
                        <div className="min-w-[145px] flex-1 rounded-xl bg-white/5 p-4 text-center">
                            <div className="text-xs uppercase tracking-wide text-slate-400">{t('overallCurrent')}</div>
                            <div className="text-2xl font-bold text-slate-100">{formatScore(summary.overall.current)}</div>
                        </div>
                        <div className="min-w-[145px] flex-1 rounded-xl bg-white/5 p-4 text-center">
                            <div className="text-xs uppercase tracking-wide text-slate-400">{t('overallTarget')}</div>
                            <div className="text-2xl font-bold text-cyan-300">{formatScore(summary.overall.target)}</div>
                        </div>
                        <div className="min-w-[145px] flex-1 rounded-xl bg-white/5 p-4 text-center">
                            <div className="text-xs uppercase tracking-wide text-slate-400">{t('overallGap')}</div>
                            <div className="text-2xl font-bold" style={{ color: summary.overall.gap === null ? '#94a3b8' : gapColor(summary.overall.gap) }}>
                                {summary.overall.gap === null ? '—' : `${summary.overall.gap > 0 ? '+' : ''}${summary.overall.gap.toFixed(2)}`}
                            </div>
                        </div>
                        <div className="min-w-[145px] flex-1 rounded-xl bg-white/5 p-4 text-center">
                            <div className="text-xs uppercase tracking-wide text-slate-400">{t('coverageLabel')}</div>
                            <div className="text-2xl font-bold text-slate-100">
                                {summary.coverage.practicesWithTarget}/{summary.coverage.totalPractices}
                            </div>
                            <div className="mt-1 text-xs text-slate-500">
                                {t('assessedCount', { count: summary.coverage.assessedPractices })}
                            </div>
                        </div>
                    </div>

                    {summary.coverage.assessedPractices === 0 ? (
                        <div className="rounded-xl border border-dashed border-amber-400/20 bg-amber-500/5 px-4 py-8 text-center text-slate-300">
                            <p>{t('gapNoAssessed')}</p>
                            <Link href="/assessment" className="no-print mt-3 inline-block text-cyan-400 hover:text-cyan-300">
                                {t('startAssessment')} →
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="mb-2 flex flex-wrap gap-4">
                                <div className="min-w-[280px] flex-[1_1_52%]">
                                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.05em] text-slate-400">{t('gapControlsTitle')}</h3>
                                    <Bar data={controlData} options={chartOptions} />
                                </div>
                                {top.length > 0 && (
                                    <div className="min-w-[280px] flex-[1_1_42%]">
                                        <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.05em] text-slate-400">{t('gapTopTitle')}</h3>
                                        <Bar data={barData} options={topChartOptions} />
                                    </div>
                                )}
                            </div>

                            <div className="mt-6 overflow-x-auto">
                                <table className="w-full border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-white/5">
                                            <th className="border-b-2 border-white/10 px-3.5 py-2.5 text-left font-bold text-slate-400">{t('practiceLabel')}</th>
                                            <th className="border-b-2 border-white/10 px-3.5 py-2.5 text-center font-bold text-slate-400">{t('overallCurrent')}</th>
                                            <th className="border-b-2 border-white/10 px-3.5 py-2.5 text-center font-bold text-slate-400">{t('overallTarget')}</th>
                                            <th className="border-b-2 border-white/10 px-3.5 py-2.5 text-center font-bold text-slate-400">{t('gapColumn')}</th>
                                            <th className="no-print border-b-2 border-white/10 px-3.5 py-2.5 text-center font-bold text-slate-400">{t('plans')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {targetedRows.map((row, index) => {
                                            const practice = findPractice(row.practiceId);
                                            return (
                                                <tr key={row.practiceId} className={index % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.03]'}>
                                                    <td className="border-b border-white/5 px-3.5 py-2 text-slate-300">
                                                        <span className="mr-2 font-semibold text-cyan-300">{row.practiceId}</span>
                                                        {practice?.name.slice(row.practiceId.length + 1)}
                                                        {!row.assessed && <span className="ml-2 text-xs text-slate-500">{t('notAssessed')}</span>}
                                                    </td>
                                                    <td className="border-b border-white/5 px-3.5 py-2 text-center text-slate-300">{formatScore(row.current)}</td>
                                                    <td className="border-b border-white/5 px-3.5 py-2 text-center text-cyan-300">{formatScore(row.target)}</td>
                                                    <td className="border-b border-white/5 px-3.5 py-2 text-center">
                                                        {row.gap === null ? (
                                                            <span className="text-slate-500">—</span>
                                                        ) : row.gap <= 0 ? (
                                                            <span className="text-xs font-semibold text-green-400">{t('onTarget')}</span>
                                                        ) : (
                                                            <span className="rounded-full px-2.5 py-0.5 font-bold" style={{ color: gapColor(row.gap), background: `${gapColor(row.gap)}30` }}>
                                                                +{row.gap.toFixed(2)}
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td className="no-print border-b border-white/5 px-3.5 py-2 text-center">
                                                        <Link
                                                            href={`/action-plans?practice=${encodeURIComponent(row.practiceId)}`}
                                                            className="text-cyan-400 hover:text-cyan-300"
                                                        >
                                                            {t('addPlan')}
                                                        </Link>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            <div className="no-print mt-5 text-center">
                                <Link href="/targets" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300">
                                    {t('gapEditTargets')} →
                                </Link>
                            </div>
                        </>
                    )}
                </>
            )}
        </section>
    );
}
