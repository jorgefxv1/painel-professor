# Roteiro de Laboratório — UC III · Aula 03 (Transversal)

**Vazamento de Dados e Segurança da Informação** · Aula prática no laboratório · Turmas 2A e 2B
**Formato:** duplas · **Duração:** 50 min · **Aplica:** Aulas 01-02 (qualidade de dados) → traz o risco de segurança

---

## Antes da aula (professor)

1. **Testar `haveibeenpwned.com` no dia**, com a internet da escola. É um site de segurança, pode ser
   bloqueado por filtro de conteúdo escolar — ter um plano B (ver abaixo).
2. **Plano B** se o site estiver bloqueado ou fora do ar: o professor projeta, antecipadamente, uma
   captura de tela de uma consulta já feita (buscar "have i been pwned screenshot" e escolher uma imagem
   de exemplo), e a turma discute o resultado projetado em vez de consultar o próprio e-mail.
3. Avisar que **ninguém digita a senha de verdade** em nenhum site durante a aula — o Have I Been Pwned
   só pede e-mail (ou, numa seção separada, senha, só para checar se ela é comum — essa segunda consulta
   é opcional e não deve ser feita em laboratório).
4. Separar 2-3 notícias de vazamento brasileiro recentes como pista, caso as duplas não encontrem nada
   em 10 minutos (ver "Pistas de pesquisa").

## Abertura (5 min)

Pergunta disparadora: *já receberam mensagem de um golpista que sabia o nome completo e alguma compra
recente da pessoa?* Recolher relatos rápidos. Conduzir à ideia: isso quase sempre começa com um
vazamento de dados de algum sistema mal protegido — o golpe não "descobre" a informação, ele **compra**
ou **encontra** uma base vazada.

## Etapa 1 — Seu e-mail já vazou? (10 min)

**Pergunta de investigação:** *Algum e-mail usado pela dupla já apareceu em um vazamento conhecido?
Em quantos vazamentos diferentes, e que tipo de dado foi exposto em cada um (senha, telefone, outro)?*

Em `haveibeenpwned.com`, cada aluno pode digitar o próprio e-mail (nunca o de terceiros sem autorização)
e ver a lista de vazamentos em que ele aparece. Quem preferir não digitar o e-mail pessoal usa um e-mail
fictício combinado com a dupla, ou observa o resultado do colega.

> Ponto de atenção: um resultado "não encontrado" **não significa 100% seguro** — significa que aquele
> e-mail não está nos vazamentos catalogados pelo site até hoje.

## Etapa 2 — Dois casos brasileiros (20 min)

**Pergunta de investigação:** *Para dois casos reais de vazamento de dados no Brasil: qual empresa ou
órgão foi afetado, o que vazou, e qual foi a resposta dada?*

Cada dupla pesquisa dois casos, usando os termos de busca abaixo como ponto de partida — e **confirma a
informação em pelo menos uma reportagem antes de registrar**, porque o próprio Jorge não teve acesso à
internet para verificar esses casos no momento em que este roteiro foi escrito (ver nota do professor).

Pistas de pesquisa (buscar a notícia mais atual e checar os fatos):
- "vazamento de dados CPF brasileiros 223 milhões" — caso amplamente noticiado em 2021, envolvendo uma
  base com dados pessoais de um grande número de brasileiros exposta na internet.
- "vazamento Facebook dados telefone Brasil" — caso de 2021 envolvendo dados de usuários do Facebook
  expostos em fórum de hackers.
- Qualquer vazamento mais recente, de livre escolha da dupla, buscando "vazamento de dados [ano atual]
  empresa brasileira".

Registro mínimo por caso: nome da empresa/órgão, o que vazou (quais tipos de dado), como foi descoberto
e o que a empresa declarou em resposta.

## Etapa 3 — Raio-X do caso escolhido (10 min)

**Pergunta de investigação:** *Qual falha de qualidade ou segurança (dentre as vistas: senha fraca,
dado sem criptografia, sistema desatualizado, falta de controle de acesso) permitiu o vazamento
escolhido, e o que a LGPD exige nessa situação?*

A dupla escolhe um dos dois casos da Etapa 2 e aprofunda: qual foi a falha técnica mais provável (a
reportagem às vezes não detalha — nesse caso, a dupla registra a hipótese mais provável e justifica) e
o que a LGPD obriga a empresa a fazer quando descobre um vazamento (comunicar os afetados e a ANPD —
Autoridade Nacional de Proteção de Dados — em prazo razoável, por exemplo).

## Fechamento — Guia de boas práticas (5 min)

Em duplas, preenchimento do modelo em branco (`apc_uc3_b4_aula03_modelo_guia_boaspraticas.html`) com 5
boas práticas de proteção de dados pessoais, baseadas no que a dupla aprendeu nas três etapas. Sugestão
de nós para guiar quem travar: senha forte e única por serviço → autenticação em duas etapas → cuidado
com o que se preenche em formulário desconhecido → verificar vazamento no Have I Been Pwned
periodicamente → desconfiar de mensagem que já vem com dado pessoal certo.

---

## Links de apoio (testar antes da aula — ver nota no topo)

- `haveibeenpwned.com`
- Busca sugerida: "vazamento de dados CPF brasileiros 223 milhões", "vazamento Facebook dados telefone
  Brasil"
- Portais de notícia e checagem de uso geral (G1, Agência Brasil, Olhar Digital)

## Critérios de avaliação

| Critério | Peso |
|---|---|
| Consulta ao Have I Been Pwned registrada (resultado próprio ou do colega) | 2 |
| Dois casos brasileiros com empresa, o que vazou e resposta dada | 4 |
| Raio-X com falha provável e exigência da LGPD | 2 |
| Guia de 5 boas práticas, coerente com a investigação | 2 |
