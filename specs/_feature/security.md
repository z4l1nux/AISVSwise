# Segurança — [Nome da feature]

## Fronteiras e entry points

- [UI, arquivo importado, estado do navegador, rota API ou provedor externo]

## Riscos

- [ ] Entrada inválida ou adulterada
- [ ] XSS, injeção ou conteúdo LLM não confiável
- [ ] Exposição de dados locais ou chave de API
- [ ] Requisição externa, abuso ou erro do provedor
- [ ] Regressão de privacidade, localização ou autorização

## Requisitos de segurança

- [ ] Validar dados na fronteira e tratar falhas explicitamente.
- [ ] Sanitizar conteúdo antes de renderizar.
- [ ] Não persistir ou transmitir dados além do escopo descrito em `requirements.md`.
- [ ] Verificar os checks de segurança existentes no PR; não adicionar scanners duplicados.
