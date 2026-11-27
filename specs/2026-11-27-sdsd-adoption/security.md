# Security — SDSD Adoption

## Boundaries and entry points

- Agent and contributor instructions (`AGENTS.md`, `CONTRIBUTING.md`).
- Documentation and specs used for feature planning.
- GitHub Actions workflows and local pre-commit configuration.

## Risks

- [x] Duplicate security scanners or divergent gates.
- [x] Generic instructions contradicting the local-first model or AI flows.
- [x] PR or spec text claiming validation that was not performed.
- [ ] Exposure of local data or API keys — no application changes are in scope.

## Security requirements

- Reuse the existing Semgrep, Vet, and TruffleHog checks.
- Limit pre-commit to file hygiene; do not add scanners.
- Accurately describe optional data sharing with AI providers and local
  storage.
- Identify documentation tests and explicitly state any validation not run.
