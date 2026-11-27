# Requirements — SDSD Adoption

## Scope

### In scope

- Record the actual AISVSwise mission, principles, stack, and roadmap in `specs/`.
- Provide reusable feature templates, skills, and agent profiles.
- Document contribution, validation, pull request, and architecture-decision
  workflows.
- Include SDSD documentation in the existing Markdown and spelling checks.
- Preserve Semgrep, Vet, and TruffleHog without duplicating SAST, SCA, or
  secrets checks.

### Out of scope

- Changing application behavior or UI.
- Adding scanners, security workflows, or product tools.
- Introducing a documentation framework or changing local application data.

## Functional requirements

- [x] Contributors can find the project constitution, workflow scale, and
      project-appropriate validation.
- [x] Non-trivial changes can be specified using versioned templates.
- [x] Specs and SDSD documents are covered by the existing documentation
      workflows.
- [x] Existing security checks remain the only SAST, SCA, and secrets
      implementations.

## Decisions

- `AGENTS.md` is the project's instruction source and preserves the
  Next.js-managed block.
- `specs/` describes the product; `specs/_feature/` contains copyable
  templates.
- Local pre-commit is limited to file hygiene. Scanners remain in the existing
  PR workflows.
- `npm run lint` is documented as blocked because `eslint-plugin-prettier` is
  missing; fixing that configuration is follow-up work, not part of this SDSD
  adoption.

## Non-functional requirements

- Preserve local-first assessment handling and explicit AI flows.
- Keep English and Portuguese guidance consistent; this adoption does not
  change UI messages.
- Keep validation deterministic and independent of new external services.

## Failure modes

| Failure | Expected behavior | Recovery |
| --- | --- | --- |
| New documentation is not covered by CI filters | Markdown lint and spellcheck should include `specs/`, `skills/`, `.claude/`, and `.github/` | Update the filters while keeping one workflow per check |
| Guidance conflicts with the product | Correct the constitution and instructions before guiding new features | Validate against the code and current checks |
| Duplicate scanners are introduced | Do not approve the duplication | Reuse the existing Semgrep, Vet, and TruffleHog workflows |
