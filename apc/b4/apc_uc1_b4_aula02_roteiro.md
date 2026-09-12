# Roteiro de Laboratório — UC I · Aula 02

**Raspando uma Tabela da Web** · Aula prática no laboratório · Turmas 2A e 2B
**Formato:** duplas · **Duração:** 50 min · **Aplica:** Aula 01 (níveis RS / FA / NR)

---

## Antes da aula (professor)

1. Testar as fórmulas no laboratório **no dia**, com a internet da escola. `IMPORTHTML` depende de
   acesso externo do Google Sheets — se a rede bloquear, o plano B abaixo salva a aula.
2. Ter 3 URLs testadas no bolso, para a dupla que não conseguir escolher (ver "URLs de segurança").
3. **Plano B:** se o Sheets não conseguir buscar, use `apc_uc1_b4_aula02_plano_b.csv` (uma tabela já
   raspada). A dupla faz as Etapas 3 e 4 sobre ela, e a Etapa 2 passa a ser demonstração no projetor.

## Abertura (5 min)

Proposta: cada dupla escolhe um tema — esporte, câmbio, população, cinema — e precisa trazer uma tabela
pública da web para o Sheets **sem digitar linha por linha**. Quem digitar, perde o ponto da aula.

## Etapa 1 — Escolher a página (8 min)

A dupla escolhe uma página que tenha tabela pública. Antes de raspar, aplica o critério da Aula 01:
isso é **RS**? Se a tabela não aparece no HTML (só ao rolar), a página não serve para hoje.

> Teste rápido pra ensinar: clicar com o botão direito → "Exibir código-fonte da página" → Ctrl+F por
> `<table`. Se não achar, é FA — troca de página.

## Etapa 2 — Raspar (15 min)

Numa planilha nova:

```
=IMPORTHTML("URL_DA_PAGINA"; "table"; 1)
```

O terceiro argumento é o **índice da tabela na página**. A primeira tabela raramente é a que se quer —
as páginas costumam ter caixas de navegação que também são tabelas. Método: testar 1, 2, 3, 4... até
achar. Registrar qual índice funcionou.

| Problema que vai aparecer | O que significa | O que fazer |
|---|---|---|
| `#N/D` | Não achou tabela nesse índice | Tentar o índice seguinte |
| Volta a caixa de navegação | Índice errado | Continuar incrementando |
| `#REF!` "resultado muito grande" | A tabela não cabe onde foi colada | Colar em `A1` de uma aba vazia |
| Volta vazio em todos os índices | A página monta o conteúdo por JavaScript | É **FA** — trocar de página |

Para lista em vez de tabela: `=IMPORTHTML("URL"; "list"; 1)`.
Para um pedaço específico: `=IMPORTXML("URL"; "//caminho")` — apenas citar, não é o foco de hoje.

## Etapa 3 — Limpar (12 min)

O resultado do IMPORTHTML vem **vivo**: ele se atualiza e não deixa editar as células. Primeiro passo é
congelar — selecionar tudo, Ctrl+C, e **Colar especial → Somente valores** numa aba nova.

Depois: remover colunas inúteis, corrigir cabeçalhos, e conferir se número está como número
(`=ÉNÚM(célula)`). Número que chegou como texto não entra em gráfico — erro clássico, vale mostrar.

## Etapa 4 — Usar o dado (8 min)

Com a tabela limpa: **1 gráfico** adequado ao dado + **2 observações** escritas sobre o que ele mostra.

## Registro obrigatório da coleta (2 min)

Numa aba `COLETA`, sem exceção:

| Campo | Exemplo |
|---|---|
| URL de origem | `https://pt.wikipedia.org/wiki/...` |
| Índice da tabela | 3 |
| Data e hora da coleta | 06/10/2026, 13:40 |
| Quem coletou | nomes da dupla |

> Por que isso importa: dado sem origem e sem data não é dado, é boato. Se a página mudar amanhã,
> ninguém consegue conferir de onde veio o número. Esse é o hábito profissional da aula.

## Fechamento (2 min)

Pergunta: *"quem precisou trocar de página porque a primeira era FA?"* — mãos levantadas mostram que o
critério da Aula 01 serviu na prática. Gancho para a Aula 03: *"e das páginas que deram certo, alguma
pedia pra não ser raspada? Vamos descobrir na próxima."*

---

## URLs de segurança (testadas no padrão RS)

- Wikipédia — qualquer verbete com tabela de classificação, população ou lista de episódios
- Wikipédia — "Lista de municípios de Mato Grosso do Sul por população"
- Wikipédia — "Lista de países por população"

Verbetes da Wikipédia são o caso mais confiável: tabela real no HTML, sem bloqueio, e o `robots.txt`
deles permite — o que já prepara a Aula 03.

## Critérios de avaliação

| Critério | Peso |
|---|---|
| Tabela trazida por fórmula, sem digitação manual | 3 |
| Índice correto identificado e registrado | 2 |
| Limpeza feita (valores congelados, cabeçalho, tipos) | 2 |
| Gráfico adequado ao tipo de dado | 1 |
| 2 observações que realmente leem o dado | 1 |
| Aba COLETA completa (URL + índice + data) | 1 |
