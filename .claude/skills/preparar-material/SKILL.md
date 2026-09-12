---
name: preparar-material
description: Gera o material didático que falta para as aulas do 4º bimestre de 2026 (listas de exercício com gabarito, worksheets APC em HTML A4, roteiros de laboratório, provas e folhas de recuperação). Use quando o Jorge pedir material de aula, lista de exercícios, prova, worksheet ou APC, ou quando a rotina semanal disparar. As apostilas das 4 disciplinas acabaram no 3º bimestre — todo exercício do 4º bimestre é material próprio.
---

# Preparador de Material — 4º Bimestre 2026

Gera o material didático das aulas do 4º bimestre para o Jorge (professor técnico de Ciência de Dados, 2º ano EM, EE. Júlia Gonçalves Passarinho, Corumbá-MS, turmas 2A e 2B integral).

**Por que esta skill existe:** as apostilas das 4 disciplinas foram concluídas no 3º bimestre. Não existe mais "questões do livro" — toda lista de exercício, prova e worksheet do 4º bimestre é material preparado pelo professor. O planejamento já está fechado; o que falta é o material.

---

> **Todos os caminhos deste documento são relativos à raiz do repositório `painel-professor`.**
> No Mac do Jorge essa raiz é a pasta `repositorio-aulas/`; no clone que o agente da nuvem usa, ela é
> o próprio diretório de trabalho. Use sempre o caminho relativo (`data.js`, `apc/b4/`), nunca prefixado.

## Fonte de verdade

Sempre leia, nesta ordem, antes de gerar qualquer coisa:

1. `divisao-aulas-4-bimestre.txt` — o planejamento fechado das 35 aulas. **É a fonte canônica do conteúdo de cada aula.** Nunca invente tema; o tema já está definido ali.
2. `data.js` — as mesmas aulas em objeto JS (`uc1-b4`, `uc2-b4`, `uc3-b4`, `dev-local-b4`), com `num`, `semana`, `titulo`, `subtitulo` e `sections`. Use para saber título/subtítulo oficial e número da aula.
3. `apc/apc_uc3_aula1_worksheet.html` — **template canônico de estilo** dos worksheets. Ao gerar um worksheet novo, copie o bloco `<style>` desse arquivo sem alterar. Não reinvente CSS.

Fase do bimestre: **02/10/2026 a 09/12/2026**.

---

## Onde salvar

Tudo em `apc/b4/`, seguindo o padrão de nomes já usado na pasta `apc/`:

| Tipo | Nome do arquivo |
|---|---|
| Lista de exercício (aluno) | `apc_<uc>_b4_aula<NN>_lista.html` |
| Gabarito da lista (professor) | `apc_<uc>_b4_aula<NN>_lista_gabarito.md` |
| Worksheet APC completo | `apc_<uc>_b4_aula<NN>_worksheet.html` |
| Roteiro de prática/laboratório | `apc_<uc>_b4_aula<NN>_roteiro.md` |
| Prova | `apc_<uc>_b4_aula<NN>_prova.html` |
| Gabarito da prova | `apc_<uc>_b4_aula<NN>_prova_gabarito.md` |
| Folha de recuperação | `apc_<uc>_b4_aula<NN>_recuperacao.html` |

Onde `<uc>` é `uc1`, `uc2`, `uc3` ou `devlocal`, e `<NN>` tem dois dígitos (`aula01`, `aula07`).

Nunca sobrescreva um arquivo que já existe sem avisar o Jorge — ele pode já ter editado à mão.

---

## O que gerar por tipo de aula

Identifique o tipo pelo título da aula no planejamento.

### Aula TEÓRICA (em sala)
O planejamento já descreve o exercício no bloco "Exercício". Gere:
- **Lista de exercício em HTML A4 imprimível** — exatamente a atividade descrita no planejamento (se diz "lista com 10 registros", são 10 registros; se diz "6 situações", são 6).
- **Gabarito em Markdown** — resposta de cada item + o erro mais provável do aluno em cada um (serve de apoio na correção coletiva).

### Aula PRÁTICA (laboratório)
Gere:
- **Roteiro de laboratório em Markdown** — etapas numeradas como no planejamento, tempo estimado por etapa (aula de 50 min), o que a dupla entrega no fim, e critérios de avaliação.
- **Material de apoio que o planejamento menciona como "material próprio"** — quando for planilha-base, gere um CSV com os dados (incluindo os problemas propositais que o planejamento pede); quando for modelo de relatório/laudo/ficha, gere em HTML A4.

### Aula TRANSVERSAL (laboratório)
Igual à prática, mas o roteiro precisa incluir:
- As perguntas de investigação exatas que as duplas vão responder.
- Os links/ferramentas citados no planejamento, verificados.
- O produto final da dupla (guia, checklist, código de conduta, quadro comparativo) com um modelo em branco.

### Aula de PROVA (mensal ou bimestral)
Gere os três:
- **Prova em HTML A4** — 10 questões, misturando abertas e múltipla escolha, cobrindo só os conteúdos que o planejamento indica para aquela prova. Cabeçalho com campos Nome/Turma/Data e espaço de resposta adequado.
- **Gabarito comentado em Markdown** — resposta + por que as alternativas erradas são erradas.
- **Folha de recuperação em HTML A4** — revisão dirigida, mesmo conteúdo, questões diferentes e mais guiadas.

### Aula de CULMINÂNCIA ou RODA DE CONVERSA
Não gere lista nem prova. Gere:
- **Roteiro de condução em Markdown** — perguntas disparadoras, sequência de construção do fluxograma (com os nós exatos que o planejamento lista), tempo por etapa e como fechar com os post-its.

### DESENVOLVIMENTO LOCAL
É um projeto contínuo em 8 etapas, sem prova. Gere o instrumento da etapa: folha de observação, formulário de validação, matriz esforço x impacto, rubrica de análise cruzada, ficha de avaliação de visitante. Sempre em HTML A4 imprimível.

---

## Padrão dos arquivos HTML (folha A4)

Copie o `<style>` de `apc/apc_uc3_aula1_worksheet.html` e monte o corpo com a mesma estrutura:

- `.sheet` — a folha A4 (210mm × 297mm, padding 16mm)
- `.top-bar` — à esquerda `EE JÚLIA GONÇALVES PASSARINHO · ITINERÁRIO FORMATIVO — CIÊNCIA DE DADOS` e `2º Ano A / B — Integral`; à direita `Prof. Jorge Frias` e `___ / 10 / 2026` (mês conforme a aula)
- `.title-row` com `.icon` (o emoji da aula no `data.js`) + `<h1>` (título da aula)
- `.subtitle` — `APC — Atividade Prática de Classe · UC III (Qualidade e Testes de Sistemas) · Aula 01`, ajustando UC e número
- `.id-fields` — campos `Nome:` e `Turma:`
- `.intro` — abertura curta que situa o aluno (pode reaproveitar o gancho do bloco "Abordagem" do planejamento)
- `.concept-box` — o conceito essencial, para o aluno consultar enquanto resolve
- `.part-header` + `.instructions` — cada parte da atividade
- `.ans-line` — linhas para resposta manuscrita

### Pegadinhas do CSS canônico (já custaram retrabalho — não repita)

- O intro é estilizado como **`p.intro`**, não `.intro`. Precisa ser `<p class="intro">`; num `<div>` o estilo não se aplica.
- `.ans-line` só ganha altura dentro de **`.qbox`** (a regra é `.qbox .ans-line`). Linha de resposta solta fica com **0px** — a folha imprime sem espaço nenhum para o aluno escrever. Sempre envolva bloco de questões em `<div class="qbox">`.
- `.sheet` tem `min-height: 297mm`, então medir `scrollHeight` sempre devolve 297mm e **não** detecta transbordo. Para saber se cabe, meça do topo do primeiro filho até a base do último e some os 32mm de padding.

Regras que não podem ser quebradas:
- Precisa imprimir em A4 sem cortar. O conteúdo útil de uma folha cabe em **~265mm** (297 menos 16mm de padding em cima e embaixo). Passando disso, abra uma segunda `.sheet` com um cabeçalho enxuto (sem os campos Nome/Turma, que só vão na primeira).
- Tudo em português brasileiro.
- Sem dependência externa: CSS inline no `<style>`, nenhuma fonte ou imagem de CDN (a escola tem internet instável e a folha vai ser impressa).
- **Confira todo número que você afirmar num gabarito.** Some as colunas com um script antes de escrever "o faturamento total é X" — errar aqui é pior que não gerar, porque o professor corrige na frente da turma confiando no gabarito.

---

## Tom e nível

- Alunos de ~16–17 anos de escola pública estadual, curso técnico integrado.
- Linguagem acessível e concreta, com exemplos do cotidiano deles (cadastro da escola, app de banco, rede social, planilha de vendas).
- Conecte ao mercado de trabalho de dados sempre que couber — é curso profissionalizante.
- Ferramentas apenas gratuitas: Google Sheets, Docs, Forms, Looker Studio, navegador. Nada que exija cartão ou instalação pesada.
- Ao escrever texto destinado ao campo "Conteúdo" do SysGEP, siga a redação **impessoal/nominalizada** e os blocos separados por linha em branco (regra válida a partir do 4º bimestre). Material do aluno não segue essa regra — fala direto com o aluno.

---

## Fluxo quando a rotina semanal dispara

1. Rode `date +%Y-%m-%d` para saber a data real. Não presuma.
2. Calcule a semana do bimestre (semana 1 começa em 02/10/2026).
3. Cruze com o `SCHEDULE_ROWS` em `app.js` para saber quais disciplinas têm aula na semana.
4. Para cada disciplina, identifique as aulas daquela `semana` no `data.js` (campo `semana`).
5. Liste em `apc/b4/` o que já existe e gere **apenas o que falta**.
6. Escreva/atualize `apc/b4/STATUS.md` com uma tabela: aula, tipo, arquivos gerados, data de geração, e o que ainda falta.
7. Termine com um resumo curto em português: o que foi gerado, onde está, e o que precisa de revisão humana.

Se a semana calculada estiver fora de 02/10–09/12/2026, não gere nada — registre no `STATUS.md` que o bimestre não está em curso e encerre.

---

## O painel é público — material do professor não pode ir ao ar

O repositório é publicado em `painel-professor.jorge-fxvx.workers.dev` pelo Cloudflare Workers. O
`.assetsignore` na raiz bloqueia da publicação tudo que é material do professor:
`*_gabarito.md`, `*_prova.html`, `*_recuperacao.html`, `*_roteiro.md`, `STATUS.md`, `ROTINA.md` e os
`divisao-aulas-*.txt`.

**Ao criar um tipo de arquivo novo que contenha resposta, gabarito, critério de avaliação ou prova,
acrescente o padrão ao `.assetsignore` na mesma execução.** Um gabarito publicado chega ao aluno pelo
endereço do painel. Os roteiros de laboratório entram nessa regra porque carregam o gabarito da atividade
dentro deles.

Material que **pode** ser publicado: lista de exercício do aluno, worksheet, fichas em branco e as
planilhas-base das práticas (o aluno precisa delas).

## Limites

- **Nunca altere** `divisao-aulas-4-bimestre.txt` nem `data.js`. Esta skill só produz material novo em `apc/b4/`.
- Não invente dado real sobre pessoa, aluno ou empresa. Casos reais (vazamentos, Ariane 5) precisam ser verificáveis; dados de planilha de exercício são fictícios e devem ser declarados como tal.
- Material sobre fake news, vazamento e rastreamento trata de tema sensível: apresente critério de verificação, não veredito político.
- Quando o planejamento for ambíguo sobre a atividade, gere a versão mais próxima do texto e sinalize a dúvida no resumo final, em vez de escolher por conta.
