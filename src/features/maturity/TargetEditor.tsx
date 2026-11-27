import React, { useEffect, useState } from 'react';
import { Check, RotateCcw } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { CONTROLS, PRACTICE_CATALOG } from './practiceCatalog';
import {
    clearTargets,
    loadTargets,
    saveTargets,
    setTarget,
    resetTarget,
    clampTarget,
    type TargetsMap,
} from './targets';

const PRESETS = [1, 2, 3] as const;

export default function TargetEditor() {
    const t = useTranslations('maturity');
    const tCharts = useTranslations('charts');
    const [targets, setTargets] = useState<TargetsMap>({});
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        setTargets(loadTargets());
    }, []);

    const showSaved = () => {
        setSaved(true);
        window.setTimeout(() => setSaved(false), 1500);
    };

    const setPracticeTarget = (id: string, value: number) => {
        const next = setTarget(targets, id, value, targets[id]?.notes);
        setTargets(next);
        showSaved();
    };

    const setPracticeNotes = (id: string, notes: string) => {
        const current = targets[id]?.target;
        if (typeof current !== 'number') return;
        setTargets(setTarget(targets, id, current, notes));
    };

    const applyPreset = (value: number) => {
        const next: TargetsMap = {};
        for (const practice of PRACTICE_CATALOG) {
            next[practice.id] = {
                target: clampTarget(value),
                notes: targets[practice.id]?.notes,
            };
        }
        saveTargets(next);
        setTargets(next);
        showSaved();
    };

    const clearAll = () => {
        clearTargets();
        setTargets({});
        showSaved();
    };

    return (
        <div>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-slate-400">
                    {t('coverageSummary', { count: Object.keys(targets).length, total: PRACTICE_CATALOG.length })}
                    {saved && (
                        <span className="ml-3 inline-flex items-center gap-1 text-xs font-semibold text-green-400">
                            <Check className="h-3.5 w-3.5" /> {t('saved')}
                        </span>
                    )}
                </p>
                <div className="no-print flex items-center gap-2">
                    <span className="text-xs text-slate-500">{t('presetLabel')}</span>
                    {PRESETS.map(value => (
                        <button
                            key={value}
                            type="button"
                            onClick={() => applyPreset(value)}
                            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 hover:bg-white/10"
                        >
                            {value}
                        </button>
                    ))}
                    <button
                        type="button"
                        onClick={clearAll}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-400 hover:bg-red-500/10 hover:text-red-300"
                    >
                        {t('clearAll')}
                    </button>
                </div>
            </div>

            {CONTROLS.map((control, index) => (
                <details key={control.name} open={index === 0} className="mb-3 rounded-xl border border-white/10 bg-white/[0.03]">
                    <summary className="cursor-pointer px-4 py-3 font-semibold text-cyan-400">
                        {tCharts(`businessFunctions.${control.name}`)}{' '}
                        <span className="text-xs font-normal text-slate-500">
                            ({control.practices.filter(practice => targets[practice.id]).length}/{control.practices.length})
                        </span>
                    </summary>
                    <div className="space-y-3 px-4 pb-4">
                        {control.practices.map(practice => {
                            const entry = targets[practice.id];
                            const hasTarget = typeof entry?.target === 'number';
                            const value = entry?.target ?? 0;
                            return (
                                <div key={practice.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <div className="min-w-[220px] flex-1 text-sm font-medium text-slate-200">
                                            <span className="mr-2 text-cyan-300">{practice.id}</span>
                                            {' '}{practice.name.slice(practice.id.length + 1)}
                                        </div>
                                        <div className="flex min-w-[220px] flex-1 items-center gap-3">
                                            <input
                                                aria-label={practice.name}
                                                type="range"
                                                min={0}
                                                max={3}
                                                step={0.25}
                                                value={value}
                                                onChange={event => setPracticeTarget(practice.id, Number(event.target.value))}
                                                className="flex-1 cursor-pointer accent-cyan-400"
                                            />
                                            <span className={`w-12 rounded-md px-2 py-0.5 text-center text-sm font-bold ${hasTarget ? 'bg-cyan-400/10 text-cyan-300' : 'text-slate-500'}`}>
                                                {hasTarget ? value.toFixed(2) : '—'}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setTargets(resetTarget(targets, practice.id));
                                                    showSaved();
                                                }}
                                                disabled={!hasTarget}
                                                title={t('reset')}
                                                aria-label={`${t('reset')} ${practice.id}`}
                                                className="no-print rounded-md p-1.5 text-slate-500 transition-colors hover:bg-red-500/10 hover:text-red-300 disabled:cursor-not-allowed disabled:opacity-30"
                                            >
                                                <RotateCcw className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                    {hasTarget && (
                                        <input
                                            type="text"
                                            value={entry.notes ?? ''}
                                            onChange={event => setPracticeNotes(practice.id, event.target.value)}
                                            placeholder={t('notesPlaceholder')}
                                            maxLength={2000}
                                            aria-label={`${t('notesLabel')} ${practice.id}`}
                                            className="mt-3 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-600 focus:border-cyan-400/40 focus:outline-none"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </details>
            ))}
        </div>
    );
}
