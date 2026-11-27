# Estado do SDSD

## Foco atual

Adotar o fluxo SDSD no AISVSwise sem duplicar os checks de segurança já
existentes.

## Decisões

- `specs/` registra a constituição e as specs de funcionalidades do produto.
- Semgrep, Vet e TruffleHog continuam sendo executados pelos workflows atuais.
- O pre-commit local contém apenas verificações básicas de higiene.
- O repositório não tem uma fila de novas funcionalidades aprovada; o roadmap
  registra o trabalho de lint já identificado.

## Próximo passo

Para a próxima mudança não trivial de produto, criar uma pasta datada a partir
de `specs/_feature/` antes de implementar.
