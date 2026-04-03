/**
 * Builds the LLM prompt for AISVS assessment analysis.
 */

import type { ScorePayload, PreviousPayload } from '../../types';

interface BuildPromptParams extends ScorePayload {
    previous: PreviousPayload | null;
    locale: string;
}

export function buildPrompt({
    overallScore,
    bfNames,
    bfScores,
    practiceNames,
    practiceScores,
    responseCount,
    levelCompliance,
    controlData,
    company,
    project,
    previous,
    locale,
}: BuildPromptParams): string {
    const lang = locale === 'pt'
        ? 'Respond entirely in Brazilian Portuguese (pt-BR).'
        : 'Respond in English.';

    const projectLine = [company, project].filter(Boolean).join(' — ');

    // ── Level compliance ─────────────────────────────────────────────────────
    let levelSection = '';
    if (levelCompliance) {
        const { L1, L2, L3 } = levelCompliance;
        levelSection = `
### Compliance by Verification Level:
  • L1 — Foundational (essential for ALL AI systems): ${L1.pct}% (${L1.met}/${L1.total} requirements met)
  • L2 — Standard (target for production AI systems): ${L2.pct}% (${L2.met}/${L2.total} requirements met)
  • L3 — Advanced (critical/regulated systems): ${L3.pct}% (${L3.met}/${L3.total} requirements met)

A requirement is "met" when answered "Yes, for most" or "Yes, for all".
`;
    }

    // ── Per-control compliance (heatmap data) ────────────────────────────────
    let controlSection = '';
    if (controlData && controlData.length === bfNames.length) {
        const lines = bfNames.map((name, i) => {
            const cd = controlData[i];
            const l1 = cd.byLevel[1]?.pct ?? -1;
            const l2 = cd.byLevel[2]?.pct ?? -1;
            const l3 = cd.byLevel[3]?.pct ?? -1;
            const fmt = (p: number) => p < 0 ? 'N/A' : `${p}%`;
            return `  • ${name}: overall ${cd.pct}% | L1 ${fmt(l1)} | L2 ${fmt(l2)} | L3 ${fmt(l3)}`;
        }).join('\n');
        controlSection = `
### Per-Control Compliance (overall % | L1 | L2 | L3):
${lines}
`;
    } else {
        // fallback: raw scores
        const lines = bfNames.map((name, i) =>
            `  • ${name}: ${((bfScores[i] / 3) * 100).toFixed(0)}%`
        ).join('\n');
        controlSection = `
### Per-Control Compliance:
${lines}
`;
    }

    // ── Weakest sub-controls ─────────────────────────────────────────────────
    const indexedPractices = practiceNames.map((name, i) => ({ name, score: practiceScores[i] }));
    const weakest = [...indexedPractices]
        .filter(p => p.score > 0) // skip unanswered
        .sort((a, b) => a.score - b.score)
        .slice(0, 10);

    const weakestLines = weakest.map(p =>
        `  • ${p.name}: ${((p.score / 3) * 100).toFixed(0)}%`
    ).join('\n');

    // ── Response distribution ────────────────────────────────────────────────
    const totalAnswers = Object.values(responseCount).reduce((a, b) => a + b, 0);
    const distributionLines = Object.entries(responseCount)
        .map(([k, v]) => `  • ${k}: ${v} (${totalAnswers > 0 ? ((v / totalAnswers) * 100).toFixed(1) : 0}%)`)
        .join('\n');

    // ── Comparison section ───────────────────────────────────────────────────
    let comparisonSection = '';
    if (previous) {
        const prevBfLines = (previous.bfNames || bfNames).map((name, i) => {
            const curr = bfScores[i] ?? 0;
            const prev = previous.bfScores[i] ?? 0;
            const delta = curr - prev;
            const sign = delta >= 0 ? '+' : '';
            const currPct = ((curr / 3) * 100).toFixed(0);
            const prevPct = ((prev / 3) * 100).toFixed(0);
            const deltaPct = ((delta / 3) * 100).toFixed(0);
            return `  • ${name}: ${prevPct}% → ${currPct}% (${sign}${deltaPct}%)`;
        }).join('\n');

        const prevOverallPct = ((previous.overallScore / 3) * 100).toFixed(0);
        const currOverallPct = ((overallScore / 3) * 100).toFixed(0);
        const deltaOverall = ((overallScore - previous.overallScore) / 3 * 100).toFixed(0);
        const sign = overallScore >= previous.overallScore ? '+' : '';

        comparisonSection = `
## Comparison with Previous Assessment
Overall: ${prevOverallPct}% → ${currOverallPct}% (${sign}${deltaOverall}%)

Control changes:
${prevBfLines}
`;
    }

    return `You are an expert OWASP AISVS (Artificial Intelligence Security Verification Standard) security advisor.
${lang}

Analyze the following AISVS v1.0 assessment results${projectLine ? ` for "${projectLine}"` : ''} and provide a structured security analysis.

AISVS context:
- 14 security controls covering the full AI lifecycle (training data, input validation, model lifecycle, infrastructure, access control, supply chain, model behavior, memory/vectors, agentic actions, MCP security, adversarial robustness, privacy, monitoring, human oversight)
- 3 verification levels: L1 (foundational, every AI app must meet), L2 (standard, production systems), L3 (advanced, critical/regulated)
- A requirement is "met" when answered "Yes, for most" (≥50% of scope) or "Yes, for all" (100%)

Provide:
1. **Executive Summary** — What the L1/L2/L3 compliance percentages mean for the organization's AI security posture (2–3 sentences). Call out if L1 is not fully met as a critical risk.
2. **Strengths** — Top 3 controls/areas with the highest compliance and why they matter.
3. **Critical Gaps** — Any L1 requirements below 80% compliance. These represent foundational risks that must be addressed first.
4. **Priority Improvements** — Top 5 weakest sub-controls. For each: what the gap means in practice, 2–3 concrete remediation steps aligned with AISVS requirements.
5. **Quick Wins** — 2–3 actions that can raise compliance significantly in the short term.
6. **Roadmap** — 3-phase plan (0–30 days: close L1 gaps / 1–3 months: reach L2 / 3–6 months: target L3 for critical controls).
${previous ? '7. **Trend Analysis** — What improved, what regressed, and what remains stagnant since the previous assessment.' : ''}

---
## Assessment Data

Overall compliance: ${((overallScore / 3) * 100).toFixed(0)}%
${levelSection}${controlSection}
### 10 Weakest Sub-Controls:
${weakestLines}

### Response Distribution (${totalAnswers} answered requirements):
${distributionLines}
${comparisonSection}
---
Be specific, actionable, and grounded in AISVS v1.0 requirements. Reference concrete AISVS control IDs where relevant (e.g., C2.1 for prompt injection, C9 for agentic risks).`;
}
