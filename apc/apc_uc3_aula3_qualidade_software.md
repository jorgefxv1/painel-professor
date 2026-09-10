APC — UC III: QUALIDADE E TESTES DE SISTEMAS
Aula 3 — Qualidade de Software e a ISO/IEC 25010

---

COMO USAR ESTE MATERIAL

Este é o Capítulo 2 da disciplina. No Capítulo 1 você viu a Engenharia de Requisitos — como descobrir e documentar o que um sistema precisa fazer. Agora a pergunta muda: depois que o sistema foi construído, como a gente sabe se ele ficou bom?

Leia com atenção, no seu ritmo. O conteúdo está dividido em duas partes: primeiro o conceito de qualidade de software em si, depois a norma que serve pra medir essa qualidade de forma organizada, a ISO/IEC 25010. Os exercícios estão no fim.

---

PRA COMEÇAR: UMA PERGUNTA

Um site pode ser bonito, moderno, com cores bem escolhidas — e mesmo assim ser um software ruim?

Pode. E acontece o tempo todo. Um app pode ter a tela mais bonita do mundo e travar toda hora, demorar 10 segundos pra abrir, perder os seus dados, ou ser tão confuso que ninguém entende onde clicar. Aparência é só uma fatia pequena do que torna um software "bom".

O problema é que "bom" é uma palavra vaga. Se eu peço pra três pessoas avaliarem se um app é bom, cada uma vai olhar uma coisa diferente. Qualidade de software é justamente o esforço de transformar esse "achismo" em algo que dá pra descrever, medir e cobrar.

---

O QUE É QUALIDADE DE SOFTWARE

Qualidade de software é o grau em que um sistema atende aos requisitos combinados e às expectativas de quem o usa, em condições reais de uso.

Repara que tem duas partes nessa definição:

Requisitos combinados — aquilo que foi formalmente pedido e documentado lá na Engenharia de Requisitos. Se o requisito dizia "responder qualquer busca em até 2 segundos" e o sistema responde em 8, ele tem um problema de qualidade, mesmo que "funcione".

Expectativas de quem usa — coisas que nem sempre estão escritas, mas que qualquer usuário espera: que o sistema não perca dados, que não seja invadido facilmente, que dê pra usar sem precisar de um manual de 40 páginas.

Qualidade não é um "extra" que se coloca no fim do projeto. Ela é construída (ou destruída) em cada etapa: no requisito mal levantado, no código mal escrito, no teste que não foi feito. Por isso se diz que qualidade não se testa no fim — se constrói durante.

---

TRÊS OLHARES SOBRE A MESMA QUALIDADE

A mesma qualidade pode ser observada de três pontos de vista diferentes. Isso é importante porque cada um é medido de um jeito e por pessoas diferentes.

Qualidade interna — são os atributos da estrutura do software, do código em si: se está organizado, legível, dividido em partes bem separadas, sem repetição desnecessária. Quem enxerga isso é a equipe de desenvolvimento. Um usuário nunca vê o código, mas sofre as consequências dele: código bagunçado gera bug e trava a evolução do sistema.

Qualidade externa — é o comportamento do software quando ele está rodando, visto de fora: quantos defeitos aparecem, quão rápido responde, se cai ou não cai. É medida testando o produto pronto, sem precisar olhar o código.

Qualidade em uso — é a experiência real de uma pessoa tentando cumprir um objetivo com o software, num contexto de verdade. Exemplo: "um professor consegue lançar as notas de uma turma inteira em menos de 5 minutos, sem errar, usando o computador antigo do laboratório?" Isso só se mede observando gente real usando.

Uma forma de guardar isso:

  QUALIDADE INTERNA  ->  como o software é feito por dentro (código)
  QUALIDADE EXTERNA  ->  como o software se comporta rodando (produto)
  QUALIDADE EM USO   ->  como é a vida de quem usa pra valer (pessoa)

As três estão ligadas em cadeia: código ruim (interna fraca) tende a gerar mais defeitos e lentidão (externa fraca), o que atrapalha a pessoa a fazer o que precisa (em uso fraca).

---

VOCABULÁRIO: ENGANO, DEFEITO E FALHA

No dia a dia todo mundo fala "bug" pra qualquer coisa que dá errado. Na área de qualidade, esses três termos têm significados distintos, e a prova vai cobrar essa diferença.

Engano (ou erro) — é a ação humana equivocada. O programador entendeu errado o requisito, esqueceu um caso, digitou o sinal trocado. O engano acontece na cabeça e nas mãos de uma pessoa.

Defeito (o "bug") — é a imperfeição que ficou registrada no código por causa do engano. Ele está lá, parado, mesmo que ninguém tenha percebido ainda. Um defeito pode ficar meses "dormindo" num trecho de código que quase nunca é executado.

Falha — é o comportamento errado que aparece quando aquele trecho defeituoso é executado. É o momento em que o usuário vê a tela travar, a conta dar errado, o app fechar sozinho.

A cadeia é sempre essa:

  ENGANO (pessoa erra)  ->  DEFEITO (fica no código)  ->  FALHA (aparece rodando)

Nem todo defeito vira falha (pode estar num trecho que nunca roda), mas toda falha veio de um defeito, que veio de um engano.

---

POR QUE QUALIDADE IMPORTA: O CUSTO DE ARRUMAR DEPOIS

Existe uma regra bem conhecida na engenharia de software: quanto mais tarde um defeito é descoberto, mais caro é corrigir. E a diferença não é pequena — é de escala.

  Defeito achado na fase de REQUISITO   ->  custo baixo (é só reescrever uma frase)
  Defeito achado na fase de PROJETO     ->  custo médio (redesenhar uma parte)
  Defeito achado na fase de CÓDIGO      ->  custo maior (reprogramar e retestar)
  Defeito achado já em PRODUÇÃO         ->  custo alto (usuário afetado, correção
                                              de emergência, perda de confiança)

Um requisito mal entendido que passa despercebido vira um projeto errado, que vira um código errado, que só é descoberto quando o cliente reclama. Investir em qualidade cedo (bom levantamento de requisitos, revisão de código, testes) é quase sempre mais barato do que apagar incêndio depois.

---

FLUXOGRAMA: ONDE A QUALIDADE ENTRA NO CICLO

Um erro comum é achar que "cuidar da qualidade" é só a etapa de teste, lá perto do fim. Na verdade, a qualidade é trabalhada em todas as etapas:

  [ REQUISITOS ]
   requisito claro, validado com o cliente
   (evita construir a coisa errada)
        |
        v
  [ PROJETO / DESIGN ]
   arquitetura pensada, decisões documentadas
   (evita uma estrutura que trava a evolução)
        |
        v
  [ CODIFICAÇÃO ]
   padrão de código, revisão entre colegas
   (evita defeito entrar no sistema)
        |
        v
  [ TESTES ]
   testar função, desempenho, segurança, uso
   (encontra o defeito antes do usuário)
        |
        v
  [ PRODUÇÃO / USO ]
   monitorar, ouvir o usuário, medir
        |
        └──── problema encontrado em uso ────> volta pros REQUISITOS
                                                (vira melhoria do próximo ciclo)

Assim como na Engenharia de Requisitos, isso é um ciclo, não uma linha reta. O que se aprende com o sistema rodando alimenta a próxima versão.

---

PARTE 2 — A NORMA ISO/IEC 25010

O QUE É UMA NORMA ISO

ISO é a Organização Internacional de Normalização (do inglês *International Organization for Standardization*), com sede em Genebra, na Suíça. Ela reúne representantes de mais de 160 países pra criar normas técnicas — documentos que definem, de forma padronizada, como fazer ou medir alguma coisa.

Existe norma ISO pra quase tudo: tamanho de folha de papel (o A4 é uma norma ISO), qualidade de processos de fábrica, segurança de brinquedo, e também qualidade de software.

A sigla completa da nossa norma é ISO/IEC 25010. O "IEC" é a Comissão Eletrotécnica Internacional, que entra junto com a ISO em tudo que envolve tecnologia. O número 25010 identifica o documento dentro de uma família maior, a ISO/IEC 25000, conhecida como SQuaRE (requisitos e avaliação de qualidade de produtos de software).

O papel da 25010 é simples de enunciar: ela define um modelo de qualidade — uma lista organizada de características que todo software pode ter, servindo como um checklist comum pra qualquer equipe avaliar qualquer sistema, sem depender de opinião pessoal.

---

AS 8 CARACTERÍSTICAS DE QUALIDADE

A versão da ISO/IEC 25010 que vamos estudar organiza a qualidade do produto de software em 8 características. Cada uma se desdobra em subcaracterísticas mais específicas. Abaixo, cada característica com uma pergunta-guia, as subcaracterísticas principais e um exemplo de app que atende bem ou mal.

1. ADEQUAÇÃO FUNCIONAL
   Pergunta-guia: o software faz o que promete fazer, de forma correta e completa?
   Subcaracterísticas: completude funcional, correção funcional, pertinência funcional.
   Atende bem: uma calculadora que dá o resultado certo em todas as operações que oferece.
   Atende mal: um app de banco que diz que fez a transferência, mas o dinheiro não sai da conta.

2. EFICIÊNCIA DE DESEMPENHO
   Pergunta-guia: o software responde rápido e sem gastar recurso à toa?
   Subcaracterísticas: comportamento temporal (tempo de resposta), utilização de recursos (memória, processador, bateria, dados), capacidade (aguenta muitos usuários ao mesmo tempo).
   Atende bem: um app de mensagens que abre na hora e quase não gasta bateria.
   Atende mal: um jogo simples que esquenta o celular e trava a cada 2 minutos.

3. COMPATIBILIDADE
   Pergunta-guia: o software convive e troca informação com outros sistemas?
   Subcaracterísticas: coexistência (rodar junto de outros apps sem atrapalhar), interoperabilidade (trocar dados com outro sistema).
   Atende bem: um app de planilha que abre e salva arquivos que o Excel também lê.
   Atende mal: um sistema da escola que só exporta num formato que nenhum outro programa consegue abrir.

4. USABILIDADE
   Pergunta-guia: é fácil de aprender e de usar sem sofrimento?
   Subcaracterísticas: fácil de reconhecer se serve pra você, fácil de aprender, fácil de operar, proteção contra erro do usuário, interface agradável, acessibilidade (uso por pessoas com deficiência).
   Atende bem: um app de transporte onde qualquer pessoa pede uma corrida de primeira, sem tutorial.
   Atende mal: um site do governo com 15 campos, siglas por todo lado e um botão de "enviar" escondido no rodapé.

5. CONFIABILIDADE
   Pergunta-guia: dá pra confiar que ele vai funcionar quando você precisar?
   Subcaracterísticas: maturidade (poucos defeitos no uso normal), disponibilidade (fica no ar quando é preciso), tolerância a falhas (continua funcionando mesmo com algo dando errado), recuperabilidade (volta ao normal e recupera os dados depois de uma queda).
   Atende bem: um app de nuvem que, se cair a internet no meio do upload, retoma de onde parou.
   Atende mal: um editor de texto que, se travar, perde tudo que você não salvou nos últimos 40 minutos.

6. SEGURANÇA
   Pergunta-guia: ele protege os dados e só deixa cada um fazer o que tem permissão?
   Subcaracterísticas: confidencialidade (só quem pode vê os dados), integridade (ninguém altera dado sem autorização), não-repúdio (dá pra provar quem fez cada ação), responsabilização (as ações ficam registradas), autenticidade (é possível confirmar que a pessoa é quem diz ser).
   Atende bem: um app que exige senha forte, avisa de login novo e guarda as senhas criptografadas.
   Atende mal: um site que guarda as senhas dos usuários em texto puro e vaza tudo num ataque simples.

7. MANUTENIBILIDADE
   Pergunta-guia: é fácil de corrigir, melhorar e adaptar depois de pronto?
   Subcaracterísticas: modularidade (partes bem separadas), reusabilidade (pedaços aproveitáveis em outro lugar), analisabilidade (fácil de achar a causa de um problema), modificabilidade (mudar sem quebrar o resto), testabilidade (fácil de testar).
   Atende bem: um sistema onde trocar a regra de cálculo do desconto mexe só num arquivo.
   Atende mal: um sistema onde qualquer mudança pequena quebra três telas que ninguém imaginava que estavam ligadas.

8. PORTABILIDADE
   Pergunta-guia: é fácil de levar pra outro ambiente (outro aparelho, outro sistema, outro servidor)?
   Subcaracterísticas: adaptabilidade (roda em ambientes diferentes), capacidade de instalação (instalar e desinstalar sem dor de cabeça), capacidade de substituição (pode substituir outro software que fazia o mesmo papel).
   Atende bem: um app que funciona igual no Android, no iPhone e no navegador.
   Atende mal: um programa que só roda numa versão específica e antiga do Windows e trava em qualquer outra.

---

A ANALOGIA DA CASA DE QUALIDADE

Pra não decorar solto, pensa num software como uma casa:

  Adequação funcional  ->  a casa tem os cômodos que foram pedidos e eles funcionam
                           (a torneira abre, a tomada tem energia)
  Confiabilidade       ->  o telhado não cai, a fiação não pega fogo, e se faltar
                           luz o disjuntor religa
  Segurança            ->  portas com fechadura, muro, ninguém entra sem chave
  Usabilidade          ->  o interruptor está onde a mão procura, a planta faz sentido
  Eficiência           ->  a casa não desperdiça água nem energia
  Compatibilidade      ->  encaixa na rede de água e de luz da rua, convive com os vizinhos
  Manutenibilidade     ->  dá pra trocar um cano sem quebrar a parede inteira
  Portabilidade        ->  o projeto pode ser construído em outro terreno sem refazer tudo

Uma casa bonita com fiação exposta e telhado furado não é uma boa casa. Um software com tela bonita e nota zero em confiabilidade e segurança não é um bom software.

---

BOX RÁPIDO: A REVISÃO DE 2023

A ISO/IEC 25010 foi atualizada em 2023. Duas mudanças que vale conhecer:

- O modelo passou de 8 para 9 características. A nova é Segurança física (em inglês, *safety*): ausência de risco inaceitável de dano a pessoas, ao negócio, à propriedade ou ao meio ambiente. Faz sentido pensando em software que controla carro, equipamento hospitalar ou máquina de fábrica — ali um defeito pode machucar alguém de verdade.
- Algumas subcaracterísticas foram renomeadas e reorganizadas (por exemplo, "usabilidade" aparece como "capacidade de interação").

Para esta disciplina e para a prova, o modelo de referência continua sendo o das 8 características. A revisão de 2023 é citada aqui só pra você saber que a norma evolui, como todo processo de qualidade.

---

FLUXOGRAMA: COMO USAR A 25010 PRA AVALIAR UM SOFTWARE

A norma não serve só pra classificar problema depois que ele aparece — ela serve pra planejar uma avaliação. O caminho é este:

  [ 1. ESCOLHER AS CARACTERÍSTICAS QUE IMPORTAM ]
   nem todo sistema precisa de nota alta em tudo; um jogo casual
   dá menos peso a segurança do que um app de banco
        |
        v
  [ 2. DEFINIR COMO MEDIR CADA UMA ]
   ex.: eficiência -> "tempo de resposta em segundos"
        usabilidade -> "quantos usuários concluem a tarefa sem ajuda"
        |
        v
  [ 3. MEDIR / TESTAR O SOFTWARE REAL ]
   coletar os números e as observações de uso
        |
        v
  [ 4. COMPARAR COM A META ]
   o resultado atende ao que foi combinado no requisito?
        |
        v
  [ 5. PRIORIZAR AS MELHORIAS ]
   atacar primeiro o que tem nota baixa numa característica crítica
        |
        └──── depois de melhorar ────> volta pro passo 3 e mede de novo

---

EXERCÍCIOS

Responda no documento indicado, com suas próprias palavras.

1) Explique, sem copiar do material, a diferença entre qualidade interna, qualidade externa e qualidade em uso. Dê um exemplo de cada, usando um app ou site que você conhece.

2) Classifique cada situação abaixo como ENGANO, DEFEITO ou FALHA, e justifique em uma linha:
   a) O programador digitou "maior que" onde deveria ser "maior ou igual".
   b) Num trecho do código, o desconto é calculado errado quando o valor da compra é exatamente R$ 100,00.
   c) A cliente comprou R$ 100,00, o sistema não aplicou o desconto e ela reclamou no balcão.
   d) A desenvolvedora entendeu que o frete grátis valia a partir de R$ 100, mas o combinado era a partir de R$ 150.

3) Um aluno reclamou do app de notas da escola com estas frases. Associe cada uma à característica da ISO/IEC 25010 que está sendo mal atendida:
   a) "Toda vez que a internet oscila, ele fecha e perde o que eu tinha digitado."
   b) "Demora quase um minuto pra abrir a lista de uma turma."
   c) "Não tem como aumentar a fonte, minha avó não consegue ler."
   d) "Consegui ver as notas de outra turma que não é a minha só trocando o número no endereço."
   e) "No computador do laboratório trava, só funciona no meu celular."

4) SORTEIO (feito em aula): sua equipe recebeu uma das 8 características. Escreva o nome dela e:
   a) um exemplo de app do seu celular que atende BEM essa característica, explicando por quê;
   b) um exemplo de app (ou situação) que atende MAL essa mesma característica, explicando por quê.

5) Escolha um app que você usa bastante e monte uma mini-avaliação no modelo da 25010: para cada uma das 8 características, dê uma nota de 1 a 5 e escreva uma frase justificando a nota. No fim, aponte qual característica você melhoraria primeiro e por quê.

6) Explique com suas palavras por que a frase "qualidade não se testa no fim, se constrói durante" faz sentido. Use o fluxograma "onde a qualidade entra no ciclo" como apoio.

---

Anote as dúvidas pra gente discutir na próxima aula. Capricha nas justificativas — nesse capítulo, o "porquê" vale mais que a resposta curta.
