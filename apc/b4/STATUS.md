# Status do Material — 4º Bimestre 2026

Gerado e mantido pela skill `preparar-material`.
Fase do bimestre: **02/10/2026 a 09/12/2026** · Turmas 2A e 2B · EE. Júlia Gonçalves Passarinho

> Planejamento canônico: `repositorio-aulas/divisao-aulas-4-bimestre.txt`
> Aulas no painel: `uc1-b4`, `uc2-b4`, `uc3-b4`, `dev-local-b4` em `repositorio-aulas/data.js`

---

## Execução de 13/09/2026 — bimestre ainda não começou

A rotina semanal rodou em 13/09/2026. O 4º bimestre só começa em **02/10/2026** (faltam ~19 dias),
então, conforme a regra do `SKILL.md` ("fora de 02/10–09/12/2026, não gere nada"), nenhum material
novo foi gerado nesta execução. A Semana 1 já estava pronta desde 12/09/2026 (ver seção abaixo).
Nada a revisar por causa desta execução — é só um registro de que a rotina rodou e verificou a data
corretamente. As próximas execuções continuarão nesse modo de espera até a semana letiva de
02/10–08/10 se aproximar, quando a Semana 2 passa a ser gerada.

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

## Semanas 2 a 5 — ⏳ PENDENTE

| Semana | UC I | UC II | UC III | Dev Local |
|---|---|---|---|---|
| 2 (09/10–15/10) | Aula 03 transversal + Aula 04 prova mensal | Aula 03 prova mensal + Aula 04 teórica | Aula 03 transversal + Aula 04 prova mensal | Aula 03 validação + Aula 04 feedback |
| 3 (16/10–22/10) | Aula 05 teórica APIs + Aula 06 prática | Aula 05 prática dashboard + Aula 06 transversal | Aula 05 teórica + Aula 06 prática | Aula 05 iteração + Aula 06 curadoria |
| 4 (23/10–29/10) | Aula 07 transversal + Aula 08 prova bimestral | Aula 07 prova bimestral + Aula 08 culminância | Aula 07 transversal + Aula 08 prova bimestral | Aula 07 mostra + Aula 08 fechamento |
| 5 (30/10–05/11) | Aula 09 culminância + Aula 10 roda de conversa | — | Aula 09 culminância | — |

**Provas a gerar (12 arquivos):** cada prova precisa de prova + gabarito comentado + folha de recuperação.

| Disciplina | Prova mensal | Prova bimestral |
|---|---|---|
| UC I | Aula 04 (raspagem + limites da coleta) | Aula 08 (tudo, integrado) |
| UC II | Aula 03 (Data Lake / DW / Nuvem) | Aula 07 (tudo, integrado) |
| UC III | Aula 04 (qualidade de dados + vazamento) | Aula 08 (tudo, integrado) |

Dev Local não tem prova escrita — avalia por etapa (AV1 relatório de validação, AV2 mostra).

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
