# Roteiro de Laboratório — UC I · Aula 06

**Consumindo uma API Pública** · Aula prática no laboratório de informática · Turmas 2A e 2B
**Formato:** duplas · **Duração:** 50 min · **Aplica:** Aula 05 (endpoint, parâmetro, JSON, API key, rate limit)

---

## Antes da aula (professor)

1. Testar as três URLs de segurança abaixo no navegador do laboratório **no dia**, antes da aula — elas
   são gratuitas e não exigem API key, mas dependem da internet da escola, que é instável.
2. **Plano B:** se a internet cair ou a API recusar (erro, timeout, página em branco), use
   `apc_uc1_b4_aula06_plano_b.csv` — uma resposta já "raspada" de uma API de câmbio (dado fictício,
   formato igual ao que a AwesomeAPI devolveria). A dupla faz as Etapas 3 e 4 sobre ele; a Etapa 2 passa
   a ser demonstração no projetor com um print da resposta real.
3. Function `IMPORTDATA` do Sheets só lê CSV puro ou texto simples — não lê JSON direto. Decidir com
   antecedência qual das URLs de segurança a turma vai usar, porque isso muda a Etapa 3 (ver tabela).

## Abertura (5 min)

Proposta: cada dupla escolhe uma API pública e gratuita e precisa trazer os dados dela para uma planilha
— **sem raspar tela nenhuma**. Quem copiar e colar número por número, perde o ponto da aula.

## Etapa 1 — Escolher a API (8 min)

Cada dupla escolhe uma das três APIs trabalhadas na Aula 05:

| API | O que oferece | Exige API key? |
|---|---|---|
| IBGE (localidades) | Municípios, estados, regiões | Não |
| AwesomeAPI (câmbio) | Cotações de moedas, atual e histórica | Não |
| BrasilAPI | CEP, DDD, feriados, bancos | Não |

Nenhuma das três exige cadastro para o uso de hoje — de propósito, para a aula não travar em
autenticação. Cite para a turma que APIs comerciais quase sempre exigem API key; isso fica para citar,
não para usar hoje.

## Etapa 2 — Montar o endereço e abrir no navegador (10 min)

A dupla monta a URL da requisição e abre direto no navegador para ver o JSON crua antes de importar.

**URLs de segurança (testadas, sem necessidade de API key):**

| Objetivo | URL | Retorna |
|---|---|---|
| Municípios de um estado | `https://servicodados.ibge.gov.br/api/v1/localidades/estados/MS/municipios` | Lista com todos os municípios de MS (nome, código IBGE, microrregião) |
| Câmbio histórico | `https://economia.awesomeapi.com.br/json/daily/USD-BRL/15` | Lista com a cotação do dólar dos últimos 15 dias |
| Feriados de um ano | `https://brasilapi.com.br/api/feriados/v1/2026` | Lista dos feriados nacionais de 2026 |

> Dica para ensinar a ler a URL: o `/MS/` e o `/2026` **são os parâmetros** — o endereço muda, a resposta
> muda com ele. É o mesmo princípio do `?cidade=` da Aula 05, só que embutido no caminho da URL em vez de
> depois do `?`.

## Etapa 3 — Importar para o Google Sheets (18 min)

O caminho depende do formato da resposta:

| Situação | O que fazer |
|---|---|
| A API tem uma versão do dado em **CSV** direto | `=IMPORTDATA("URL_DO_CSV")` — mais simples, mas nenhuma das três URLs acima oferece isso de fábrica |
| A resposta é **JSON** (caso das três URLs acima) | Abrir a URL no navegador, copiar o texto, colar numa aba de "RASCUNHO" e organizar manualmente em colunas — ou usar `=IMPORTDATA` e aceitar que ele venha como texto bruto, exigindo organização manual depois |

Para as três URLs de segurança, o caminho realista em 50 min é: **copiar o JSON, colar na planilha e
montar a tabela na mão**, campo por campo — isso também é "importar", e é o jeito que qualquer analista
sem programação faz quando a API não tem exportação direta em CSV. Montar uma tabela limpa com **pelo
menos 10 registros** (os municípios de MS e os feriados nacionais já têm isso de sobra; o câmbio de 15
dias também).

> Se o Sheets tentar "ajudar" e quebrar número com vírgula como texto, usar `=ÉNÚM(célula)` para
> confirmar — mesmo cuidado da Aula 02.

## Etapa 4 — Responder duas perguntas com o dado (9 min)

Com a tabela organizada, a dupla escreve **2 perguntas que o dado escolhido responde** e as respostas,
com base só no que foi importado. Exemplos conforme a API escolhida:

- Municípios de MS: "Quantos municípios a mesorregião Sudoeste tem, na lista trazida?"
- Câmbio: "Em qual dos 15 dias o dólar fechou mais alto, pela tabela importada?"
- Feriados: "Quantos feriados nacionais caem num dia de semana (não sábado/domingo) em 2026, pela lista?"

## Registro obrigatório da coleta (não pular)

Numa aba `COLETA`:

| Campo | Exemplo |
|---|---|
| Endpoint usado | `economia.awesomeapi.com.br/json/daily/USD-BRL/15` |
| Parâmetro(s) | moeda = USD-BRL, dias = 15 |
| Data e hora da coleta | 19/10/2026, 10h15 |
| Quem coletou | nomes da dupla |

> Mesmo hábito profissional da Aula 02 — mas agora o registro é mais simples de defender, porque a API
> tem contrato e data certa, diferente da raspagem.

## Fechamento (não precisa de tempo fixo — encaixar na troca de etapas)

Pergunta para a turma: *"o que teria sido diferente se vocês tivessem tentado raspar essa mesma
informação, em vez de usar a API?"* Resposta esperada: teria exigido achar a página certa, lidar com
layout, e correr o risco de quebrar se a página mudasse — tudo que a API já resolve de fábrica.

---

## Critérios de avaliação

| Critério | Peso |
|---|---|
| API escolhida e endereço da requisição corretamente montado | 2 |
| Dado importado sem raspagem manual campo a campo da tela (cópia do JSON organizada conta como importação válida) | 2 |
| Tabela limpa com pelo menos 10 registros | 2 |
| 2 perguntas respondidas com base só no dado importado | 2 |
| Aba COLETA completa (endpoint + parâmetro + data) | 2 |
