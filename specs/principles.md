# Princípios Invioláveis

Estes princípios se aplicam a toda mudança de produto. Uma exceção exige um ADR
em `specs/adr/` antes da implementação.

## Segurança e privacidade

- Mantenha avaliações no navegador; não introduza armazenamento remoto,
  telemetria ou contas de usuário sem decisão explícita e análise de privacidade.
- Só envie conteúdo de avaliação a um serviço externo quando o fluxo de análise
  de IA estiver configurado e acionado pelo usuário.
- Nunca exponha ou registre chaves de API. Preserve o armazenamento local
  criptografado existente e não envie chaves aos servidores AISVSwise.
- Trate arquivos importados, estado do navegador, respostas de provedores e
  conteúdo de LLM como entrada não confiável.
- Valide dados nas fronteiras de entrada e sanitize conteúdo antes de renderizar
  HTML. Não confie em validação somente visual.
- Não inclua segredos, dados de avaliação ou informações pessoais em logs,
  mensagens de erro, testes ou exemplos.
- Mantenha `package-lock.json` atualizado e use `npm ci`; mudanças de
  dependências precisam de justificativa e revisão.

## Produto e UX

- Preserve a possibilidade de usar avaliação, metas e planos sem um provedor de
  IA.
- Não altere o significado das perguntas, níveis ou cálculos AISVS sem validar
  a compatibilidade com os dados e relatórios existentes.
- Mantenha `src/messages/en.json` e `src/messages/pt.json` semanticamente
  alinhados.
- Preserve navegação por teclado, feedback de carregamento/erro/sucesso,
  responsividade e acessibilidade nos fluxos alterados.

## Engenharia

- Para mudanças não triviais, escreva ou atualize a especificação antes do
  código; mantenha ambos alinhados.
- Mudanças de comportamento devem ter testes adequados e passar typecheck e
  build.
- Reutilize os workflows existentes de Semgrep, Vet e TruffleHog. Não crie
  verificações duplicadas de SAST, SCA ou secrets.
- Prefira mudanças pequenas, tipadas e compatíveis com os padrões existentes.

## Como aplicar

Em `security.md`, identifique as fronteiras e os princípios afetados. Se uma
decisão exigir exceção, pare e registre contexto, alternativas e mitigação em
um ADR antes de prosseguir.
