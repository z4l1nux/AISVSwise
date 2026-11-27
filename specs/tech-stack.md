# Stack and validation

## Application

| Layer | Choice |
| --- | --- |
| Language | TypeScript 5.7 |
| Framework | Next.js 16, Pages Router |
| UI | React 18, Tailwind CSS 4 |
| Internationalization | next-intl 4; messages in `src/messages/` |
| Persistence | `sessionStorage` for the active assessment; `localStorage` for targets, plans, and local settings |
| Backend | No database or user accounts; Next.js API routes proxy selected requests to AI providers |
| Node.js / npm | Node.js 20.9+ and npm 10+ |

## Commands

| Purpose | Command |
| --- | --- |
| Install dependencies | `npm ci` |
| Development | `npm run dev` |
| Tests | `npm test -- --runInBand` |
| Typecheck | `npm run typecheck` |
| Production build | `npm run build` |
| Lint | `npm run lint` (currently blocked because `eslint-plugin-prettier` is missing) |

## Existing security checks

Use the existing checks; do not add equivalent workflows:

| Category | Tool and configuration |
| --- | --- |
| SAST | Semgrep — `.github/workflows/semgrep.yml` |
| SCA | Vet — `.github/workflows/vet.yml`, policy in `.github/policies/vet-policy.yml` |
| Secrets | TruffleHog — `.github/workflows/trufflehog.yml` |
| Typecheck | `.github/workflows/typecheck.yml` |
| Markdown | `.github/workflows/markdown_linter.yml` and `.github/workflows/spell-check.yml` |

The existing workflows run on pull requests to `main`. Local pre-commit
configuration covers file hygiene only and does not duplicate scanners.
