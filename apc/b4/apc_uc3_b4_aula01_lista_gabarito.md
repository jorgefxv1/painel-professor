# Gabarito — UC III · Aula 01 · Qualidade de Dados

> Material do professor. A lista do aluno é `apc_uc3_b4_aula01_lista.html`.
> Turmas 2A e 2B · 4º bimestre 2026 · Aula teórica em sala.

## Parte 2 — Diagnóstico

| # | Dimensão violada | Correção | Erro mais provável do aluno |
|---|---|---|---|
| 1 | **Validade** — `ana.lima@escola` não tem domínio completo (falta `.com`), não é um e-mail válido | Exigir formato de e-mail na entrada (validação de campo) e corrigir para `ana.lima@escola.com` | Dizer "completude", porque o campo parece incompleto. Distinga: o campo **está preenchido**, mas em formato inválido |
| 2 | **Unicidade** — é a mesma Ana Beatriz da linha 1, cadastrada de novo | Remover duplicado, mantendo o registro mais completo; criar chave única (matrícula) | Apontar só "consistência" pelas grafias diferentes. A duplicidade é o problema mais grave |
| 3 | **Validade** — `30/02/2008` não existe; fevereiro nunca tem 30 dias | Usar campo de data com calendário, que impede data inexistente | Dizer "acurácia". Acurácia é não bater com a realidade *daquela pessoa*; aqui a data é impossível em si |
| 4 | **Completude** — e-mail vazio | Tornar o campo obrigatório, ou registrar o motivo da ausência | — |
| 5 | **Validade** — telefone `9963` está truncado, não é um número de telefone | Definir máscara e tamanho mínimo no campo | Dizer "completude". O campo foi preenchido; o formato é que é inválido |
| 6 | **Consistência** — `Ladario` sem acento, enquanto a linha 4 usa `Ladário` | Padronizar por lista fechada (combo box) em vez de texto livre | — |
| 7 | **Acurácia** — nascimento em `1907` daria mais de 100 anos a um aluno do 2º ano | Validar faixa de data plausível na entrada | Dizer "validade". A data **é válida** como data; ela só não corresponde à realidade |
| 8 | **Completude** — data de nascimento vazia. *(Também há inconsistência em `Corumbá/MS`, que mistura cidade e estado num campo só.)* | Tornar obrigatório; separar cidade e estado em dois campos | — |
| 9 | **Acurácia** — telefone `(67) 99277-9001` é idêntico ao da linha 8, e são pessoas diferentes | Conferir na fonte; um dos dois está errado | Dizer "unicidade". Unicidade é **registro** duplicado; aqui são dois alunos distintos com um **valor** repetido |
| 10 | **Completude** — cidade vazia | Tornar obrigatório | — |

## Parte 3 — Consequência

**a)** **8 registros.** Ficam de fora a linha 4 (e-mail vazio) e a linha 1 (e-mail inválido, não entregável).
Se o aluno responder 9, provavelmente contou a linha 1 como válida — boa deixa para retomar a diferença
entre *preenchido* e *válido*.

**b)** **Não.** "Cidade" aparece como `Corumbá`, `corumba`, `CORUMBÁ` e `Corumbá/MS`. Uma contagem literal
trataria cada grafia como uma cidade diferente. Além disso a linha 10 está vazia. É falha de **consistência**,
e ela se propaga direto para o relatório.

**c)** Resposta esperada, em qualquer redação: a base tem registro duplicado (o modelo veria a Ana duas
vezes e daria peso dobrado a ela), idade impossível (1907 distorce qualquer cálculo de média de idade),
campos vazios (o modelo descarta a linha ou "adivinha" o valor) e cidades não padronizadas (o modelo
acharia que existem 4 cidades onde há 2). Conclusão a puxar na correção: **o modelo não erra por ser
ruim — ele erra porque o dado que entrou era ruim.**

## Fechamento sugerido (5 min)

Pergunte quantos problemas a turma achou no total. A tabela tem 10 registros mas **mais de 10 problemas** —
as linhas 2 e 8 têm dois cada. Quem achou mais de 10 leu com atenção de auditor, que é exatamente o papel
da Aula 02.
