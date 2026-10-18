# Gabarito — UC I · Aula 05 · APIs como Fonte de Dados

> Material do professor. Lista do aluno: `apc_uc1_b4_aula05_lista.html`.
> Turmas 2A e 2B · 4º bimestre 2026 · Aula teórica em sala.

## Parte 1 — Lendo um JSON

O JSON impresso é um exemplo didático (dado fictício, criado para esta aula — não vem de uma API real).

**a)** O parâmetro `cidade` valeu **Corumbá** (ou `Corumba`, sem acento, dependendo de como a API aceitar
o texto). O campo `"cidade": "Corumbá"` na resposta é o eco do que foi pedido na requisição — API bem
feita devolve o que recebeu, para confirmar que entendeu o pedido certo.

**b)** **3 dias.** Descobre-se contando os itens dentro dos colchetes `[ ]` do campo `previsao` — cada
par de chaves `{ }` entre vírgulas é um dia. Não precisa ler o texto: é a estrutura (quantos blocos `{...}`
existem dentro da lista) que dá a resposta, igual contar itens numa lista de compras.
*Erro mais provável:* responder "3" contando errado por confundir o primeiro `{` do JSON geral com o
primeiro dia — reforçar que `previsao` é a lista, e só o que está **dentro** dela conta como dia.

**c)** **22°C.** É o valor de `min_c` dentro do terceiro item de `previsao` (`"dia": "depois_de_amanha"`).
*Erro mais provável:* pegar o `min_c` do primeiro ou segundo item (24 ou 23) por não navegar até o item
certo da lista.

**d)** Entra em `previsao`, depois no **primeiro item da lista** (`"dia": "hoje"`), depois no campo
`condicao` — caminho: `previsao → item 1 → condicao`, valor `"ensolarado"`.
*Erro mais provável:* responder só "condicao", sem mencionar que antes é preciso achar o item certo dentro
da lista — o aluno que só olha nomes de campo e ignora a posição na lista erra esse tipo de pergunta em
qualquer API real.

**e)** `atualizado_em` diz **quando aquela resposta foi gerada** (08h do dia 19/10/2026). Importa porque
previsão do tempo (e qualquer dado de API) **envelhece** — uma resposta de clima de ontem pode estar
errada hoje. Sem esse campo, não haveria como saber se o dado ainda vale ou se é hora de pedir de novo.
Liga direto com a dimensão "atualidade" da qualidade de dados, vista na UC III.

**f)** Indicaria que a **API key está errada, expirada ou não foi enviada** na requisição — ou seja, um
problema de **autenticação**, não um problema com a cidade pedida ou com o servidor da API.
*Aceitar também:* a resposta poderia significar que o **limite de uso (rate limit)** foi excedido, se a
mensagem de erro falar em limite em vez de chave — vale aceitar se o aluno justificar com a mensagem certa.

## Parte 2 — Qual API, qual parâmetro?

| # | Informação desejada | Qual API | Parâmetro | Erro mais provável |
|---|---|---|---|---|
| 1 | Cotação atual do dólar | **AwesomeAPI** | o par de moedas, ex. `USD-BRL` | Marcar BrasilAPI — a dupla lembra "BrasilAPI = tudo nacional" e esquece que câmbio é o caso de uso citado para a AwesomeAPI |
| 2 | População estimada de Corumbá | **IBGE** | o nome ou código do município (ex. `Corumbá` ou `5003207`) | Marcar BrasilAPI por ser "dado sobre o Brasil" — o critério certo é "quem publica aquele dado oficialmente", e dado de município/população é do IBGE |
| 3 | Se 15/11 é feriado nacional | **BrasilAPI** | o **ano** (ex. `2026`) — o endpoint devolve a lista de feriados do ano, e a dupla confere se a data está nela | Pedir "o dia" como parâmetro direto; a maioria dessas APIs de feriado devolve a lista do ano inteiro, não aceita consultar um dia isolado |
| 4 | Cidade/estado de um CEP | **BrasilAPI** | o **CEP** (ex. `79301000`) | Marcar IBGE — IBGE trabalha com código de município, não com CEP |
| 5 | DDD de uma cidade de MS | **BrasilAPI** | o **DDD** (ex. `67`) — atenção: o parâmetro de entrada costuma ser o próprio código DDD, que devolve as cidades atendidas, e não o caminho inverso | Achar que dá para mandar o nome da cidade direto; vale aceitar a resposta "BrasilAPI" como acerto principal mesmo que o aluno erre o sentido exato do parâmetro — o ponto da questão é saber **qual API**, não o contrato exato do endpoint |
| 6 | Variação do dólar em 30 dias | **AwesomeAPI** | o par de moedas + **quantidade de dias** (ex. `USD-BRL/30`) | Marcar IBGE por confundir "variação" com "estatística" — câmbio histórico é sempre AwesomeAPI |

**Padrão a puxar na correção:** cada API pública tem um "território" (IBGE = geografia e população;
AwesomeAPI = câmbio; BrasilAPI = utilidades do dia a dia — CEP, DDD, feriados, bancos). Quando a dupla
hesitar entre duas, a pergunta que resolve é "quem seria o dono oficial desse dado no mundo real?".
