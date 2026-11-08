# Status do Material — 4º Bimestre 2026

Gerado e mantido pela skill `preparar-material`.
Fase do bimestre: **02/10/2026 a 09/12/2026** · Turmas 2A e 2B · EE. Júlia Gonçalves Passarinho

> Planejamento canônico: `repositorio-aulas/divisao-aulas-4-bimestre.txt`
> Aulas no painel: `uc1-b4`, `uc2-b4`, `uc3-b4`, `dev-local-b4` em `repositorio-aulas/data.js`

---

## Semana 1 — 02/10 a 08/10 · ✅ COMPLETA (gerada em 12/09/2026)

| Disciplina | Aula | Tipo | Arquivos |
|---|---|---|---|
| UC III | 01 | Teórica — Qualidade de Dados | `apc_uc3_b4_aula01_lista.html` · `apc_uc3_b4_aula01_lista_gabarito.md` |
| UC III | 02 | Prática — Auditoria de qualidade | `apc_uc3_b4_aula02_roteiro.md` · `apc_uc3_b4_aula02_planilha_base.csv` |
| UC II | 01 | Teórica — Data Lake / DW / Nuvem | `apc_uc2_b4_aula01_lista.html` · `apc_uc2_b4_aula01_lista_gabarito.md` |
| UC II | 02 | Prática — Mini data warehouse | `apc_uc2_b4_aula02_roteiro.md` · 3 fontes cruas em CSV |
| UC I | 01 | Teórica — Raspagem da web | `apc_uc1_b4_aula01_lista.html` · `apc_uc1_b4_aula01_lista_gabarito.md` |
| UC I | 02 | Prática — Raspando uma tabela | `apc_uc1_b4_aula02_roteiro.md` · `apc_uc1_b4_aula02_plano_b.csv` |
| Dev Local | 01 | Retomada e diagnóstico | `apc_devlocal_b4_aula01_ficha_diagnostico.html` |
| Dev Local | 02 | Roteiro de validação | `apc_devlocal_b4_aula02_folha_observacao.html` |

**Revisar antes de imprimir:** a data no cabeçalho está como `___ / 10 / 2026` para preencher à mão.
As planilhas-base precisam ser subidas ao Drive e copiadas por dupla.

---

## Atividade avaliativa (substitui prova) — ✅ GERADA em 17/09/2026 (v3, tema ETL x ELT)

UC I (Ingestão de Dados) passará por **atividade avaliativa em vez de prova**. Conteúdo: **ETL x ELT**
(tema do 3º bimestre, não da apostila própria do 4º), em formato simples — sigla, ordenação, múltipla
escolha, V/F, correspondência e lacunas. 10 itens de 1,0 ponto cada; item 10 = fluxograma (escrito ou
desenhado) comparando as 3 etapas do ETL e do ELT.

| Arquivo | Descrição |
|---|---|
| `apc_uc1_b4_atividade_avaliativa.html` | Folha do aluno, 4 páginas A4, 10 questões |
| `apc_uc1_b4_atividade_avaliativa_gabarito.md` | Gabarito com critérios de correção |

Não segue o nome `aulaNN` porque é uma avaliação isolada (retomada de ETL x ELT), não material de uma
aula específica do `divisao-aulas-4-bimestre.txt`.

**Histórico:** v1 tinha 10 atividades sobre raspagem/API (conteúdo do 4º bim.) com questões dissertativas
longas — trocado a pedido do Jorge por v2 (mesmo tema, questões objetivas) e depois v3 (tema mudado para
ETL x ELT, que é o que ele realmente queria avaliar).

**Revisar antes de imprimir:** data no cabeçalho está em branco (`___ / ___ / 2026`) para preencher à mão
conforme a data real de aplicação.

---

## Semanas 2 a 5 — 🟡 GERADAS, aguardando merge (PRs #8, #9, #10, #11)

> **Importante para quem for rodar a rotina de novo:** antes de gerar qualquer coisa, rode
> `gh pr list --state open` (ou confira em github.com/jorgefxv1/painel-professor/pulls) — **não
> confie só no conteúdo de `apc/b4/` na `main`**. A rotina semanal rodou normalmente desde 04/10 e
> abriu um PR por semana (#8 a #11), mas **nenhum foi revisado nem mergeado ainda**, então a `main`
> ainda só tem a Semana 1. Quem olhar só a `main` vai achar que as Semanas 2-5 estão faltando e vai
> gerar tudo de novo — foi exatamente o que aconteceu na execução de 08/11/2026 (duas vezes, para as
> Semanas 2 e 3) antes de eu notar os PRs já abertos.

| PR | Semana | Datas | Aulas | Status em 08/11/2026 |
|---|---|---|---|---|
| [#8](https://github.com/jorgefxv1/painel-professor/pull/8) | 2 | 09/10–15/10 | UC I/II/III Aulas 03-04, Dev Local Aula 04 | Aberto desde 04/10. Revisei e corrigi overflow de impressão em 6 dos 7 arquivos HTML nesta execução. |
| [#9](https://github.com/jorgefxv1/painel-professor/pull/9) | 3 | 16/10–22/10 | UC I/II/III Aulas 05-06, Dev Local Aulas 05-06 | Aberto desde 18/10. Revisei e corrigi overflow em 1 dos 5 arquivos HTML nesta execução. |
| [#10](https://github.com/jorgefxv1/painel-professor/pull/10) | 4 | 23/10–29/10 | UC I/II/III Aulas 07-08, Dev Local Aulas 07-08 | Aberto desde 25/10. Revisei e corrigi overflow em 2 dos 19 arquivos HTML nesta execução. |
| [#11](https://github.com/jorgefxv1/painel-professor/pull/11) | 5 | 30/10–05/11 | UC I Aulas 09-10, UC III Aula 09 (culminância/roda de conversa) | Aberto desde 01/11. Só tem `.md`, sem HTML — nada a corrigir, parece pronto. |

**Ação necessária do Jorge:** revisar e mergear os 4 PRs, na ordem #8 → #9 → #10 → #11 (cada um foi
gerado a partir da `main` sem as semanas anteriores, então mergear fora de ordem pode gerar conflito
pequeno no `STATUS.md` — fácil de resolver, mas é mais simples na ordem certa).

**Provas já cobertas nos PRs acima (não precisam ser geradas de novo):**

| Disciplina | Prova mensal | Prova bimestral |
|---|---|---|
| UC I | Aula 04 (raspagem + limites da coleta) — PR #8 | Aula 08 (tudo, integrado) — PR #10 |
| UC II | Aula 03 (Data Lake / DW / Nuvem) — PR #8 | Aula 07 (tudo, integrado) — PR #10 |
| UC III | Aula 04 (qualidade de dados + vazamento) — PR #8 | Aula 08 (tudo, integrado) — PR #10 |

Dev Local não tem prova escrita — avalia por etapa (AV1 relatório de validação, AV2 mostra).

---

## ⚠️ Fim do conteúdo planejado em `data.js`

Conferindo o campo `semana` de cada aula em `data.js`, nenhuma disciplina do 4º bimestre tem aula além
da semana 5 (UC I termina na Aula 10/semana 5, UC II na Aula 08/semana 4, UC III na Aula 09/semana 5,
Dev Local na Aula 08/semana 4) — cobrindo no máximo até **05/11/2026**. O bimestre vai até **09/12/2026**,
deixando ~5 semanas de calendário sem nenhuma aula cadastrada. Depois que os PRs #8-#11 forem mergeados,
não sobra nenhuma semana nova para a rotina gerar até que o Jorge decida: (1) confirmar que não há mais
aulas previstas até o fim do bimestre (ex.: encerramento, recesso, mostra de projetos tomando o restante
do tempo), ou (2) estender `divisao-aulas-4-bimestre.txt`/`data.js` com aulas novas para as semanas 6+.

---

## Convenção de nomes

`apc_<uc>_b4_aula<NN>_<tipo>.<ext>` — onde `<uc>` é `uc1`, `uc2`, `uc3` ou `devlocal`.
Tipos: `lista`, `lista_gabarito`, `worksheet`, `roteiro`, `prova`, `prova_gabarito`, `recuperacao`,
`planilha_base`, `ficha_*`, `folha_*`, `modelo_*`.

## Notas técnicas (para quem gerar material novo)

- O CSS canônico vem de `apc/apc_uc3_aula1_worksheet.html`. Copie o bloco `<style>` sem alterar.
- O intro é estilizado como **`p.intro`** — precisa ser `<p>`, não `<div>`.
- `.ans-line` só ganha altura dentro de **`.qbox`** (regra `.qbox .ans-line`). Linha de resposta solta
  fica com 0px e a folha imprime sem espaço para escrever.
- Uma `.sheet` é uma folha A4. O conteúdo útil cabe em ~265mm (297 menos 16mm de padding em cima e
  embaixo). Passando disso, abra uma segunda `.sheet`.
- Nada de CDN: CSS inline, sem fonte nem imagem externa. A folha vai ser impressa e a internet da
  escola é instável.
