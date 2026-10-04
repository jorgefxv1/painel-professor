# Gabarito — UC II · Aula 04 · Visualização de Big Data e Dashboards

> Material do professor. Lista do aluno: `apc_uc2_b4_aula04_lista.html`.
> Turmas 2A e 2B · 4º bimestre 2026 · Aula teórica em sala.

## Parte 1 — Combina ou não combina?

| # | Pergunta de negócio | Gráfico proposto | Combina? | Justificativa / correção | Erro mais provável |
|---|---|---|---|---|---|
| 1 | Evolução das vendas mês a mês | Linha | **SIM** | Linha é o gráfico certo para tendência ao longo do tempo | — |
| 2 | Qual loja vendeu mais (5 lojas) | Pizza | **NÃO** | Comparação entre categorias distintas (lojas) pede **gráfico de barras**; pizza serve para partes de um todo, não para "qual é maior" entre poucos itens | Aceitar pizza "porque são poucas lojas, cabe bem". O critério não é quantidade de categorias, é o tipo de pergunta (comparar ≠ compor um todo) |
| 3 | Proporção de clientes por faixa etária | Pizza | **SIM** | É exatamente uma pergunta de "como as partes compõem o todo" | — |
| 4 | Variação da temperatura ao longo do dia | Barras | **NÃO** | É uma tendência contínua no tempo; o gráfico certo é **linha** | Marcar como SIM pensando em "comparar hora por hora". Quando o eixo é tempo contínuo, linha captura melhor a variação do que barras separadas |
| 5 | 5 produtos mais vendidos no mês | Barras | **SIM** | Comparação entre categorias (produtos) — caso clássico de gráfico de barras | — |
| 6 | Tendência de crescimento de usuários em 12 meses | Pizza | **NÃO** | "Tendência" e "12 meses" são a marca registrada do gráfico de **linha** | Marcar como SIM por já ter usado pizza nas questões anteriores sobre proporção, sem notar que aqui a pergunta é sobre evolução no tempo, não sobre composição |

**Padrão a puxar:** 3 pares combinam (1, 3, 5) e 3 não combinam (2, 4, 6). A pergunta-chave para decidir
é: *"isso é uma comparação entre categorias, uma tendência no tempo, ou uma composição de partes de um
todo?"*

## Parte 2 — Correção dos pares errados

- **Par 2 corrigido:** "Qual loja vendeu mais no último trimestre, entre as 5 lojas da rede?" → **Gráfico de barras**.
- **Par 4 corrigido:** "Como variou a temperatura média da cidade ao longo do dia?" → **Gráfico de linha**.
- **Par 6 corrigido:** "Qual a tendência de crescimento de usuários do app nos últimos 12 meses?" → **Gráfico de linha**.

## Parte 3 — Boas práticas de dashboard

**a)** Um título genérico ("Vendas") obriga quem olha o painel a primeiro descobrir sozinho o que o
gráfico está tentando mostrar, perdendo tempo. Um título que responde a uma pergunta (ex.: "Qual loja
vendeu mais no trimestre?") entrega a informação na primeira leitura — a pessoa já sabe o que procurar
antes de olhar as barras.

**b)** Exemplo aceito: um gráfico de barras cujo eixo Y não começa em zero (ex.: começa em 90 em vez de
0) faz uma diferença pequena entre as barras parecer enorme — o dado está certo, mas a leitura visual
exagera a diferença real. Outro exemplo: usar a mesma cor "de alerta" (vermelho) para uma categoria que
não representa problema nenhum, fazendo o leitor associar errado o que está em destaque.
