# Gabarito — UC II · Aula 01 · Data Lake, Data Warehouse e Nuvem

> Material do professor. Lista do aluno: `apc_uc2_b4_aula01_lista.html`.
> Turmas 2A e 2B · 4º bimestre 2026 · Aula teórica em sala.

## Parte 1 — Onde guardar

| # | Situação | Onde | Justificativa | Erro mais provável |
|---|---|---|---|---|
| 1 | Histórico de cliques, sem saber o que analisar | **DL** | Dado bruto, volume alto, uso futuro indefinido — exatamente o caso do data lake | Dizer DW. DW exige saber **antes** que pergunta o dado responde |
| 2 | Venda no caixa, no momento em que acontece | **BR** | Operação do dia a dia: precisa gravar rápido, um registro por vez, com garantia | Dizer DL por ser "muito dado". O volume não manda aqui; a **operação** manda |
| 3 | Relatório mensal da diretoria | **DW** | Dado já tratado, agregado, respondendo pergunta de negócio conhecida e repetida | Dizer BR. Rodar relatório pesado no banco de produção derruba o sistema |
| 4 | 3 anos de vídeo bruto por exigência legal | **DL** | Formato não estruturado, volume enorme, acesso raro — precisa ser armazenamento barato | Dizer DW. DW não guarda vídeo bruto |
| 5 | Saldo atual da conta no app | **BR** | Consulta pontual, precisa do valor exato **agora** | Dizer DW. DW normalmente trabalha com dado do dia anterior |
| 6 | Cruzar vendas + estoque + clima | **DW** | Análise que combina fontes já tratadas para responder uma pergunta de negócio | Dizer DL. O dado do lake precisaria ser tratado antes; o cruzamento mora no warehouse |
| 7 | Áudios que talvez treinem uma IA | **DL** | "Talvez" é a palavra-chave: dado bruto guardado para uso futuro incerto | Dizer BR. Banco relacional não é lugar de áudio |
| 8 | Cliente corrigiu o endereço agora | **BR** | Escrita imediata na operação do sistema | — |

**Padrão a puxar na correção:** BR = *agora, um registro*. DW = *pergunta conhecida, dado tratado*.
DL = *não sei ainda, guarda barato*.

## Parte 2 — Nuvem

**a)** Não precisa comprar servidor. Na nuvem se aluga capacidade de computação e armazenamento de um
provedor; a escola paga uma mensalidade conforme o uso em vez de gastar de uma vez com máquina, instalação,
energia, refrigeração e manutenção. Para 800 alunos o custo é baixo, e se a escola dobrar de tamanho a
capacidade aumenta sem trocar equipamento.

**b)** Significa que a cobrança acompanha o consumo real (armazenamento ocupado, processamento usado,
tempo ligado). Vantagem para quem começa: dá para testar um projeto gastando quase nada e só pagar mais
se ele crescer — não é preciso investir alto antes de saber se a ideia funciona.

**c)** Google Cloud, AWS (Amazon Web Services) e Microsoft Azure. Oferecem, em linhas gerais,
armazenamento, capacidade de processamento, banco de dados gerenciado e serviços de análise, todos
contratados pela internet e cobrados pelo uso.

**d)** É o **data swamp** ("pântano de dados"): data lake sem organização, catálogo ou documentação, onde
o dado existe mas ninguém encontra nem confia. A ligação com a UC III é direta — o dado pode estar
íntegro e ainda assim ser inútil se falhar em **completude de contexto** (não se sabe de onde veio nem o
que significa) e em **atualidade** (não se sabe se ainda vale). Volume não é qualidade.

## Fechamento sugerido (5 min)

Pergunte: *"tem situação aí que poderia ir para mais de um lugar?"* A resposta honesta é **sim** — a 6
poderia começar no lake e ser tratada para o warehouse. Boa deixa para apresentar o **lakehouse** como a
junção dos dois, e para a prática da Aula 02, que é exatamente transformar lake em warehouse.
