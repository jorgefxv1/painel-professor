# Roteiro de Laboratório — UC III · Aula 06

**Teste de Usabilidade e Checklist de Acessibilidade** · Aula prática no laboratório · Turmas 2A e 2B
**Material:** `apc_uc3_b4_aula06_modelo_laudo.html` (modelo em branco, uma folha por dupla)
**Formato:** duplas · **Duração:** 50 min · **Aplica:** Aula 05 (métricas de usabilidade, checklist de acessibilidade)

---

## Antes da aula (professor)

1. Confirmar que o laboratório permite abrir sites externos (e-commerce, serviço público) sem bloqueio
   de proxy/firewall da escola.
2. Verificar se a extensão **WAVE** (wave.webaim.org) funciona sem instalação — ela roda como extensão
   leve ou direto colando a URL no site `wave.webaim.org`, sem precisar de permissão de instalação no
   Chrome. Alternativa já instalada em qualquer Chrome: **Lighthouse**, nas Ferramentas do Desenvolvedor
   (F12 → aba "Lighthouse" → categoria "Acessibilidade").
3. Ter 2 ou 3 sites testados de antemão (ver lista abaixo), para a dupla que não conseguir escolher.
4. Imprimir ou disponibilizar `apc_uc3_b4_aula06_modelo_laudo.html` — uma folha por dupla.

## Abertura (5 min)

Apresentar os papéis da dupla: um é o **usuário de teste**, o outro é o **pesquisador**. Regra única e
inegociável: o pesquisador **só observa e anota — nunca ajuda, nunca dá dica**. Se o usuário travar, o
silêncio do pesquisador é o dado mais importante da aula.

**Sites sugeridos** (qualquer site público funciona; estes são exemplos seguros para testar hoje):

- O portal oficial da própria escola ou da rede estadual de ensino, se existir
- Um site de comércio eletrônico bastante conhecido
- Um serviço público online (ex. um portal `gov.br`, como consulta de CPF, agendamento ou emissão de documento)

## Etapa 1 — Teste de usabilidade (18 min)

O pesquisador dá **3 tarefas** ao colega, uma por vez, cronometrando e contando erros/travamentos.
Exemplos de tarefas (adaptar ao site escolhido):

1. "Encontre o telefone ou canal de contato do site."
2. "Simule o início de uma inscrição, cadastro ou compra (sem finalizar com dado real)."
3. "Encontre uma informação específica dentro do site" (ex. horário de atendimento, política de troca,
   prazo de um serviço).

Para cada tarefa, registrar no modelo de laudo: concluiu (S/N), tempo gasto, número de erros, e **onde**
a pessoa travou (ponto exato da tela, não "travou no site todo").

> Lembrar a dupla: "concluiu" é binário. Se precisou de qualquer ajuda do pesquisador, **não concluiu**
> — mesmo que tenha chegado perto.

## Etapa 2 — Checklist de acessibilidade (20 min)

No mesmo site, aplicar o checklist da Aula 05 **e** uma ferramenta automática:

| Item do checklist | Como verificar hoje |
|---|---|
| Contraste de cor | Observação visual + checagem automática pelo WAVE/Lighthouse (eles apontam contraste insuficiente) |
| Tamanho de fonte ajustável | Testar Ctrl+ e Ctrl− no navegador; o texto aumenta sem quebrar o layout? |
| Texto alternativo em imagens | WAVE mostra ícones de alerta em imagens sem `alt`; ou botão direito → "Inspecionar" numa imagem |
| Navegação pelo teclado | Tentar navegar só com Tab e Enter, sem tocar no mouse |
| Legenda em vídeo | Se o site tiver vídeo, verificar se há legenda ou transcrição |

Rodar o **WAVE** ou o **Lighthouse** na página e registrar quantos alertas de acessibilidade a ferramenta
apontou — não é preciso entender todos, só registrar a contagem e os 2 ou 3 tipos mais frequentes.

## Etapa 3 — Laudo final (7 min)

Preencher a última parte do modelo de laudo: **nota de usabilidade** (0 a 10, justificada pelas tarefas),
**nota de acessibilidade** (0 a 10, justificada pelo checklist + ferramenta) e as **3 melhorias mais
urgentes** que a dupla recomendaria ao responsável pelo site.

## Fechamento (não precisa de tempo fixo — encaixar na troca de etapas)

Pergunta para 2 ou 3 duplas: *"a nota de usabilidade e a nota de acessibilidade do site que vocês
testaram foram parecidas, ou bem diferentes? O que isso te diz?"* Gancho: um site pode ser fácil de usar
para a maioria e, ainda assim, falhar feio em acessibilidade — ou vice-versa. São duas qualidades
distintas, mesmo que relacionadas.

---

## Critérios de avaliação

| Critério | Peso |
|---|---|
| 3 tarefas de usabilidade aplicadas com cronometragem e contagem de erros | 2 |
| Papel de pesquisador respeitado (sem ajudar o usuário de teste) | 2 |
| Checklist de acessibilidade aplicado nos 5 itens | 2 |
| Ferramenta automática (WAVE ou Lighthouse) usada e resultado registrado | 1 |
| Notas de usabilidade e acessibilidade justificadas, não "no chute" | 1 |
| 3 melhorias mais urgentes, coerentes com o que foi observado | 2 |
