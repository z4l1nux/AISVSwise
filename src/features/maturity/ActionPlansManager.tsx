import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { AlertTriangle, Plus, Trash2, X } from 'lucide-react';
import { CONTROLS, PRACTICE_CATALOG, findPractice } from './practiceCatalog';
import {
    ACTION_PRIORITIES,
    ACTION_STATUSES,
    createActionPlan,
    deleteActionPlan,
    isOverdue,
    loadActionPlans,
    updateActionPlan,
    type ActionPlan,
    type ActionPlanInput,
    type ActionPriority,
    type ActionStatus,
} from './actionPlans';

const EMPTY_FORM: ActionPlanInput = {
    practiceId: PRACTICE_CATALOG[0].id,
    title: '',
    description: '',
    owner: '',
    dueDate: '',
    status: 'pending',
    priority: 'medium',
};

const PRIORITY_COLOR: Record<ActionPriority, string> = {
    low: '#68d391',
    medium: '#4299e1',
    high: '#f6ad55',
    critical: '#fc8181',
};

const STATUS_COLOR: Record<ActionStatus, string> = {
    pending: '#94a3b8',
    in_progress: '#4299e1',
    blocked: '#fc8181',
    done: '#68d391',
    cancelled: '#64748b',
};

const OPTION_STYLE: React.CSSProperties = { color: '#e2e8f0', background: '#1e212b' };

export default function ActionPlansManager() {
    const t = useTranslations('maturity');
    const tCharts = useTranslations('charts');
    const router = useRouter();
    const [plans, setPlans] = useState<ActionPlan[]>([]);
    const [form, setForm] = useState<ActionPlanInput>(EMPTY_FORM);
    const [showForm, setShowForm] = useState(false);
    const [formError, setFormError] = useState('');
    const [filterPractice, setFilterPractice] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [filterPriority, setFilterPriority] = useState('');

    useEffect(() => {
        setPlans(loadActionPlans());
    }, []);

    useEffect(() => {
        if (!router.isReady || typeof router.query.practice !== 'string') return;
        if (findPractice(router.query.practice)) setFilterPractice(router.query.practice);
    }, [router.isReady, router.query.practice]);

    const practiceSelect = (
        value: string,
        onChange: (next: string) => void,
        includeAll = false,
    ) => (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 focus:border-cyan-400/40 focus:outline-none"
        >
            {includeAll && <option value="" style={OPTION_STYLE}>{t('filterAllPractices')}</option>}
            {CONTROLS.map(control => (
                <optgroup key={control.name} label={tCharts(`businessFunctions.${control.name}`)} style={OPTION_STYLE}>
                    {control.practices.map(practice => (
                        <option key={practice.id} value={practice.id} style={OPTION_STYLE}>
                            {practice.id} — {practice.name.slice(practice.id.length + 1)}
                        </option>
                    ))}
                </optgroup>
            ))}
        </select>
    );

    const submit = (event: React.FormEvent) => {
        event.preventDefault();
        try {
            setPlans(createActionPlan(plans, form));
            setForm(EMPTY_FORM);
            setShowForm(false);
            setFormError('');
        } catch (error) {
            setFormError(error instanceof Error ? error.message : t('formError'));
        }
    };

    const patch = (id: string, value: Partial<ActionPlanInput>) => {
        setPlans(updateActionPlan(plans, id, value));
    };

    const remove = (id: string) => {
        if (typeof window !== 'undefined' && !window.confirm(t('deleteConfirm'))) return;
        setPlans(deleteActionPlan(plans, id));
    };

    const filtered = useMemo(() => plans.filter(plan =>
        (!filterPractice || plan.practiceId === filterPractice) &&
        (!filterStatus || plan.status === filterStatus) &&
        (!filterPriority || plan.priority === filterPriority),
    ), [plans, filterPractice, filterStatus, filterPriority]);

    return (
        <div>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div className="no-print flex flex-wrap gap-2">
                    {practiceSelect(filterPractice, setFilterPractice, true)}
                    <select
                        value={filterStatus}
                        onChange={event => setFilterStatus(event.target.value)}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                    >
                        <option value="" style={OPTION_STYLE}>{t('filterAllStatuses')}</option>
                        {ACTION_STATUSES.map(status => (
                            <option key={status} value={status} style={OPTION_STYLE}>{t(`status.${status}`)}</option>
                        ))}
                    </select>
                    <select
                        value={filterPriority}
                        onChange={event => setFilterPriority(event.target.value)}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                    >
                        <option value="" style={OPTION_STYLE}>{t('filterAllPriorities')}</option>
                        {ACTION_PRIORITIES.map(priority => (
                            <option key={priority} value={priority} style={OPTION_STYLE}>{t(`priority.${priority}`)}</option>
                        ))}
                    </select>
                </div>
                <button
                    type="button"
                    onClick={() => { setShowForm(open => !open); setFormError(''); }}
                    className="no-print btn inline-flex items-center gap-1.5"
                >
                    {showForm ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    {showForm ? t('cancel') : t('addPlan')}
                </button>
            </div>

            {showForm && (
                <form onSubmit={submit} className="mb-6 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="font-semibold text-slate-200">{t('newPlan')}</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <label className="block">
                            <span className="text-xs text-slate-400">{t('practiceLabel')}</span>
                            <div className="mt-1">{practiceSelect(form.practiceId, value => setForm(current => ({ ...current, practiceId: value })))}</div>
                        </label>
                        <label className="block">
                            <span className="text-xs text-slate-400">{t('titleLabel')}</span>
                            <input
                                type="text"
                                required
                                minLength={2}
                                maxLength={180}
                                value={form.title}
                                onChange={event => setForm(current => ({ ...current, title: event.target.value }))}
                                placeholder={t('titlePlaceholder')}
                                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                            />
                        </label>
                        <label className="block">
                            <span className="text-xs text-slate-400">{t('ownerLabel')}</span>
                            <input
                                type="text"
                                maxLength={120}
                                value={form.owner}
                                onChange={event => setForm(current => ({ ...current, owner: event.target.value }))}
                                placeholder={t('ownerPlaceholder')}
                                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                            />
                        </label>
                        <label className="block">
                            <span className="text-xs text-slate-400">{t('dueDateLabel')}</span>
                            <input
                                type="date"
                                value={form.dueDate}
                                onChange={event => setForm(current => ({ ...current, dueDate: event.target.value }))}
                                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                            />
                        </label>
                        <label className="block">
                            <span className="text-xs text-slate-400">{t('statusLabel')}</span>
                            <select
                                value={form.status}
                                onChange={event => setForm(current => ({ ...current, status: event.target.value as ActionStatus }))}
                                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                            >
                                {ACTION_STATUSES.map(status => (
                                    <option key={status} value={status} style={OPTION_STYLE}>{t(`status.${status}`)}</option>
                                ))}
                            </select>
                        </label>
                        <label className="block">
                            <span className="text-xs text-slate-400">{t('priorityLabel')}</span>
                            <select
                                value={form.priority}
                                onChange={event => setForm(current => ({ ...current, priority: event.target.value as ActionPriority }))}
                                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                            >
                                {ACTION_PRIORITIES.map(priority => (
                                    <option key={priority} value={priority} style={OPTION_STYLE}>{t(`priority.${priority}`)}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <label className="block">
                        <span className="text-xs text-slate-400">{t('descriptionLabel')}</span>
                        <textarea
                            rows={2}
                            maxLength={4000}
                            value={form.description}
                            onChange={event => setForm(current => ({ ...current, description: event.target.value }))}
                            className="mt-1 w-full resize-y rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                        />
                    </label>
                    {formError && <p role="alert" className="text-sm text-red-400">{formError}</p>}
                    <button type="submit" className="btn">{t('save')}</button>
                </form>
            )}

            {filtered.length === 0 ? (
                <div className="rounded-xl border border-dashed border-white/15 bg-white/5 px-4 py-10 text-center">
                    <p className="text-slate-400">{plans.length === 0 ? t('noPlans') : t('noPlansForFilter')}</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {filtered.map(plan => {
                        const practice = findPractice(plan.practiceId);
                        const overdue = isOverdue(plan);
                        return (
                            <div key={plan.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <div className="flex flex-wrap items-start justify-between gap-3">
                                    <div className="min-w-[200px] flex-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span
                                                className="rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide"
                                                style={{ color: PRIORITY_COLOR[plan.priority], background: `${PRIORITY_COLOR[plan.priority]}22` }}
                                            >
                                                {t(`priority.${plan.priority}`)}
                                            </span>
                                            <span className="font-semibold text-slate-100">{plan.title}</span>
                                            {overdue && (
                                                <span className="inline-flex items-center gap-1 rounded-full bg-red-500/15 px-2 py-0.5 text-[11px] font-bold text-red-300">
                                                    <AlertTriangle className="h-3 w-3" /> {t('overdue')}
                                                </span>
                                            )}
                                        </div>
                                        <div className="mt-1 text-xs text-slate-400">
                                            <span className="text-cyan-300">{plan.practiceId}</span>
                                            {practice && ` — ${practice.name.slice(plan.practiceId.length + 1)}`}
                                            {plan.owner ? ` · ${plan.owner}` : ''}
                                            {plan.dueDate ? ` · ${t('dueShort')} ${plan.dueDate}` : ''}
                                        </div>
                                        {plan.description && <p className="mt-2 text-sm text-slate-300">{plan.description}</p>}
                                    </div>
                                    <div className="no-print flex items-center gap-2">
                                        <select
                                            aria-label={`${t('statusLabel')}: ${plan.title}`}
                                            value={plan.status}
                                            onChange={event => patch(plan.id, { status: event.target.value as ActionStatus })}
                                            className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-semibold"
                                            style={{ color: STATUS_COLOR[plan.status] }}
                                        >
                                            {ACTION_STATUSES.map(status => (
                                                <option key={status} value={status} style={OPTION_STYLE}>{t(`status.${status}`)}</option>
                                            ))}
                                        </select>
                                        <button
                                            type="button"
                                            onClick={() => remove(plan.id)}
                                            title={t('delete')}
                                            aria-label={`${t('delete')} ${plan.title}`}
                                            className="rounded-md p-1.5 text-slate-500 transition-colors hover:bg-red-500/10 hover:text-red-300"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
