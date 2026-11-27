# Validação — Adoção do SDSD

## Definition of Done

- [x] Instalação limpa: `npm ci`.
- [x] Typecheck: `npm run typecheck`.
- [x] Testes: `npm test -- --runInBand` — 133 testes passam.
- [x] Build: `npm run build`.
- [x] Markdown lint passa para toda a documentação SDSD alterada.
- [x] CSpell passa nos 30 documentos SDSD em inglês e português.
- [x] Configuração YAML de pre-commit e workflows é válida.
- [x] Nenhum hook local de SAST, SCA ou secrets foi adicionado.
- [ ] Workflows existentes de Semgrep, Vet e TruffleHog passam no PR.
- [ ] Checks de documentação passam no PR.

Comandos locais:

```bash
npx --yes markdownlint-cli --config .github/workflows/config/markdownlint.jsonc README.md AGENTS.md CONTRIBUTING.md CHANGELOG.md "specs/**/*.md" "skills/**/*.md" ".claude/**/*.md" ".github/**/*.md"
npx --yes cspell --config .github/workflows/config/cspell.json README.md AGENTS.md CONTRIBUTING.md CHANGELOG.md
```

Typecheck, testes e build de aplicação não são necessários: esta mudança não
altera código ou comportamento do produto.
