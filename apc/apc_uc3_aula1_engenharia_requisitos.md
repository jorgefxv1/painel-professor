APC — UC III: QUALIDADE E TESTES DE SISTEMAS
Aula 1 — Engenharia de Requisitos

---

ANTES DE COMEÇAR

Eu vou estar fora da escola com a equipe de robótica nesses dias, competindo. Como não vou estar em sala pra dar essa aula pessoalmente, montei esse material pra você seguir sozinho, no seu ritmo. Leia com atenção — esse é o Capítulo 1 da disciplina, a base de tudo que vem depois em Qualidade e Testes de Sistemas.

---

PRA COMEÇAR: UMA PERGUNTA

Você já usou algum aplicativo ou site que travava, que fazia alguma coisa estranha, ou que simplesmente não funcionava do jeito que você esperava?

Isso quase nunca é só "erro de programação". Na maioria das vezes, o problema nasceu muito antes de qualquer linha de código ser escrita — nasceu porque ninguém parou pra entender direito o que o sistema precisava fazer, pra quem, e em quais condições. Essa etapa, que vem antes de tudo, chama-se Engenharia de Requisitos.

---

O QUE É ENGENHARIA DE REQUISITOS

Vamos separar as duas palavras.

Engenharia é a área que aplica conhecimento técnico e método pra resolver problemas de forma estruturada — não é "tentativa e erro", é processo com etapas.

Requisito é qualquer condição ou capacidade que um sistema precisa ter pra atender uma necessidade real de quem vai usá-lo. É, basicamente, uma resposta pra pergunta: "o que esse sistema precisa fazer (ou não fazer) pra ser útil?"

Juntando as duas: Engenharia de Requisitos é o processo estruturado de descobrir, entender, documentar e gerenciar o que um sistema precisa fazer, antes de ele ser construído. É a etapa que garante que todo mundo — quem pede o sistema e quem constrói — está falando da mesma coisa.

Nenhum sistema sério deveria ser construído sem passar por isso. Pular essa etapa é como construir uma casa sem planta: pode até sair alguma coisa em pé, mas dificilmente vai ser o que o cliente queria.

---

TIPOS DE REQUISITO

Antes de entrar nas etapas, um ponto importante que você vai precisar pro exercício: nem todo requisito é do mesmo tipo.

Requisito funcional — descreve o que o sistema DEVE FAZER. Uma ação, uma funcionalidade concreta. Exemplo: "o sistema deve permitir que o aluno faça login com matrícula e senha."

Requisito não funcional — descreve COMO o sistema deve se comportar, uma qualidade esperada, não uma ação específica. Exemplo: "o sistema deve responder a qualquer busca em no máximo 2 segundos."

Restrição — descreve um limite externo que o projeto precisa respeitar, muitas vezes fora do controle de quem desenvolve. Exemplo: "o sistema deve ser compatível com os computadores já existentes no laboratório da escola, que rodam Windows 10."

---

AS 5 ETAPAS DA ENGENHARIA DE REQUISITOS

1. Elicitação — é a etapa de descoberta. Conversar com quem vai usar o sistema (cliente, usuário final) pra entender o que ele realmente precisa. Aqui é onde se faz entrevista, observação, questionário.

2. Análise — depois de coletar as informações soltas da elicitação, é hora de organizar, identificar contradições, eliminar ambiguidades e entender as prioridades reais.

3. Especificação — é transformar tudo isso em um documento formal, claro e detalhado, que qualquer pessoa da equipe consiga ler e entender exatamente o que precisa ser construído.

4. Validação — é conferir com o cliente/usuário se o que foi especificado realmente representa o que ele precisa, ANTES de começar a construir. Evita retrabalho caro lá na frente.

5. Gerenciamento — requisito muda. Ao longo do projeto, novas necessidades aparecem ou prioridades mudam, e essa etapa cuida de registrar e controlar essas mudanças de forma organizada, sem bagunçar o que já foi combinado.

Repara que não é uma linha reta que termina no fim: o Gerenciamento pode levar de volta pra Elicitação, se surgir uma mudança grande. É um ciclo.

---

FLUXOGRAMA DAS 5 ETAPAS

[ 1. ELICITAÇÃO ]
 (descobrir o que o cliente precisa)
        |
        v
[ 2. ANÁLISE ]
 (organizar, tirar ambiguidade, priorizar)
        |
        v
[ 3. ESPECIFICAÇÃO ]
 (documentar formalmente o requisito)
        |
        v
[ 4. VALIDAÇÃO ]
 (confirmar com o cliente antes de construir)
        |
        v
[ 5. GERENCIAMENTO ]
 (controlar mudanças ao longo do projeto)
        |
        └──── se surgir mudança relevante ────> volta pra [ 1. ELICITAÇÃO ]

Esse retorno da seta no final é o ponto mais importante do fluxo: Engenharia de Requisitos não é uma tarefa que se faz uma vez só no começo do projeto e pronto — é um processo vivo, que se repete conforme o sistema evolui.

---

EXERCÍCIOS

Responda no documento indicado, com suas próprias palavras.

1) Com suas palavras (sem copiar a definição do material), explique por que um sistema não deveria ser construído sem passar pela Engenharia de Requisitos. Se possível, cite um exemplo de app ou site que você usa que parece ter "pulado" essa etapa.

2) Cenário: a escola quer criar um sistema de chamada online, pra substituir a chamada em papel. Classifique cada frase abaixo como Requisito Funcional, Requisito Não Funcional ou Restrição, e justifique em uma linha por que:

   a) "O sistema deve permitir que o professor marque presença ou falta de cada aluno."
   b) "O sistema deve funcionar mesmo com a internet lenta do laboratório da escola."
   c) "O sistema deve gerar automaticamente um relatório de frequência mensal por aluno."
   d) "O sistema precisa rodar nos computadores antigos que a escola já tem, sem exigir upgrade."
   e) "O sistema deve carregar a lista de alunos em até 3 segundos."

3) Ainda sobre o sistema de chamada online: imagine que você é o responsável pela etapa de Elicitação. Escreva 3 perguntas que você faria a um professor pra descobrir o que ele realmente precisa desse sistema.

4) Desenhe (ou escreva em texto, como o fluxograma do material) as 5 etapas da Engenharia de Requisitos aplicadas a um sistema fictício de sua escolha (pode ser um app de empréstimo de livros da biblioteca, um sistema de agendamento do laboratório, ou outra ideia sua). Para cada etapa, escreva uma frase curta descrevendo o que aconteceria naquele sistema específico.

5) Por que a etapa de Gerenciamento pode levar de volta pra Elicitação? Dê um exemplo de uma mudança que poderia acontecer no meio de um projeto e forçar essa volta.

---

Qualquer dúvida, anote pra perguntarmos quando eu voltar. Capricha!
