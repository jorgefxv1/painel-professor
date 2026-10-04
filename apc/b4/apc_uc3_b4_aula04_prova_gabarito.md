# Gabarito Comentado — Prova Mensal UC III

> Material do professor. Prova do aluno: `apc_uc3_b4_aula04_prova.html`.
> Cobre Qualidade de Dados (Aulas 1-2) e Vazamento de Dados / Segurança da Informação (Aula 3).
> Turmas 2A e 2B · 4º bimestre 2026 · 10 questões, 1,0 ponto cada.

---

### 1. Dimensões da qualidade

**Resposta: B.**

- A — errada: completude trata de informação faltando, não de atualização.
- C — errada: validade trata de respeitar o formato esperado (ex.: e-mail com "@"), não de caixa alta/baixa.
- D — errada: acurácia mede se o dado bate com a realidade, não o tamanho do arquivo.

---

### 2. Qual dimensão foi violada?

| Registro | Dimensão violada |
|---|---|
| Cliente duplicado com mesmo CPF | **Unicidade** |
| Idade preenchida com 180 | **Acurácia** (não bate com a realidade possível) |
| E-mail vazio em metade dos cadastros | **Completude** |

---

### 3. Verdadeiro ou Falso

1. **V** — dado ruim gera decisão errada mesmo com sistema tecnicamente perfeito ("entra lixo, sai lixo").
2. **F** — a maioria dos vazamentos reais vem de falhas simples e evitáveis (senha fraca, falta de
   criptografia, sistema desatualizado), não de ataques sofisticados.
3. **V** — a LGPD exige comunicação de incidentes de segurança que possam acarretar risco aos titulares.
4. **F** — "não encontrado" significa apenas que aquele e-mail não está nos vazamentos já catalogados
   pelo site até o momento da consulta, não uma garantia permanente.

---

### 4. Por que isso aconteceu?

**Resposta: B.**

- A — errada: empresas pequenas e médias também vazam dados; o tamanho não é o fator determinante.
- C — errada: muitos vazamentos exploram falhas simples e conhecidas, não exigem técnica avançada.
- D — errada: qualidade e segurança estão ligadas — um sistema mal projetado tende a falhar em ambas.

---

### 5. Complete as lacunas

a) **acurácia**
b) **ANPD**

---

### 6. Ligue a dimensão à situação

**1 = D** (Completude → campos em branco) · **2 = C** (Consistência → informação contraditória entre
telas) · **3 = B** (Atualidade → dado desatualizado desde 2019) · **4 = A** (Validade → formato que não
respeita o padrão esperado)

---

### 7. Coloque em ordem

1. Descobrir que ocorreu um vazamento de dados pessoais
2. Identificar e corrigir a falha de segurança que causou o vazamento
3. Comunicar os titulares dos dados e a ANPD sobre o incidente

*Observação:* na prática, a correção da falha e a comunicação podem acontecer em paralelo; para a
prova, considerar correta a ordem lógica em que a descoberta vem antes das outras duas etapas.

---

### 8. Estudo de caso

É um problema de **qualidade/segurança** porque um sistema bem projetado deveria seguir boas práticas
de proteção (como criptografar senhas) — guardá-las em texto simples é uma falha de projeto que a
característica "Segurança" da ISO/IEC 25010 cobra. É um **risco direto de vazamento** porque, se esse
banco de dados for exposto (por invasão, erro de configuração, ou qualquer outro motivo), todas as
senhas ficam imediatamente legíveis por quem tiver acesso — sem criptografia, não existe nenhuma camada
extra de proteção entre o vazamento e o dano real aos usuários.

---

### 9. Relatório de auditoria

Aceitar quaisquer duas destas (ou equivalentes, vistas na prática da Aula 2):

- **CONT.SE** — conta quantas vezes um valor se repete, ajudando a detectar duplicidade.
- **ÉNÚM** — verifica se uma célula contém um número, ajudando a detectar campo numérico preenchido como
  texto ou com valor inválido.
- **Remoção de duplicados** (ferramenta do Sheets) — identifica e permite remover linhas repetidas.
- **Filtros** — ajudam a isolar e contar visualmente registros com um problema específico (ex.: células
  vazias de um campo).

---

### 10. Sua boa prática

Produção livre. Critério de correção: a prática precisa ser coerente com o conteúdo da Aula 3 (ex.:
senha forte e única por serviço, autenticação em duas etapas, verificação periódica no Have I Been
Pwned, cuidado ao preencher formulário desconhecido) **e** a explicação precisa conectar a prática ao
tipo específico de vazamento estudado (ex.: senha única por serviço limita o dano quando um único
serviço vaza, porque a mesma senha não abre as contas da pessoa em outros lugares).

---

## Distribuição de pontos

10 questões × 1,0 ponto = **10,0**. Nas questões com múltiplos itens (2, 3, 5, 6, 9), considerar 0,5
quando o aluno acertar parte da questão.
