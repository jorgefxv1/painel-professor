# Gabarito Comentado — Prova Mensal UC I

> Material do professor. Prova do aluno: `apc_uc1_b4_aula04_prova.html`.
> Cobre Raspagem de Dados da Web (Aulas 1-2) e Coleta em Massa / Limites da Raspagem (Aula 3).
> Turmas 2A e 2B · 4º bimestre 2026 · 10 questões, 1,0 ponto cada.

---

### 1. O que é raspagem de dados?

**Resposta: B.**

- A — errada: é exatamente o oposto do que a raspagem evita (digitar manualmente).
- C — errada: raspagem não é um erro, é uma técnica deliberada.
- D — errada: funções de planilha (IMPORTHTML/IMPORTXML) também fazem raspagem, sem programação.

---

### 2. Verdadeiro ou Falso

1. **F** — o robots.txt é um pedido de boa conduta, não um bloqueio técnico.
2. **V** — é comum um bloco `User-agent: *` (regra geral) e um bloco separado `User-agent: Googlebot`
   (regra específica, que pode liberar algo que a regra geral proíbe).
3. **F** — muitos termos de uso tratam de coleta automatizada, geralmente dentro de cláusulas sobre uso
   indevido ou acesso por robôs/bots.
4. **V** — dado público pode ter uso restrito pela LGPD (dado pessoal) ou pelos termos de serviço da
   plataforma, independente de estar visível.

---

### 3. Dá para raspar?

| # | Situação | Nível | Justificativa |
|---|---|---|---|
| 1 | Tabela de medalhas numa página da Wikipédia | **RS** | Tabela pública, em HTML, sem bloqueio — caso típico de IMPORTHTML |
| 2 | Localização em tempo real de usuários, sem autorização da empresa | **NR** | Dado pessoal e sensível (localização), coletado sem consentimento — viola a LGPD independente da dificuldade técnica |

*Erro mais provável:* marcar a situação 2 como FA ("é difícil, mas dá tecnicamente"). O ponto da
questão não é a dificuldade — é que a coleta não deveria ocorrer.

---

### 4. Por que o robots.txt não é um cadeado?

**Resposta: B.**

- A — errada: robots.txt é um padrão usado por sites do mundo todo, não só do Brasil.
- C — errada: robots.txt é lido principalmente por programas (robôs/crawlers); humanos raramente o
  consultam.
- D — errada: robots.txt trata do acesso de robôs, não de pessoas.

---

### 5. Complete as lacunas

a) **IMPORTHTML** (aceitar também IMPORTXML, já que serve para tabela via XPath)
b) **robots**

---

### 6. Ligue o termo à definição

**1 = C** (Raspagem de dados → extração automática) · **2 = B** (robots.txt → arquivo com pastas que
não devem ser visitadas) · **3 = D** (Termos de uso → contrato da plataforma) · **4 = A** (LGPD → lei
de dados pessoais)

---

### 7. Coloque em ordem

1. Escolher uma página com tabela pública e verificar se é raspagem simples
2. Usar IMPORTHTML ou IMPORTXML e testar o índice da tabela
3. Limpar o resultado (congelar valores, corrigir cabeçalho e tipos)
4. Registrar a URL de origem e a data da coleta

---

### 8. Por que a raspagem é frágil?

A raspagem depende da **posição do dado dentro da estrutura HTML** da página. Quando o site muda de
layout — a tabela que era a 3ª vira a 4ª, uma coluna troca de lugar — a fórmula continua funcionando,
mas passa a trazer o dado errado (ou `#N/D`, se a tabela some do índice). Uma API sofre menos com isso
porque é um **contrato estável**: o site se compromete a manter o formato da resposta (os nomes dos
campos no JSON), então uma mudança no visual da página não afeta quem consome a API.

---

### 9. Estudo de caso

**Não é aceitável.** Justificativas possíveis (aceitar qualquer uma bem argumentada):

- **LGPD:** foto de rosto e nome completo são dados pessoais; usá-los para treinar reconhecimento
  facial é uma finalidade diferente da que os alunos autorizaram ao usar o mural (que era para
  identificação social, não para alimentar um sistema de IA).
- O fato de o mural ser "interno" não torna o dado livre para qualquer uso — o mesmo critério da Aula 3
  (dado acessível ≠ dado liberado para qualquer finalidade).

*Erro mais provável:* responder que é aceitável "porque é só para teste, sem fins comerciais" — a LGPD
não isenta coleta de dado pessoal sensível por ausência de fins comerciais; a finalidade não autorizada
já é o problema.

---

### 10. Suas próprias regras

Produção livre. Critério de correção: aceitar qualquer regra coerente com o conteúdo da Aula 3
(respeitar robots.txt, não coletar dado privado/sensível, declarar finalidade, citar fonte e data,
não sobrecarregar o servidor, ler os termos de uso antes de automatizar), desde que não repita
literalmente um exemplo já dado em outra questão da prova.

---

## Distribuição de pontos

10 questões × 1,0 ponto = **10,0**. Nas questões com múltiplos itens (2, 3, 5, 6, 10), considerar 0,5
quando o aluno acertar parte da questão.
