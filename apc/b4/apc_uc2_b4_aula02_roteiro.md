# Roteiro de Laboratório — UC II · Aula 02

**Montando um Mini Data Warehouse** · Aula prática no laboratório · Turmas 2A e 2B
**Formato:** duplas · **Duração:** 50 min · **Aplica:** Aula 01 (BR / DW / DL)

**Material (o "data lake" de brincadeira — 3 fontes cruas, cada uma de um sistema diferente):**

| Arquivo | O que é | Pegadinha proposital |
|---|---|---|
| `apc_uc2_b4_aula02_fonte1_vendas.csv` | Vendas do período | Separador **`;`**, data `dd/mm/aaaa`, valor com **vírgula** decimal |
| `apc_uc2_b4_aula02_fonte2_clientes.csv` | Cadastro de clientes | Separador `,`, data `aaaa-mm-dd`, cidade em 4 grafias, 1 cadastro vazio |
| `apc_uc2_b4_aula02_fonte3_produtos.csv` | Catálogo de produtos | Separador **`\|`**, preço com **ponto** decimal |

> As três fontes usam nome diferente para a mesma coisa: `id_cliente` × `codigo`, `id_produto` × `sku`.
> Isso não é descuido — é exatamente o que acontece quando o dado vem de sistemas diferentes.

---

## Antes da aula (professor)

1. Subir os 3 CSVs no Drive. Ao importar cada um no Sheets, o Google **pergunta o separador** — deixe a
   dupla descobrir isso, é parte da aula.
2. Montar como **3 abas de uma mesma planilha**, nomeadas `CRU_vendas`, `CRU_clientes`, `CRU_produtos`.
3. Gerar uma cópia por dupla.

## Abertura (5 min)

"Vocês receberam um **data lake**: três montes de dado cru, de três sistemas que nunca conversaram. A
tarefa é construir o **data warehouse** — uma aba única, limpa, que responda pergunta de negócio."
Retomar a Aula 01: lake = bruto e barato; warehouse = tratado e pronto para responder.

## Etapa 1 — Diagnóstico das fontes cruas (12 min)

Antes de juntar nada, a dupla preenche:

| Fonte | Separador | Formato de data | Decimal | Problemas encontrados |
|---|---|---|---|---|
| vendas | | | | |
| clientes | | | | |
| produtos | | | | |

Problemas a serem achados (não entregue a lista — deixe descobrirem):
- Cidade escrita de 4 formas diferentes (`Corumbá`, `corumba`, `CORUMBÁ`, `Ladario` sem acento)
- UF em minúscula numa linha
- Um cliente sem data de cadastro
- Um cliente (`C-08`) que **nunca comprou** — aparece no cadastro e não nas vendas
- Um produto (`P-105`) que **nunca foi vendido**
- Valor com vírgula numa fonte e ponto na outra: o Sheets trata um como texto

## Etapa 2 — Construir a aba WAREHOUSE (18 min)

Aba nova chamada `WAREHOUSE`, uma linha por venda, com as colunas padronizadas:

```
data | cliente | cidade | produto | categoria | qtd | valor_total
```

Ferramenta central: **PROCV** (`=PROCV(chave; intervalo; coluna; FALSO)`) para trazer o nome do cliente
e a descrição do produto usando o código como chave.

Padronizações obrigatórias:
- Cidade com `=PROPRIO(...)` para unificar a grafia — e resolver `Ladario` sem acento **na mão**,
  porque `PROPRIO` não conserta acento. (Ótimo momento pra dizer: nem toda limpeza é automática.)
- Data num formato só
- Valor como número de verdade (checar com `=ÉNÚM()`)

> Se `PROCV` retornar `#N/D`, a chave não existe na outra fonte — **é achado, não erro**. Anotar qual.

## Etapa 3 — Responder as perguntas de negócio (12 min)

Só com a aba `WAREHOUSE`, sem voltar às cruas:

1. Qual produto mais vendeu, em quantidade?
2. Qual cidade tem mais clientes que **compraram de fato**?
3. Qual foi o faturamento total do período?
4. *(bônus)* Qual categoria de produto fatura mais?

Fórmulas de apoio: `SOMASE`, `CONT.SE`, `SOMA`, tabela dinâmica se a dupla quiser avançar.
Mais **2 gráficos** adequados às respostas.

## Fechamento (3 min)

Duas perguntas que fecham o conceito:

1. *"Por que não deu pra responder a pergunta 1 direto na aba crua de vendas?"*
   → Porque vendas só tem `P-100`, não "Café torrado 500g". Sem juntar as fontes, o dado não fala.
2. *"O cliente C-08 e o produto P-105 apareceram nas suas respostas?"*
   → Não, e **está certo** — eles existem no cadastro, mas não têm venda. Warehouse guarda o que responde
   à pergunta; o lake guarda tudo. Essa é a diferença, na prática.

---

## Gabarito das perguntas de negócio

| Pergunta | Resposta | Como confere |
|---|---|---|
| 1. Produto que mais vendeu (qtd) | **P-100 — Café torrado 500g**, 8 unidades | Somar qtd por produto: P-100 = 2+1+1+4 = 8; P-104 = 5+2 = 7; P-101 = 3+2+1 = 6; P-103 = 1+1+3 = 5; P-102 = 1+2+1 = 4 |
| 2. Cidade com mais clientes compradores | **Corumbá**, com 4 (C-01, C-02, C-04, C-07) | Ladário tem 2 (C-03, C-05) e Corumbá tem também C-06. Ver observação abaixo |
| 3. Faturamento total | **R$ 2.427,00** | Soma da coluna `valor_total` das 15 vendas |
| 4. Categoria que mais fatura | **Alimentos**, R$ 1.988,20 | Limpeza fica com R$ 438,80 |

**Observação importante sobre a pergunta 2:** clientes de Corumbá que compraram são **C-01, C-02, C-04,
C-06 e C-07 = 5**, se a dupla contar o Hotel Pantanal (C-06), que compra e está em Corumbá. A resposta
"4" aparece quando a dupla exclui o C-06 por causa do cadastro vazio. **As duas respostas são defensáveis**
— o que importa é a dupla explicar o critério. Use isso no fechamento: em análise de dados, o número
depende da regra que você escolheu, e a regra precisa estar escrita.

## Critérios de avaliação

| Critério | Peso |
|---|---|
| Diagnóstico das 3 fontes preenchido corretamente | 2 |
| Aba WAREHOUSE com colunas padronizadas | 3 |
| PROCV usado corretamente para juntar as fontes | 2 |
| Cidade e data padronizadas | 1 |
| 3 perguntas respondidas com critério explicado | 1 |
| 2 gráficos adequados | 1 |
