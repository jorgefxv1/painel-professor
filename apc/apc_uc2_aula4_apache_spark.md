APC — UC II: ECOSSISTEMA DE BIG DATA II
Aula 4 — Apache Spark, Processamento em Lote e em Tempo Real

---

COMO USAR ESTE MATERIAL

Este é o Bloco 2 da disciplina. No Bloco 1 você viu a arquitetura do ecossistema de Big Data: coleta, armazenamento e processamento, e os 3 Vs (volume, velocidade e variedade).

Agora a gente entra fundo na etapa de PROCESSAMENTO. A pergunta é: depois que o dado foi coletado e guardado, de que jeito ele é transformado em informação útil? Existem duas formas principais — em lote e em tempo real — e uma ferramenta que virou padrão pra fazer as duas: o Apache Spark.

Leia no seu ritmo. Primeiro as duas formas de processar, com as analogias; depois a Apache Software Foundation e o Spark. Os exercícios estão no fim.

---

PRA COMEÇAR: DUAS ANALOGIAS DO DIA A DIA

Situação 1: você junta a roupa suja a semana inteira e, no sábado, coloca tudo de uma vez na máquina e lava num ciclo só. Você espera juntar um monte pra processar de uma vez.

Situação 2: você está usando uma fritadeira elétrica (air fryer) e vai colocando os alimentos conforme eles chegam da tábua de corte, tirando conforme ficam prontos. O processamento acontece de forma contínua, na medida em que as coisas vão entrando.

Essas duas situações são exatamente as duas formas de processar dados no Big Data:

- Juntar tudo e processar de uma vez = processamento em LOTE (batch)
- Processar continuamente, conforme o dado chega = processamento em TEMPO REAL (streaming)

Nenhuma das duas é "melhor". Cada uma serve pra um tipo de necessidade, e a aula de hoje é sobre saber escolher.

---

PROCESSAMENTO EM LOTE (BATCH)

No processamento em lote, os dados são acumulados durante um período e processados todos juntos, em blocos, num momento programado.

Como funciona: o sistema espera juntar um volume grande de dados (o "lote"), depois roda um processo pesado sobre tudo de uma vez — geralmente em horários de baixo movimento, como de madrugada.

Características:
- Latência alta: entre o dado chegar e o resultado sair, pode passar minutos, horas ou até um dia. Isso é aceitável porque a resposta não precisa ser imediata.
- Vazão (throughput) alta: como processa tudo junto, dá conta de volumes enormes de forma eficiente.
- Previsível e mais barato: roda em horário definido, em máquinas que podem ser desligadas depois.

Quando usar: quando a decisão não depende de reagir "no segundo em que o dado acontece".

Exemplos:
- Fechamento da folha de pagamento no fim do mês
- Relatório de vendas consolidado do dia ou do mês
- Emissão de faturas de cartão de crédito
- Recalcular recomendações de um site uma vez por dia, de madrugada

Ferramentas típicas: Hadoop MapReduce, Apache Spark (módulo de lote), Apache Hive.

---

PROCESSAMENTO EM TEMPO REAL (STREAMING)

No processamento em tempo real, cada dado é processado assim que chega — registro a registro, ou em micro-lotes de poucos segundos.

Como funciona: existe um fluxo contínuo de dados entrando (o "stream"), e o sistema reage a cada evento na hora, produzindo resultado quase imediato.

Características:
- Latência baixa: o resultado sai em segundos ou frações de segundo depois do dado chegar.
- Fluxo contínuo: não tem "começo" nem "fim" do processamento; ele fica ligado o tempo todo, esperando o próximo evento.
- Mais complexo e mais caro: precisa de infraestrutura sempre ligada e preparada pra picos de tráfego.

Quando usar: quando o valor da informação depende de agir imediatamente.

Exemplos:
- Detecção de fraude no cartão no instante da compra
- Atualização do trânsito no app de GPS enquanto você dirige
- Recomendação de próximo vídeo em tempo real
- Alertas de um sensor industrial ou de um monitor cardíaco
- Placar e estatísticas ao vivo de um jogo

Ferramentas típicas: Apache Kafka (transporte do fluxo), Apache Flink, Apache Storm, Spark Structured Streaming.

---

TABELA COMPARATIVA: LOTE x TEMPO REAL

  Aspecto              | Lote (batch)                  | Tempo real (streaming)
  --------------------- | ----------------------------- | -----------------------------
  Quando o dado chega   | acumulado por um período      | continuamente, o tempo todo
  Quando é processado   | tudo de uma vez, agendado     | na hora em que cada dado chega
  Latência da resposta  | alta (minutos a horas)        | baixa (segundos ou menos)
  Volume por execução   | muito grande de uma vez       | pequeno e constante
  Custo e complexidade  | menor                         | maior
  Analogia              | juntar a roupa e lavar de uma  | air fryer: entra e sai contínuo
  Exemplo              | folha de pagamento mensal     | fraude no cartão na hora da compra

---

FLUXOGRAMA: COMO DECIDIR ENTRE LOTE E TEMPO REAL

  [ PERGUNTA 1 ]
   A decisão precisa ser tomada no instante em que o dado acontece?
   (ex.: bloquear uma compra suspeita AGORA)
        |
        |-- SIM --> use PROCESSAMENTO EM TEMPO REAL (streaming)
        |
        NÃO
        |
        v
  [ PERGUNTA 2 ]
   Dá pra esperar juntar um volume grande e rodar de tempos em tempos
   (uma vez por hora, por dia, por mês)?
        |
        |-- SIM --> use PROCESSAMENTO EM LOTE (batch)
        |
        NÃO / "os dois"
        |
        v
  [ ARQUITETURA HÍBRIDA ]
   parte em tempo real pro que é urgente (alerta na hora)
   + parte em lote pro que é volumoso e pode esperar (relatório completo)

A maioria das empresas grandes usa os dois ao mesmo tempo, cada um pra uma parte do problema.

---

PARTE 2 — A APACHE SOFTWARE FOUNDATION E O APACHE SPARK

O QUE É A APACHE SOFTWARE FOUNDATION

A Apache Software Foundation (ASF) é uma organização sem fins lucrativos, criada em 1999 nos Estados Unidos, que mantém centenas de projetos de software livre (open source).

Ideia central: o código é aberto, qualquer um pode ver, usar e modificar, e o projeto é mantido por uma comunidade de voluntários e empresas, sob regras de governança por mérito (quem contribui ganha voz nas decisões). Os projetos usam a Licença Apache 2.0, que é bem permissiva: dá pra usar até em produto comercial.

Quando um projeto tem "Apache" no nome (Apache Spark, Apache Kafka, Apache Hadoop, Apache Flink), quer dizer que ele é mantido sob esse guarda-chuva. Isso passa uma garantia de que o projeto não pertence a uma empresa só e não vai simplesmente sumir se essa empresa mudar de ideia.

---

O QUE É O APACHE SPARK

O Apache Spark é um motor de processamento distribuído para dados em larga escala. "Distribuído" significa que ele divide o trabalho entre vários computadores (um cluster) que trabalham em paralelo, como se fossem um só.

Um pouco de história: o Spark nasceu em 2009 em um laboratório da Universidade da Califórnia em Berkeley, foi doado à Apache Software Foundation em 2013 e virou um dos seus projetos principais em 2014. Hoje é uma das ferramentas mais usadas do mundo pra Big Data.

Por que ele surgiu: antes do Spark, o padrão pra processar Big Data era o Hadoop MapReduce. O MapReduce funciona, mas tem um problema: a cada etapa do processamento, ele grava o resultado parcial no disco e lê de novo na etapa seguinte. Disco é lento. Pra tarefas que repetem o mesmo cálculo muitas vezes (como treinar um modelo de inteligência artificial ou rodar várias consultas sobre os mesmos dados), isso fica insuportavelmente demorado.

A sacada do Spark: manter os dados na memória (RAM) entre as etapas, em vez de ir e voltar do disco toda hora. Memória é muito mais rápida que disco. Em cargas de trabalho que reaproveitam os dados, o Spark chega a ser dezenas de vezes mais rápido que o MapReduce.

Como o Spark é organizado (os módulos principais):
- Spark Core: o motor de base, que distribui o trabalho e cuida da memória.
- Spark SQL / DataFrames: permite consultar os dados usando SQL ou tabelas.
- Spark Structured Streaming: o módulo de processamento em tempo real.
- MLlib: biblioteca de machine learning.
- GraphX: processamento de grafos (redes de conexões).

Você programa o Spark em várias linguagens: Python (a mais usada em Ciência de Dados, através do PySpark), Scala, Java, R e SQL.

---

PRÓS E CONTRAS DO APACHE SPARK

Prós:
- Rápido: processamento em memória, muito mais ágil que o MapReduce em tarefas repetitivas.
- Unificado: faz lote, tempo real, SQL e machine learning no mesmo motor, com a mesma forma de programar.
- Várias linguagens: a equipe usa a linguagem que já domina.
- Comunidade grande: muita documentação, muitos exemplos, roda nas principais nuvens.

Contras:
- Consome muita memória RAM: e memória é cara. Um cluster Spark grande pesa no orçamento.
- Exagero pra dados pequenos: se os dados cabem num computador só, o Spark só adiciona complexidade sem ganho.
- Curva de aprendizado: entender cluster, partições e ajuste de desempenho leva tempo.
- Ajuste fino trabalhoso: extrair o melhor desempenho exige configurar bem o cluster.
- Streaming em micro-lotes: o Spark processa o "tempo real" em pequenos blocos de segundos, não evento a evento. Pra latência realmente mínima, o Flink costuma ir melhor.

---

CONCORRENTES DO APACHE SPARK

  Ferramenta         | Forte em            | Resumo
  ------------------- | ------------------- | -------------------------------------------
  Hadoop MapReduce    | lote               | O padrão antigo. Maduro e barato, mas lento
                     |                     | (usa disco) e trabalhoso de programar.
  Apache Flink        | tempo real         | Streaming de verdade, evento a evento, com
                     |                     | latência muito baixa. Também faz lote.
  Apache Storm        | tempo real         | Uma das primeiras ferramentas de streaming.
                     |                     | Baixa latência, mas hoje pouco usada.
  Dask                | Python / escala    | Biblioteca Python que paraleliza pandas e
                     | menor              | numpy. Mais simples que o Spark, boa pra
                     |                     | dados médios; não escala tão longe.

Resumo da escolha: MapReduce pra lote muito grande e barato; Spark quando você quer um motor só pra tudo e velocidade; Flink quando a latência do tempo real precisa ser mínima; Dask quando o time é de Python e os dados não são tão colossais.

---

COMO O SPARK FAZ LOTE E TEMPO REAL COM O MESMO CÓDIGO

Essa é a parte elegante do Spark. No processamento em lote, você trata os dados como uma tabela: leia, filtre, agrupe, some, grave o resultado.

No Structured Streaming, o Spark trata o fluxo contínuo como uma tabela que nunca para de crescer — a cada poucos segundos, chegam linhas novas no fim da tabela, e o Spark roda o mesmo tipo de operação sobre as linhas novas.

Ou seja: você aprende a manipular os dados uma vez, e usa quase o mesmo código tanto pro relatório mensal (lote) quanto pro painel ao vivo (streaming). Isso reduz muito o trabalho da equipe.

---

FLUXOGRAMA: UM PIPELINE DE DADOS COM SPARK

  [ FONTE DOS DADOS ]
   arquivos, banco de dados, HDFS, nuvem (S3), ou um fluxo do Kafka
        |
        v
  [ LEITURA ]
   o Spark carrega os dados e distribui as partições entre os
   computadores do cluster
        |
        v
  [ TRANSFORMAÇÕES ]
   filtrar linhas, selecionar colunas, juntar tabelas (join),
   agrupar e agregar (somar, contar, média)
        |
        v
  [ AÇÃO ]
   o comando que de fato dispara o processamento: gravar o
   resultado, contar, ou mostrar na tela
        |
        v
  [ DESTINO ]
   um novo arquivo, uma tabela, um painel (dashboard) ou um alerta

Detalhe importante: o Spark só executa de verdade quando chega numa AÇÃO. As transformações antes disso são só um "plano" que ele monta e otimiza antes de rodar. Isso se chama avaliação preguiçosa (lazy evaluation) e é um dos motivos de ele ser eficiente.

---

EXERCÍCIOS

Responda no documento indicado, com suas próprias palavras.

1) Explique, sem copiar do material, a diferença entre processamento em lote e processamento em tempo real. Dê um exemplo NOVO (não citado aqui) de cada um.

2) Classifique cada situação abaixo como LOTE ou TEMPO REAL e justifique a escolha em uma linha:
   a) Relatório de vendas consolidado do mês para a diretoria.
   b) Detecção de fraude no momento em que o cartão é passado na maquininha.
   c) Atualização da rota no aplicativo de GPS enquanto o motorista dirige.
   d) Cálculo dos juros mensais de todas as contas de um banco.
   e) Recomendação do próximo vídeo enquanto o usuário assiste.
   f) Fechamento da folha de pagamento dos funcionários.

3) Por que o Apache Spark costuma ser mais rápido que o Hadoop MapReduce? O que ele faz de diferente? (dica: pense em disco x memória)

4) Complete a tabela de prós e contras do Spark com suas palavras — pelo menos 3 prós e 3 contras — e, ao final, escreva uma frase dizendo em que tipo de situação NÃO valeria a pena usar o Spark.

5) Para cada cenário, escolha a ferramenta mais adequada entre Spark, Flink, Hadoop MapReduce e Dask, e justifique:
   a) Uma startup pequena, equipe só de Python, cerca de 10 GB de dados por análise.
   b) Um banco que precisa reagir a fraudes com latência de milissegundos.
   c) Uma empresa que roda um único processamento gigante por dia, de madrugada, e quer gastar pouco.
   d) Um time que quer uma ferramenta só pra fazer lote, streaming e machine learning juntos.

6) Desenhe (em texto, como o fluxograma do material) o pipeline de dados com Spark para um caso fictício da sua escolha — por exemplo: um app de delivery que quer um painel ao vivo de pedidos por bairro. Indique a FONTE, pelo menos duas TRANSFORMAÇÕES, a AÇÃO e o DESTINO.

7) O que é a Apache Software Foundation e por que faz diferença um projeto como o Spark ser mantido por ela, e não por uma única empresa?

---

Anote as dúvidas pra gente discutir na próxima aula. Nos exercícios de classificar lote x tempo real, o que vale ponto é a justificativa, não só a palavra.
