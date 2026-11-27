# Requisitos — Adoção do SDSD

## Escopo

### Incluído

- Registrar missão, princípios, stack e roadmap reais do AISVSwise em `specs/`.
- Fornecer stubs reutilizáveis de feature, skills e perfis de agentes.
- Documentar o fluxo de contribuição, validação, PR e decisões arquiteturais.
- Cobrir a documentação SDSD pelos checks de Markdown e ortografia existentes.
- Preservar Semgrep, Vet e TruffleHog sem duplicar SAST, SCA ou secrets checks.

### Fora de escopo

- Alterar comportamento ou interface da aplicação.
- Adicionar novos scanners, workflows de segurança ou ferramentas de produto.
- Introduzir um framework de documentação ou mudar os dados locais da aplicação.

## Requisitos funcionais

- [x] Contribuidores encontram constituição, escala e validação apropriadas ao projeto.
- [x] Mudanças não triviais podem ser especificadas com os templates versionados.
- [x] Specs e documentos SDSD são cobertos pelos workflows existentes de docs.
- [x] Os checks de segurança atuais permanecem a única implementação de SAST, SCA e secrets.

## Decisões

- `AGENTS.md` é a fonte de instruções do projeto e preserva o bloco gerenciado
  pelo Next.js.
- `specs/` descreve o produto; `specs/_feature/` contém os stubs copiáveis.
- O pre-commit local limita-se a higiene de arquivos. Os scanners continuam nos
  workflows de PR já existentes.
- `npm run lint` é documentado como bloqueado pela dependência
  `eslint-plugin-prettier` ausente; corrigir essa configuração é follow-up, não
  parte da adoção do SDSD.

## Requisitos não funcionais

- Preservar tratamento local-first de avaliações e fluxos explícitos de IA.
- Manter orientações EN/PT consistentes; esta adoção não altera mensagens da UI.
- Manter validação determinística e sem dependência de um serviço externo novo.

## Failure modes

| Falha | Comportamento esperado | Recuperação |
| --- | --- | --- |
| Documentação nova não coberta pelos filtros de CI | Markdown lint e spellcheck devem incluir `specs/`, `skills/`, `.claude/` e `.github/` | Atualizar os filtros mantendo um workflow por check |
| Orientações conflitarem com o produto | Corrigir a constituição e as instruções antes de orientar novas features | Validar contra código e checks atuais |
| Scanners duplicados forem introduzidos | Não aprovar a duplicação | Reutilizar os workflows Semgrep, Vet e TruffleHog atuais |
