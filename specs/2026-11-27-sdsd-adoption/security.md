# Segurança — Adoção do SDSD

## Fronteiras e entry points

- Instruções para agentes e contribuidores (`AGENTS.md`, `CONTRIBUTING.md`).
- Documentação e specs utilizadas para planejar features.
- Workflows GitHub Actions e pre-commit local.

## Riscos

- [x] Scanners de segurança duplicados ou gates divergentes.
- [x] Instruções genéricas contradizerem o modelo local-first ou os fluxos de IA.
- [x] Texto de PR ou spec declarar validações não realizadas.
- [ ] Exposição de dados locais ou chaves de API — nenhuma mudança de aplicação.

## Requisitos de segurança

- Reutilizar os checks existentes de Semgrep, Vet e TruffleHog.
- Restringir pre-commit a higiene de arquivos, sem adicionar scanners.
- Descrever corretamente o envio opcional a provedores de IA e o armazenamento
  local.
- Identificar os testes de documentação e declarar explicitamente validações
  não executadas.
