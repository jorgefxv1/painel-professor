# Gabarito — UC I · Aula 01 · Raspagem de Dados da Web

> Material do professor. Lista do aluno: `apc_uc1_b4_aula01_lista.html`.
> Turmas 2A e 2B · 4º bimestre 2026 · Aula teórica em sala.

## Parte 1 — Dá para raspar?

| # | Situação | Nível | Justificativa | Erro mais provável |
|---|---|---|---|---|
| 1 | Classificação do Brasileirão na Wikipédia | **RS** | É uma tabela HTML pronta na página; `IMPORTHTML(url;"table";n)` resolve | — (é o caso mais fácil, e é o da prática da Aula 02) |
| 2 | Cotação do dólar dos últimos 30 dias | **RS** | Portais públicos de câmbio publicam em tabela; muitos ainda oferecem API, que é melhor | Marcar FA por parecer "dado financeiro complicado". O formato é que manda, não o assunto |
| 3 | Mensagens privadas de um grupo de WhatsApp | **NR** | Conteúdo **privado**, de conversa entre pessoas. Não está publicado, e coletar fere privacidade e a LGPD | Marcar FA ("é difícil, mas dá"). O ponto não é a dificuldade — é que **não se deve** |
| 4 | Preços que só carregam ao rolar a tela | **FA** | Conteúdo montado por JavaScript depois que a página abre; não está no HTML inicial, então IMPORTHTML volta vazio | Marcar RS. É o erro mais comum e o mais instrutivo: a fórmula retorna `#N/D` e o aluno acha que errou a sintaxe |
| 5 | Municípios e população num site do governo | **RS** | Dado público, em tabela. *Melhor ainda:* o IBGE tem API — assunto da Aula 05 | Marcar NR por ser "do governo". Dado público de governo é justamente o mais liberado |
| 6 | Perfis de adolescentes para reconhecimento facial | **NR** | Dado pessoal de menores, uso não autorizado, finalidade que fere direitos. Viola termos de uso da rede e a LGPD | Marcar FA. Tecnicamente possível, eticamente e legalmente não — é o gancho da Aula 03 |

**Padrão a puxar:** a pergunta não é *"eu consigo?"*, é *"eu posso, e o formato ajuda?"*
Duas situações (3 e 6) são NR, e por motivos diferentes: uma é dado **privado**, a outra é dado
**público usado para finalidade indevida**. Vale separar isso no quadro.

## Parte 2 — Entendendo o limite

**a)** A página para pessoa ler é organizada para a **leitura visual** — tem título grande, cor, imagem,
propaganda, texto em volta, e a informação misturada ao enfeite (ex.: a página de cotação do dólar de um
portal de notícias). O dado estruturado é organizado para a **máquina processar** — só a informação, em
linhas e colunas ou em pares campo-valor, sem enfeite (ex.: o mesmo dado num CSV ou num JSON). A raspagem
é o trabalho de tirar o segundo de dentro do primeiro.

**b)** Porque a tag é uma **marcação previsível**. Quando o site coloca a informação dentro de
`<table>`, `<tr>` e `<td>`, ele está declarando "isto é uma tabela, esta é uma linha, esta é uma célula".
A ferramenta de raspagem não "entende" o assunto da página — ela segue essa marcação. Sem estrutura, não
haveria como saber onde um dado termina e o outro começa.

**c)** **O site mudou de layout.** A raspagem depende da posição do dado na estrutura da página: se a
tabela que era a terceira virou a quarta, ou se a coluna mudou de lugar, a fórmula continua obediente e
passa a trazer a coisa errada. É a fragilidade central da raspagem, e o principal argumento a favor da
API (Aula 05), que é um contrato estável.
*Aceite também:* o site passou a bloquear acessos automáticos, ou o conteúdo passou a carregar por
JavaScript.

**d)** Resposta esperada para a 3: são **mensagens privadas**; ninguém consentiu em ter a conversa
coletada, e dado de conversa pessoal é protegido — publicar ou analisar isso expõe as pessoas.
Para a 6: mesmo que as fotos estejam visíveis, são **dados pessoais de menores de idade**, e usá-las para
treinar reconhecimento facial é uma finalidade que as pessoas não autorizaram e que pode causar dano real
(vigilância, identificação indevida). O critério a fixar: **estar acessível não é o mesmo que estar
liberado para qualquer uso.** Esse é exatamente o tema da Aula 03.
