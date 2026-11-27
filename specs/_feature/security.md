# Security — [Feature name]

## Boundaries and entry points

- [UI, imported file, browser state, API route, or external provider]

## Risks

- [ ] Invalid or tampered input
- [ ] XSS, injection, or untrusted LLM content
- [ ] Exposure of local data or API keys
- [ ] External request, abuse, or provider error
- [ ] Privacy, localization, or authorization regression

## Security requirements

- [ ] Validate data at boundaries and handle failures explicitly.
- [ ] Sanitize content before rendering.
- [ ] Do not persist or transmit data beyond the scope in `requirements.md`.
- [ ] Confirm the existing security checks on the PR; do not add duplicate scanners.
