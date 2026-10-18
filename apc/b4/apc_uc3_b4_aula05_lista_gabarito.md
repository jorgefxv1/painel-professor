# Gabarito — UC III · Aula 05 · Testes de Usabilidade e Acessibilidade

> Material do professor. Lista do aluno: `apc_uc3_b4_aula05_lista.html`.
> Turmas 2A e 2B · 4º bimestre 2026 · Aula teórica em sala.

## Parte 1 — Usabilidade ou acessibilidade?

| # | Situação | Tipo | Justificativa | Sugestão de correção | Erro mais provável |
|---|---|---|---|---|---|
| 1 | Botão de confirmar muda de posição a cada tela | **U** | Qualquer pessoa, com ou sem limitação, erra por falta de padrão — é problema de **consistência de interface**, não de uma condição específica | Fixar o botão "Confirmar" sempre na mesma posição e com o mesmo estilo em todas as telas | Marcar A, confundindo "causa erro" com "é sobre deficiência" — o problema aqui afeta todo mundo igual |
| 2 | Formulário só funciona com mouse, não aceita Tab | **A** | Afeta diretamente quem tem deficiência motora e não consegue usar mouse, e também quem usa leitor de tela, que navega por teclado | Garantir que todos os campos sejam alcançáveis e preenchíveis via teclado (ordem de tabulação lógica) | Marcar U — é tentador, porque "trava a tarefa", mas o critério certo é **quem** fica impedido: aqui é um grupo específico de usuários, não a maioria |
| 3 | Compra simples exige 9 passos em vez de 3 | **U** | É ineficiência pura: qualquer pessoa gasta tempo e paciência a mais, sem relação com nenhuma condição específica | Reduzir o fluxo de compra para o menor número de passos que ainda seja seguro (ex. 3 a 4 etapas) | Marcar A por ser "difícil de usar" — difícil para todo mundo é usabilidade; difícil só para um grupo é acessibilidade |
| 4 | Texto cinza claro sobre fundo branco, ilegível ao sol | **A** | É um problema de **contraste de cor**, item explícito do checklist de acessibilidade — afeta baixa visão, daltonismo e qualquer pessoa sob luz forte | Aumentar o contraste entre texto e fundo (ex. cinza escuro ou preto sobre fundo claro) | Marcar U por "incomodar todo mundo" — baixo contraste incomoda todos, mas **impede** quem tem baixa visão; é esse segundo efeito que classifica como acessibilidade |
| 5 | Ícone de "excluir conta" parecido com o de "favoritar" | **U** | É confusão de **affordance/clareza visual** — o ícone não comunica a ação, e isso prejudica qualquer usuário igualmente | Usar ícones visualmente distintos para ações tão diferentes, e pedir confirmação antes de excluir a conta | Marcar A — de novo, o critério é "quem fica impedido". Aqui todos ficam igualmente confusos, não é um grupo específico |
| 6 | Vídeo tutorial sem legenda nem transcrição | **A** | Item explícito do checklist — impede diretamente pessoas surdas ou com deficiência auditiva de acompanhar o conteúdo | Adicionar legenda (ou transcrição em texto) ao vídeo | Marcar U por "o vídeo não explica bem" — se o problema fosse a explicação em si (confusa para todos), seria U; a ausência de legenda é especificamente de acessibilidade |

**Padrão a puxar na correção:** a pergunta que resolve toda a tabela é **"isso impede a maioria das
pessoas, ou impede especificamente quem tem alguma limitação (visual, motora, auditiva)?"** Se a resposta
for "a maioria", é usabilidade; se for "um grupo específico fica de fora mesmo que funcione para os
outros", é acessibilidade. As situações 1, 3 e 5 são usabilidade; as situações 2, 4 e 6 são acessibilidade
— 3 de cada, de propósito, para a correção não virar "chute 50/50 e acerte por sorte".

## Parte 2 — Entendendo os conceitos

**a)** Pesquisa de opinião pergunta como a pessoa **se sente** sobre o produto ("você gostou?", "achou
fácil?") — é subjetivo e pode não corresponder ao que realmente aconteceu. Teste de usabilidade
**observa** a pessoa tentando cumprir uma tarefa real, sem perguntar nada durante o processo, e registra
um fato: ela conseguiu terminar ou não, quanto tempo levou, quantos erros cometeu. É possível uma pessoa
dizer "gostei muito" e, ao mesmo tempo, não ter conseguido completar a tarefa sozinha — por isso o teste
de usabilidade vale mais do que a opinião para saber se o sistema funciona de fato.

**b)** A Lei Brasileira de Inclusão (Lei nº 13.146/2015, também chamada de Estatuto da Pessoa com
Deficiência) garante o direito das pessoas com deficiência ao acesso à informação e à comunicação,
incluindo ambientes digitais. Isso significa que tornar um site ou aplicativo acessível não é um
"extra" ou um diferencial de design — é um direito previsto em lei, e sites e serviços (especialmente
públicos) podem ser cobrados judicialmente por não cumprir isso.

**c)** Qualquer 3 destes: contraste de cor adequado; tamanho de fonte ajustável; texto alternativo em
imagens; navegação pelo teclado; legenda em vídeo.

**d)** Resposta esperada, citando pelo menos um destes pontos: (1) deficiência nem sempre é visível ou
declarada — pode haver colegas com baixa visão, daltonismo ou dificuldade motora que a turma não
conhece; (2) acessibilidade também ajuda quem não tem deficiência permanente, mas está numa situação
temporária (braço quebrado, tela rachada, sol forte, ambiente ruidoso sem fone); (3) é direito garantido
por lei (LBI), não depende de "ter alguém que precise" na sala para ser obrigatório; (4) quem constrói
sistema de dados vai lidar, no mercado de trabalho, com usuários que a turma nunca vai conhecer
pessoalmente — não dá para supor que "ninguém precisa".
