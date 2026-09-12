# Roteiro de Laboratório — UC III · Aula 02

**Auditoria de Qualidade de Dados** · Aula prática no laboratório de informática · Turmas 2A e 2B
**Material:** `apc_uc3_b4_aula02_planilha_base.csv` (40 registros com problemas propositais)
**Formato:** duplas · **Duração:** 50 min

---

## Antes da aula (professor)

1. Subir o CSV para o Drive e abrir como Google Sheets.
2. Gerar **uma cópia por dupla** (Arquivo → Fazer uma cópia), ou publicar um link "Fazer uma cópia"
   (`.../copy` no fim da URL) — assim cada dupla trabalha na própria planilha.
3. Conferir que o laboratório abre o Sheets. Plano B: a planilha funciona igual no LibreOffice Calc.

## Abertura (5 min)

A turma recebe o papel de **auditores de dados**. A escola contratou a dupla para dizer se essa base
pode ou não ser usada para enviar comunicados e calcular médias. A pergunta que fecha a aula é:
*"essa base está pronta para uso? Sim ou não, e por quê?"*

## Etapa 1 — Varredura (15 min)

Cada dupla percorre a planilha e marca os problemas. Ferramentas a usar:

| Para achar | Como |
|---|---|
| Campos vazios | Filtro na coluna → opção `(Vazios)` |
| Registros duplicados | Menu **Dados → Limpeza de dados → Remover duplicados** (ver quantos ele acusa **antes** de aplicar) |
| Notas impossíveis | `=CONT.SE(H2:H41;">10")` e `=CONT.SE(H2:H41;"<0")` |
| Texto onde deveria haver número | `=ÉNÚM(H2)` arrastado pela coluna |
| Cidades escritas de vários jeitos | Filtro na coluna Cidade → ler a lista de valores distintos |
| Datas impossíveis | Ordenar por `data_nascimento` e olhar os extremos |

> Dica a dar somente se a dupla travar: use uma coluna nova ao lado, chamada `PROBLEMA`, e anote ali.
> Não apague nada — auditor documenta, não conserta por conta própria.

## Etapa 2 — Classificação (15 min)

Cada problema achado recebe a **dimensão da qualidade** violada (as 6 da Aula 01) e uma contagem:

| Dimensão | Quantos registros | Exemplo (id) | Gravidade (1 a 3) |
|---|---|---|---|
| Completude | | | |
| Consistência | | | |
| Acurácia | | | |
| Atualidade | | | |
| Unicidade | | | |
| Validade | | | |

## Etapa 3 — Relatório (10 min)

Relatório curto, no modelo `apc_uc3_b4_aula02_modelo_relatorio.html` ou em Docs, com:

1. Quantos problemas de cada tipo.
2. Os **3 mais graves**, com justificativa.
3. Uma recomendação de melhoria para quem cuida da base — e a recomendação precisa atacar a **entrada**
   do dado, não só limpar o que já entrou.
4. Veredito: a base pode ser usada para enviar comunicado? Para calcular média da turma?

## Fechamento (5 min)

Duas ou três duplas dizem quantos problemas acharam. O número vai variar — **isso é o ponto da aula**:
auditoria depende de critério, e critério é o que a Aula 01 deu. Pergunta final:
*"se essa base fosse do sistema de notas de verdade, alguém já teria sido prejudicado?"*

---

## Gabarito do professor — o que está plantado na planilha

| id | Problema | Dimensão |
|---|---|---|
| 1, 2 | Ana Beatriz duplicada, com grafia, data e telefone em formatos diferentes | Unicidade + Consistência |
| 14, 15 | Camila Rocha duplicada (uma em CAIXA ALTA) | Unicidade |
| 1, 40 | Ana Beatriz aparece **uma terceira vez**, agora idêntica à linha 1 | Unicidade |
| 3 | `30/02/2008` — data inexistente | Validade |
| 39 | `31/06/2009` — junho não tem 31 dias | Validade |
| 4, 24 | E-mail vazio | Completude |
| 8, 35 | Data de nascimento vazia | Completude |
| 10 | Cidade vazia | Completude |
| 17 | Telefone vazio | Completude |
| 24 | Nota vazia | Completude |
| 5, 30 | Telefone truncado (`9963`, `123`) | Validade |
| 11 | E-mail sem domínio completo (`@escola`) | Validade |
| 19 | E-mail com espaço no meio | Validade |
| 13 | Nota `110` — fora da escala 0–10 | Validade |
| 18 | Nota `-3` — negativa | Validade |
| 7, 26 | Nascimento em 1907 e 1900 | Acurácia |
| 32 | Nascimento em `2035` — no futuro | Acurácia / Atualidade |
| 8, 9 | Telefone idêntico para dois alunos diferentes | Acurácia |
| 5, 6, 12, 21, 27, 34, 38 | `CORUMBÁ`, `corumba`, `Corumba`, `CORUMBA`, `Ladario` sem acento | Consistência |
| 8 | `Corumbá/MS` mistura cidade e estado no mesmo campo | Consistência |
| 22 | Turma `2C` — não existe na escola (só 2A e 2B) | Acurácia |

**Total: 3 registros duplicados e mais de 25 problemas distintos.** Se a dupla achou 15+, foi bem.
Quem achou os duplicados da linha 40 e a turma `2C` inexistente leu como auditor de verdade — esses dois
são os mais fáceis de passar batido.
