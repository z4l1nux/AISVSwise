# Validation — SDSD Adoption

## Definition of Done

- [x] Clean install: `npm ci`.
- [x] Typecheck: `npm run typecheck`.
- [x] Tests: `npm test -- --runInBand` — all 133 tests pass.
- [x] Build: `npm run build`.
- [x] Markdown lint passes for all changed SDSD documentation.
- [x] CSpell passes for the SDSD documents.
- [x] Pre-commit and workflow YAML configuration is valid.
- [x] No local SAST, SCA, or secrets hooks were added.
- [ ] Existing Semgrep, Vet, and TruffleHog workflows pass on the PR.
- [ ] Documentation checks pass on the PR.

Local commands:

```bash
npx --yes markdownlint-cli --config .github/workflows/config/markdownlint.jsonc README.md AGENTS.md CONTRIBUTING.md CHANGELOG.md "specs/**/*.md" "skills/**/*.md" ".claude/**/*.md" ".github/**/*.md"
npx --yes cspell --config .github/workflows/config/cspell.json README.md AGENTS.md CONTRIBUTING.md CHANGELOG.md
```

Application typecheck, tests, and build are not required: this change does not
modify product code or behavior.
