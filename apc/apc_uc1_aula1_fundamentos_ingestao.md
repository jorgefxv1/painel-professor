APC — UC I: INGESTÃO DE DADOS
Aula 1 — Fundamentos de Ingestão de Dados

---

ANTES DE COMEÇAR

Eu vou estar fora da escola com a equipe de robótica nesses dias, competindo. Como não vou estar em sala pra dar essa aula pessoalmente, montei esse material pra você seguir sozinho, no seu ritmo. Leia com calma, não pule direto pro exercício — o conteúdo aqui é a base de tudo que a gente vai construir daqui pra frente em Ingestão de Dados, então vale a pena entender de verdade, não só decorar.

---

PRA COMEÇAR: UMA PERGUNTA

Por que a Netflix recomenda quase sempre o filme certo? Por que o Instagram parece "adivinhar" o que você gosta antes mesmo de você procurar?

A resposta não é mágica, é dado. Toda essa "inteligência" só existe porque, antes de qualquer recomendação, alguém construiu um processo pra capturar informação bruta (o que você assistiu, por quanto tempo, o que você curtiu) e transformar isso em algo utilizável. Esse processo tem nome: ingestão de dados. É o primeiro passo de qualquer sistema que trabalha com dados — sem ele, não existe análise, não existe IA, não existe recomendação nenhuma.

---

O QUE É INGESTÃO DE DADOS

Ingestão de dados é o processo de coletar dados de uma ou mais fontes e movê-los para um destino onde possam ser armazenados, tratados e usados. Repara na palavra: "ingestão" é a mesma que usamos pra comer — é literalmente o sistema "engolindo" dado bruto de fora pra dentro.

Fonte, aqui, pode ser praticamente qualquer coisa: um formulário preenchido no site, um sensor de temperatura, um clique num aplicativo, uma planilha exportada de outro sistema, uma leitura de cartão de crédito. Destino geralmente é um banco de dados, um data warehouse ou um data lake — lugares feitos pra guardar dado de forma organizada e acessível depois.

---

ONDE ISSO APARECE NO MUNDO REAL

A ingestão de dados não é exclusividade de empresa de tecnologia gigante. Ela está por trás de áreas bem diferentes:

Empresas — todo sistema de vendas, estoque ou financeiro ingere dados de transações o tempo todo, pra saber o que vendeu, quando e pra quem.

Saúde — hospitais ingerem dados de exames, prontuários e até de aparelhos que monitoram pacientes em tempo real, pra apoiar decisões médicas.

Redes sociais — cada curtida, comentário, tempo parado numa foto é um dado ingerido, usado depois pra decidir o que aparece no seu feed.

Jogos — cada partida gera dados de comportamento (onde você morre mais, quanto tempo joga, o que compra) que os desenvolvedores ingerem pra ajustar o jogo.

---

PRÓS E CONTRAS

Nenhum processo é só vantagem. Vale conhecer os dois lados:

Prós: permite decisões baseadas em dado real (não em achismo), possibilita automação, dá suporte a IA e machine learning, ajuda a identificar padrões e tendências cedo.

Contras: exige infraestrutura (nem sempre barata), dados mal ingeridos geram problemas em cascata pra frente (se o dado que entra é ruim, tudo que vem depois também será), e existe a questão de segurança e privacidade — dado ingerido errado ou exposto pode virar um baita problema.

---

A ANALOGIA DA FÁBRICA DE CHOCOLATE

Pensa numa fábrica de chocolate. Ela não recebe chocolate pronto — ela recebe cacau, açúcar, leite: matéria-prima bruta, desorganizada, em estados diferentes. Só depois de passar pelas máquinas (moer, misturar, temperar) é que vira uma barra de chocolate pronta pra ir pra loja.

Ingestão de dados funciona exatamente assim:

Matéria-prima = os dados brutos, vindos de várias fontes diferentes, muitas vezes bagunçados.
Processamento = as etapas que organizam, limpam e transformam esse dado bruto em algo utilizável.
Entrega = o dado já pronto, organizado, disponível pra quem for usar (um analista, um sistema, uma IA).

Esse fluxo inteiro — da matéria-prima até a entrega — é o que chamamos de pipeline de dados.

---

O QUE É UM PIPELINE

Pipeline é o caminho estruturado que o dado percorre desde a fonte até o destino final, passando por etapas bem definidas. A palavra em inglês significa literalmente "tubulação" — dá pra imaginar como um cano por onde o dado escoa, passando por "filtros" no caminho até chegar limpo do outro lado.

---

FLUXOGRAMA DO PIPELINE DE INGESTÃO DE DADOS

[ FONTE DE DADOS ]
 (sensor, formulário, clique, planilha, cartão...)
        |
        v
[ COLETA / INGESTÃO ]
 (o dado bruto entra no sistema)
        |
        v
[ PROCESSAMENTO / TRATAMENTO ]
 (organiza, limpa, corrige o que veio torto)
        |
        v
[ ARMAZENAMENTO ]
 (banco de dados, data warehouse, data lake)
        |
        v
[ ENTREGA / USO ]
 (relatório, recomendação, decisão, IA)

Repara que é um fluxo em uma direção só, igual a fábrica de chocolate: não dá pra pular etapa. Se o dado sai errado lá na "coleta", o problema se arrasta até a "entrega".

---

EXERCÍCIOS

Responda no seu caderno ou no documento indicado, com suas próprias palavras — não copie definição pronta, mostre que você entendeu.

1) Com suas palavras, explique o que é ingestão de dados. Use um exemplo que não esteja no material acima (pode ser um app que você usa, um jogo, uma situação da sua rotina).

2) Escolha UM app ou serviço que você usa (pode ser rede social, jogo, banco, delivery) e identifique: que tipo de dado bruto ele provavelmente coleta de você, e pra que ele usaria esse dado depois.

3) Reescreva a analogia da fábrica de chocolate, mas trocando o chocolate por outro exemplo à sua escolha (pode ser uma padaria, uma oficina de carro, uma cozinha de restaurante). Identifique claramente o que seria a "matéria-prima", o "processamento" e a "entrega" no seu exemplo.

4) Monte seu próprio fluxograma de pipeline (pode ser em texto, como o exemplo acima, ou desenhado) pra UMA situação real: escolha uma fonte de dado do seu dia a dia (por exemplo: as notas que você tira na escola, os passos que você anda registrados no celular, o histórico de compra de um mercado) e mostre as etapas — da fonte até o uso final do dado.

5) Cite um problema (pró ou contra) que pode acontecer se a etapa de "coleta" de um pipeline for malfeita. Dê um exemplo concreto de consequência.

---

Qualquer dúvida, anote pra perguntarmos quando eu voltar. Capricha!
