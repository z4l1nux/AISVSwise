# Stack e validação

## Aplicação

| Camada | Escolha |
| --- | --- |
| Linguagem | TypeScript 5.7 |
| Framework | Next.js 16, Pages Router |
| UI | React 18, Tailwind CSS 4 |
| Internacionalização | next-intl 4; mensagens em `src/messages/` |
| Persistência | `sessionStorage` para sessão de avaliação; `localStorage` para metas, planos e configurações locais |
| Backend | Sem banco de dados ou contas; rotas API Next.js encaminham chamadas selecionadas a provedores de IA |
| Node.js / npm | Node.js 20.9+ e npm 10+ |

## Comandos

| Objetivo | Comando |
| --- | --- |
| Instalar dependências | `npm ci` |
| Desenvolvimento | `npm run dev` |
| Testes | `npm test -- --runInBand` |
| Typecheck | `npm run typecheck` |
| Build de produção | `npm run build` |
| Lint | `npm run lint` (atualmente bloqueado pela dependência ausente `eslint-plugin-prettier`) |

## Checks de segurança existentes

Use os checks já configurados; não adicione workflows equivalentes:

| Categoria | Ferramenta e configuração |
| --- | --- |
| SAST | Semgrep — `.github/workflows/semgrep.yml` |
| SCA | Vet — `.github/workflows/vet.yml`, policy em `.github/policies/vet-policy.yml` |
| Secrets | TruffleHog — `.github/workflows/trufflehog.yml` |
| Typecheck | `.github/workflows/typecheck.yml` |
| Markdown | `.github/workflows/markdown_linter.yml` e `.github/workflows/spell-check.yml` |

Os workflows automáticos rodam em pull requests para `main`. A configuração
local de pre-commit cobre apenas higiene de arquivos e não duplica scanners.
