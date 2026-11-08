# Roteiro de Laboratório — UC II · Aula 05

**Construindo um Dashboard** · Aula prática no laboratório de informática · Turmas 2A e 2B
**Material:** `apc_uc2_b4_aula05_planilha_base.csv` (matrículas e frequência de 6 escolas fictícias, 3 trimestres)
**Formato:** duplas · **Duração:** 50 min · **Aplica:** Aula 04 (dashboards, tipos de gráfico)

> **Aviso sobre os dados:** a planilha-base é **fictícia**, criada só para esta aula. As 6 escolas
> (Capão Verde, Beira Rio, Pantanal Alegre, Horizonte Novo, Vista Alegre, Porto Seguro) não existem —
> não representam nenhuma escola real de Corumbá-MS. Dizer isso à turma antes de abrir o arquivo.

---

## Antes da aula (professor)

1. Subir `apc_uc2_b4_aula05_planilha_base.csv` ao Google Drive como uma planilha do Sheets.
2. Conectar o Looker Studio a essa planilha **uma vez**, para confirmar que a conexão funciona no
   laboratório antes da aula (Looker Studio → Criar → Fonte de dados → Planilhas Google).
3. Gerar uma cópia do relatório do Looker Studio por dupla (ou deixar cada dupla criar o próprio
   relatório conectado à mesma planilha-base — mais simples e evita gente editando o relatório do colega).
4. Conta Google necessária: confirmar que toda dupla tem acesso a pelo menos uma conta Google (a da
   própria escola, se houver, ou pessoal).

## Abertura (5 min)

"Vocês são a dupla de analistas de dados de uma rede municipal fictícia. A diretoria recebeu essa
planilha com matrículas e frequência de 6 escolas em 3 trimestres e quer um painel — não uma tabela —
para decidir onde agir." Retomar a Aula 04: tabela de números exige leitura; painel comunica em segundos.

## Etapa 1 — Definir as 3 perguntas (8 min)

Antes de abrir o Looker Studio, a dupla escreve **3 perguntas de negócio** que o painel vai responder.
Sugestões, se a dupla travar (elas não precisam ser exatamente estas):

1. Qual escola tem a maior frequência média, e isso mudou entre os trimestres?
2. Como a matrícula de cada escola variou do T1 para o T3?
3. Existe relação visível entre matrícula caindo e frequência caindo, na mesma escola?

## Etapa 2 — Conectar e montar o painel (27 min)

No Looker Studio, conectado à planilha-base fornecida:

| Visualização sugerida | Serve para | Tipo de gráfico (Aula 04) |
|---|---|---|
| Matriculados por escola, por trimestre | Pergunta 1 e 2 | Gráfico de **barras** (comparar escolas) |
| Frequência média ao longo dos trimestres | Pergunta 1 | Gráfico de **linha** (tendência no tempo) |
| Participação de cada escola no total de matrículas | Contexto | Gráfico de **proporção** (pizza ou rosca) |

Exigências mínimas: **pelo menos 3 visualizações**, cada uma com um título que **responde a uma
pergunta** (nunca "Gráfico 1"), filtro por trimestre funcionando, e cores consistentes entre os gráficos
(a mesma escola com a mesma cor em todo o painel).

> Erro comum: escolher pizza para comparar 6 escolas em 3 trimestres ao mesmo tempo — fica ilegível.
> Pizza serve para **uma** divisão de um todo em um momento, não para série temporal.

## Etapa 3 — Achados escritos (10 min)

Abaixo do painel (ou num Google Docs linkado), um parágrafo curto de **"principais achados"**, respondendo
de fato às 3 perguntas definidas na Etapa 1, citando os números que aparecem no próprio painel.

## Fechamento (não precisa de tempo fixo — encaixar na troca de etapas)

Duas ou três duplas mostram o painel na tela. Pergunta de fechamento: *"alguém escolheu um gráfico e
depois teve que trocar porque não respondia a pergunta? O que aconteceu?"* — é o erro mais formador da
aula, vale puxar em voz alta.

---

## Referência do professor (conferida com script sobre a planilha-base)

| Pergunta | Resposta a partir da planilha-base |
|---|---|
| Escola com maior matrícula e maior frequência, nos 3 trimestres | **EM Pantanal Alegre** — maior em T1 (401 matriculados, 94,1% frequência), T2 (397 / 92,8%) e T3 (392 / 91,6%) |
| Escola com menor matrícula e menor frequência, nos 3 trimestres | **EM Horizonte Novo** — menor em T1 (189 / 82,6%), T2 (185 / 81,3%) e T3 (180 / 80,1%) |
| Total de matriculados nas 6 escolas, T1 → T3 | Cai de **1.781** para **1.727** — queda de **54 alunos (3,03%)** ao longo do bimestre, presente em todas as 6 escolas |

Se uma dupla chegar a esses três achados, está lendo o dado corretamente. Pequenas variações no
percentual de queda (ex. "cerca de 3%") são aceitáveis — o que importa é identificar a escola de ponta,
a de base e a tendência geral de queda.

## Critérios de avaliação

| Critério | Peso |
|---|---|
| 3 perguntas de negócio definidas antes de montar o painel | 1 |
| Pelo menos 3 visualizações, cada uma adequada à pergunta que responde | 3 |
| Títulos que respondem a uma pergunta (não genéricos) | 1 |
| Filtro por trimestre funcionando | 1 |
| Cores consistentes entre os gráficos | 1 |
| Parágrafo de achados que de fato usa os números do painel | 1 |
