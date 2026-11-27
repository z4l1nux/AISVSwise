<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## AISVSwise SDSD Rules

This project uses Spec-Driven Secure Development. Read `specs/mission.md`,
`specs/principles.md`, `specs/tech-stack.md`, and `specs/roadmap.md` before
planning product changes.

- For SMALL, MEDIUM, or LARGE work, create a dated folder under `specs/` from
  `specs/_feature/` before implementation. QUICK fixes may skip a feature spec;
  state the reason in the pull request.
- Keep the feature spec and implementation aligned. Record architectural or
  principle changes in `specs/adr/`.
- Preserve local-first assessment data handling, explicit AI-provider data
  flows, and English/Portuguese translation parity.
- Run `npm run typecheck`, `npm test -- --runInBand`, and `npm run build` for
  application changes. Run the existing documentation checks when Markdown
  changes.
- Semgrep, Vet, and TruffleHog are already configured in
  `.github/workflows/`. Do not add duplicate SAST, SCA, or secrets workflows;
  confirm their pull-request checks instead.
- Keep `package-lock.json` committed and use `npm ci` for clean installs.
- Follow the installed Next.js guidance in `node_modules/next/dist/docs/` when
  changing Next.js behavior.
