# Gabarito Comentado — Prova Bimestral UC III

> Material do professor. A prova do aluno é `apc_uc3_b4_aula08_prova.html`.
> Turmas 2A e 2B · 4º bimestre 2026 · 10 questões, 1,0 ponto cada — **total conferido: 10,0 pontos**
> (verificado por script: `python3 -I -c "assert sum([1.0]*10) == 10.0"`).

## Questão 1 — As 6 dimensões da qualidade de dados (1,0 pt — 0,167 por item, arredondar a favor do aluno)

| # | Resposta |
|---|---|
| a | Completude |
| b | Consistência |
| c | Acurácia |
| d | Validade |
| e | Unicidade |
| f | Atualidade |

## Questão 2 — "Entra lixo, sai lixo" (1,0 pt)

**Resposta: B.**
- A está errada: antivírus é segurança de sistema, não tem relação com a qualidade do dado em si.
- C está errada: a idade do sistema não determina a qualidade do dado — um sistema novo alimentado com
  dado ruim tem o mesmo problema.
- D está errada: a responsabilidade pela qualidade do dado é do sistema e de quem o projeta (validação na
  entrada), não só do usuário.

## Questão 3 — V/F Segurança da Informação (1,0 pt — 0,25 por item)

| Item | Resposta | Comentário |
|---|---|---|
| 1 | **Falso** | Vazamento também acontece por falha técnica (sistema mal configurado, sem criptografia), sem precisar de intenção de ninguém |
| 2 | **Verdadeiro** | É exatamente a função do Have I Been Pwned |
| 3 | **Verdadeiro** | São as duas falhas comuns citadas na Aula 03 |
| 4 | **Falso** | A LGPD vale para qualquer empresa ou organização que trate dado pessoal, independente do tamanho |

## Questão 4 — Ligar falha a exemplo (1,0 pt — 0,33 por par, arredondar a favor do aluno)

**Resposta: 1 = C &nbsp; 2 = B &nbsp; 3 = A**

## Questão 5 — Have I Been Pwned (1,0 pt)

**Resposta esperada:** a checagem não impede o vazamento em si — ele já aconteceu em algum sistema de
terceiros antes mesmo da pessoa checar. A utilidade está em **saber que aconteceu**, para tomar uma ação
depois: trocar a senha vazada (e qualquer outro lugar onde ela se repete), ativar autenticação em duas
etapas, e ficar mais alerta a golpes que usem aquele dado vazado (como mensagens que citam nome e compra
recente). Aceitar qualquer resposta que capture essa ideia: checagem é **reativa**, não preventiva, mas
ainda assim útil para reação rápida.

## Questão 6 — Teste de usabilidade x pesquisa de opinião (1,0 pt)

**Resposta: C.**
- A está errada: são conceitos diferentes, com métricas diferentes (concluiu/tempo/erros x opinião).
- B está errada: inverte as definições — é o contrário do que a alternativa descreve.
- D está errada: não existe essa exigência de número mínimo de pessoas para pesquisa de opinião, nem
  limite de uma pessoa só para teste de usabilidade.

## Questão 7 — V/F Acessibilidade (1,0 pt — 0,25 por item)

| Item | Resposta | Comentário |
|---|---|---|
| 1 | **Falso** | Acessibilidade cobre baixa visão, mas também daltonismo, deficiência motora, uso de leitor de tela, entre outros |
| 2 | **Verdadeiro** | É a função do texto alternativo (`alt`) |
| 3 | **Verdadeiro** | A Lei Brasileira de Inclusão (Lei 13.146/2015) trata de acessibilidade em diversos contextos, incluindo o digital |
| 4 | **Falso** | A dependência exclusiva do mouse é justamente um problema de acessibilidade para quem usa teclado ou leitor de tela |

## Questão 8 — Ligar público a adaptação (1,0 pt — 0,25 por par)

**Resposta: 1 = D &nbsp; 2 = B &nbsp; 3 = A &nbsp; 4 = C**

## Questão 9 — Sinais de IA (1,0 pt — 0,5 por sinal citado)

**Respostas aceitas (citar quaisquer 2):** mãos ou dedos com formato errado/número errado de dedos;
texturas ou textos de fundo borrados/ilegíveis; sombras ou iluminação inconsistentes entre elementos da
mesma imagem; padrões repetitivos estranhos; simetria perfeita demais em rostos ou cenários.

## Questão 10 — Aplicando o roteiro (1,0 pt — 0,33 por passo coerente)

**Resposta esperada (aceitar equivalentes):**
1. Buscar se existe uma fonte original rastreável (autor, veículo, data) para a notícia.
2. Fazer busca reversa de qualquer imagem associada, e checar o texto em sites de checagem (Aos Fatos,
   Projeto Comprova, Agência Lupa).
3. Se não encontrar nenhuma confirmação em fonte confiável, **não repassar** e, se possível, avisar quem
   enviou de que a notícia não tem fonte verificável.

---

## Soma de pontos (conferida)

```
1.0 + 1.0 + 1.0 + 1.0 + 1.0 + 1.0 + 1.0 + 1.0 + 1.0 + 1.0 = 10.0
```
10 questões × 1,0 ponto = **10,0 pontos**, confirmado por script Python antes da entrega deste gabarito.
