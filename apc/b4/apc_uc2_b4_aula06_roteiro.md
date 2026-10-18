# Roteiro de Laboratório — UC II · Aula 06 (Transversal)

**Rastreamento e Vigilância de Dados** · Aula prática no laboratório de informática · Turmas 2A e 2B
**Formato:** duplas · **Duração:** 50 min

---

## Antes da aula (professor)

1. Testar no laboratório, no dia: a extensão de bloqueio/inspeção de rastreadores e o acesso ao painel
   de anúncios da Conta Google. Alguns laboratórios bloqueiam instalação de extensão — ter o Plano B
   pronto (abaixo).
2. **Plano B sem extensão instalável:** usar as Ferramentas do Desenvolvedor do navegador (F12 → aba
   "Rede"/"Network") para contar quantos domínios diferentes a página carrega — não identifica a empresa
   tão bem quanto uma extensão dedicada, mas mostra o volume.
3. Confirmar que toda dupla tem (ou consegue logar temporariamente n)uma Conta Google para acessar o
   painel de anúncios pessoal — avisar com antecedência que quem não quiser usar a própria conta pode
   fazer essa etapa em dupla, olhando a conta do colega, com consentimento.

## Abertura (5 min)

Pergunta disparadora: *"alguém aqui já comentou alguma coisa em voz alta e viu o anúncio do produto
aparecer pouco depois?"* Deixar a turma discutir um pouco antes de encaminhar: o que de fato costuma
acontecer é cruzamento de dados de **comportamento** (busca, navegação, localização, compras) — não
necessariamente o microfone ouvindo. A aula investiga o que é coleta real e o que é coincidência.

## Etapa 1 — Inspecionar rastreadores de 3 sites (15 min)

**Perguntas de investigação exatas que a dupla responde para cada site:**

1. Quantos seguidores/rastreadores de terceiros a extensão (ou a aba Rede) detecta nessa página?
2. De quais empresas são os rastreadores mais frequentes (ex. uma rede de anúncios, uma rede social)?
3. O site pede consentimento de cookies antes de carregar os rastreadores, ou eles já carregam antes de
   qualquer clique?

**Ferramenta recomendada:** uma extensão de bloqueio de rastreadores focada em privacidade, como o
**Privacy Badger** (da organização EFF — Electronic Frontier Foundation, gratuita, mostra um contador de
rastreadores bloqueados por site). Se a instalação de extensão estiver bloqueada no laboratório, usar o
Plano B do item 2 acima (Ferramentas do Desenvolvedor → aba Rede → contar domínios diferentes carregados).

**3 sites sugeridos para a investigação** (qualquer site popular de notícia, loja virtual ou rede social
funciona — o importante é serem sites com bastante tráfego e anúncio):

- Um portal de notícias de grande alcance
- Um site de comércio eletrônico conhecido
- Uma rede social acessada pelo navegador (sem app)

## Etapa 2 — Perfil de anúncios da própria Conta Google (12 min)

Acessar as configurações de anúncios da Conta Google (em **Conta Google → Dados e privacidade →
Anúncios**, ou diretamente em `myadcenter.google.com`) e responder:

1. Quais categorias de interesse a plataforma listou para você?
2. Quantas delas você diria que **acertaram**, e quantas **erraram** ou nem fazem sentido?
3. A plataforma permite desativar ou editar alguma dessas categorias? Teste uma.

> Quem não quiser abrir a própria conta na frente da dupla pode descrever em voz baixa e registrar só o
> resultado (quantos acertos, quantos erros) sem mostrar a tela — a privacidade da atividade sobre
> privacidade precisa ser respeitada.

## Etapa 3 — Política de privacidade de um app muito usado (8 min)

Ler **só o trecho sobre "dados coletados"** (não o documento inteiro) da política de privacidade de um
app que a dupla usa bastante, e responder: o que a empresa afirma coletar, além do que foi digitado
diretamente (ex. localização, lista de contatos, tempo de uso, dados de outros apps)?

## Etapa 4 — Produto final da dupla (10 min)

**Quadro comparativo "o que eu ganho × o que eu entrego"** — modelo em branco para a dupla preencher,
com pelo menos 4 linhas (ex.: ganho recomendação personalizada × entrego histórico de busca; ganho app
gratuito × entrego atenção e dados de uso).

**Lista de 5 ajustes de privacidade** que dá para fazer **hoje mesmo**, a partir do que foi descoberto
nas Etapas 1 a 3 (ex.: desativar uma categoria de anúncio, revisar permissões de localização de um app,
instalar um bloqueador de rastreadores, ler antes de aceitar cookies, apagar histórico de anúncios).

## Fechamento (não precisa de tempo fixo — encaixar na troca de etapas)

Pergunta final: *"depois de hoje, teria algum ajuste que vocês realmente vão fazer no próprio celular,
ou foi só teoria?"* — sem necessidade de resposta em voz alta para toda a turma, é reflexão pessoal.

---

## Critérios de avaliação

| Critério | Peso |
|---|---|
| Inspeção dos 3 sites com registro de rastreadores/domínios encontrados | 2 |
| Consulta ao perfil de anúncios com acertos e erros registrados | 2 |
| Leitura do trecho de política de privacidade com o que a empresa afirma coletar | 1 |
| Quadro comparativo "ganho × entrego" com pelo menos 4 linhas | 2 |
| Lista de 5 ajustes de privacidade, realistas e aplicáveis | 2 |
| Dupla manteve o nível de exposição pessoal que quis (nenhuma obrigada a mostrar a própria conta) | 1 |
