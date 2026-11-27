# SDSD State

## Current focus

Adopt the SDSD workflow in AISVSwise without duplicating existing security
checks.

## Decisions

- `specs/` records the product constitution and feature specifications.
- Semgrep, Vet, and TruffleHog continue to run through their existing workflows.
- Local pre-commit contains basic file-hygiene checks only.
- No new feature backlog has been approved; the roadmap records the known lint
  follow-up.

## Next step

For the next non-trivial product change, create a dated folder from
`specs/_feature/` before implementation.
