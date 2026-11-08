# Roteiro de Laboratório — UC I · Aula 03 (Transversal)

**Coleta em Massa: robots.txt, Termos de Uso e Limites da Raspagem** · Aula prática no laboratório · Turmas 2A e 2B
**Formato:** duplas · **Duração:** 50 min · **Aplica:** Aulas 01-02 (raspagem) → traz o limite ético/legal

---

## Antes da aula (professor)

1. **Testar os três endereços de robots.txt no dia**, com a internet da escola — ver "Links de apoio"
   abaixo. Este roteiro foi escrito sem acesso à internet da sessão que o gerou; os conteúdos de
   robots.txt e dos termos de uso **mudam com o tempo** e precisam ser confirmados antes de imprimir.
2. Separar 2-3 reportagens atuais sobre raspagem indevida para quem não achar nada na Etapa 3 (ver
   "Pistas de pesquisa").
3. Avisar a turma que o e-mail do Have I Been Pwned é assunto da Aula 03 da **UC III** (mesma semana) —
   esta aula olha para o lado de quem coleta, aquela olha para o lado de quem vaza.

## Abertura (5 min)

Pergunta disparadora: *"se o dado está público na internet, posso fazer o que eu quiser com ele?"*
Recolher 2-3 respostas da turma sem corrigir ainda. Conduzir à ideia de que existem três situações
diferentes: dado **inacessível**, dado **acessível mas com regras**, e dado **livre**. A aula de hoje é
sobre descobrir as regras antes de raspar.

## Etapa 1 — Lendo um robots.txt (12 min)

**Pergunta de investigação:** *Para cada um dos três sites abaixo, o que o arquivo `/robots.txt` pede
para não ser raspado? Existe alguma parte liberada para buscadores (Google) mas fechada para outros
robôs?*

Em duplas, cada uma abre os três endereços no navegador (é só texto, abre direto):

| Site | Endereço do robots.txt |
|---|---|
| Google | `https://www.google.com/robots.txt` |
| Wikipédia (PT) | `https://pt.wikipedia.org/robots.txt` |
| X / Twitter | `https://twitter.com/robots.txt` |

Para cada um, a dupla preenche no caderno ou no Docs:
- Quantas linhas `Disallow:` aparecem (aproximadamente)?
- Existe um bloco `User-agent: *` (vale para todo robô) e outro `User-agent: Googlebot` (só para o
  buscador do Google)? O que isso significa na prática?
- Alguma pasta chamou atenção por parecer "proibida de propósito"?

> **Robots.txt não é cadeado, é placa de aviso.** O arquivo não bloqueia tecnicamente nada — ele é um
> pedido de boa conduta, que raspadores sérios respeitam e raspadores mal-intencionados ignoram. Vale
> perguntar à turma: *"uma placa de 'não pise na grama' impede alguém de pisar?"*

## Etapa 2 — Lendo um termo de uso (10 min)

**Pergunta de investigação:** *O que os termos de uso de uma rede social (Instagram, X/Twitter, TikTok
ou LinkedIn — a dupla escolhe uma) dizem sobre coleta automatizada (scraping, bots, crawlers)? A
linguagem é fácil ou difícil de entender?*

Passo a passo: abrir o site escolhido → rodapé → "Termos de Uso" / "Termos de Serviço" → Ctrl+F por
"automatiz", "robô", "bot", "scraping" ou "coleta". Copiar o trecho encontrado (ou o mais próximo) para
o Docs, com a data de acesso.

> Se a dupla não achar nenhuma menção direta em 5 minutos, está liberada para seguir — alguns termos
> tratam disso de forma genérica dentro de "uso indevido da plataforma". Registrar essa ausência também
> é um resultado válido.

## Etapa 3 — Um caso real de conflito (15 min)

**Pergunta de investigação:** *Em um caso real de raspagem contestada, o que foi coletado, quem coletou,
e por que isso gerou polêmica ou processo?*

Pistas de pesquisa (a dupla busca a notícia mais recente e confirma os fatos antes de registrar):
- "Clearview AI reconhecimento facial fotos redes sociais" — empresa que raspou bilhões de fotos
  públicas de redes sociais para montar um banco de reconhecimento facial, e enfrentou multas e
  proibições em vários países.
- "LinkedIn x hiQ Labs raspagem de perfis" — disputa judicial nos EUA sobre se raspar perfil público do
  LinkedIn é permitido.
- Uma notícia mais recente, escolhida livremente pela dupla, com os termos "vazamento de dados por
  raspagem" ou "scraping polêmica".

Registro mínimo: nome do caso, o que foi raspado, quem fez, e **o que estava em jogo** (não é sobre
dificuldade técnica — é sobre o que a coleta ignorou: privacidade, consentimento, finalidade).

## Fechamento — Código de Conduta da Coleta (8 min)

A turma constrói junto, no quadro, 6 regras do que torna uma raspagem aceitável — a partir do que as
duplas encontraram nas Etapas 1 a 3. Cada dupla copia as 6 regras combinadas no modelo em branco
(`apc_uc1_b4_aula03_modelo_codigo_conduta.html`) e acrescenta, ao final, uma regra própria que não saiu
da discussão coletiva.

Sugestão de nós para guiar a construção coletiva, se a turma travar:
respeitar o robots.txt → ler os termos de uso antes de automatizar → não coletar dado privado ou de
menor → não sobrecarregar o servidor do site → declarar a finalidade do uso → citar a fonte e a data da
coleta.

---

## Links de apoio (testar antes da aula — ver nota no topo)

- `google.com/robots.txt`, `pt.wikipedia.org/robots.txt`, `twitter.com/robots.txt`
- Termos de uso: rodapé de Instagram, X/Twitter, TikTok ou LinkedIn
- Busca sugerida: "Clearview AI reconhecimento facial", "LinkedIn hiQ Labs raspagem"

## Critérios de avaliação

| Critério | Peso |
|---|---|
| As três leituras de robots.txt registradas com observações próprias | 3 |
| Trecho do termo de uso (ou ausência justificada) com data de acesso | 2 |
| Caso real registrado com fonte, o que foi coletado e o que estava em jogo | 3 |
| Código de conduta com as 6 regras + 1 regra própria da dupla | 2 |
