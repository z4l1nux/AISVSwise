# Inviolable Principles

These principles apply to every product change. An exception requires an ADR
in `specs/adr/` before implementation.

## Security and privacy

- Keep assessments in the browser; do not introduce remote storage, telemetry,
  or user accounts without an explicit decision and privacy review.
- Send assessment content to an external service only when the user configures
  and initiates the AI analysis flow.
- Never expose or log API keys. Preserve existing encrypted local storage and
  never send keys to AISVSwise servers.
- Treat imported files, browser state, provider responses, and LLM content as
  untrusted input.
- Validate data at input boundaries and sanitize content before rendering HTML.
  Do not rely on visual-only validation.
- Do not include secrets, assessment data, or personal information in logs,
  error messages, tests, or examples.
- Keep `package-lock.json` up to date and use `npm ci`; dependency changes
  require justification and review.

## Product and UX

- Preserve the ability to use assessments, targets, and plans without an AI
  provider.
- Do not change the meaning of AISVS questions, levels, or calculations without
  validating compatibility with existing data and reports.
- Keep `src/messages/en.json` and `src/messages/pt.json` semantically aligned.
- Preserve keyboard navigation, loading/error/success feedback, responsiveness,
  and accessibility in changed flows.

## Engineering

- For non-trivial changes, write or update the specification before code and
  keep both aligned.
- Behavior changes must have appropriate tests and pass typecheck and build.
- Reuse the existing Semgrep, Vet, and TruffleHog workflows. Do not add
  duplicate SAST, SCA, or secrets checks.
- Prefer small, typed changes that follow existing patterns.

## Applying these principles

In `security.md`, identify the boundaries and affected principles. If a
decision requires an exception, stop and document its context, alternatives,
and mitigations in an ADR before proceeding.
