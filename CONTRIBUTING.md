# Contributing

AISVSwise follows Spec-Driven Secure Development (SDSD). Specifications guide
product changes; code, tests, and the relevant spec are updated together.

## Before implementation

Read these project documents in order:

1. `specs/mission.md`
2. `specs/principles.md`
3. `specs/tech-stack.md`
4. `specs/roadmap.md`

Choose the workflow scale that fits the change:

| Scale | Minimum artifacts | Use for |
| --- | --- | --- |
| QUICK | No feature folder; explain the exception in the PR | Small bug fixes or copy/style changes |
| SMALL | `plan.md`, `validation.md` | Small, bounded behavior changes |
| MEDIUM | Requirements, plan, security, and validation | Regular features or external integrations |
| LARGE | Full feature spec, QA checklist, tests/evals, and ADR when needed | Cross-cutting or high-risk work |

For SMALL or larger work, create `specs/YYYY-MM-DD-short-name/` by copying the
relevant files from `specs/_feature/`. Define scope, failure modes, risks, and
validation before changing application code.

## Validation

For application changes, run:

```bash
npm run typecheck
npm test -- --runInBand
npm run build
```

Markdown changes are checked by the existing Markdown lint and spell-check
workflows. Semgrep, Vet, and TruffleHog are already configured in
`.github/workflows/`; rely on those PR checks instead of adding duplicate
security scans. `npm run lint` is currently blocked because
`eslint.config.js` imports `eslint-plugin-prettier`, which is not declared in
the project dependencies.

## Pull requests and decisions

- Link the applicable spec, or explain why the change is QUICK.
- Describe user impact, tests run, and any remaining limitations.
- Update `CHANGELOG.md` for user-visible changes.
- Update `specs/STATE.md` when work is paused or the current focus changes.
- Add an ADR under `specs/adr/` for an irreversible architecture decision or
  approved exception to `specs/principles.md`.
- Do not add credentials, personal data, or generated build artifacts.

The local pre-commit configuration contains repository hygiene hooks only.
Security scans remain in the existing GitHub Actions workflows.

To enable the local hooks:

```bash
pipx install pre-commit
pre-commit install
```
