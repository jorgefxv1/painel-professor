## Gabarito — Atividade Avaliativa UC I: ETL x ELT

Substitui a prova. 10 questões, 1,0 ponto cada. Formato simples: sigla, ordenação, múltipla escolha,
V/F, correspondência e lacunas.

---

### 1. O que significa cada letra?

| Sigla | E | T | L |
|---|---|---|---|
| ETL | Extract (Extrair) | Transform (Transformar) | Load (Carregar) |
| ELT | Extract (Extrair) | (mesma coisa, mas por último) | Load (Carregar, logo após extrair) |

Aceitar em português ou inglês, desde que o sentido esteja certo.

---

### 2. Coloque em ordem — ETL

1. Extrair o dado da fonte
2. Transformar (limpar e organizar o dado)
3. Carregar o dado no destino final

---

### 3. Coloque em ordem — ELT

1. Extrair o dado da fonte
2. Carregar o dado bruto no destino
3. Transformar o dado já dentro do destino

---

### 4. A diferença principal

**Resposta: B.**

---

### 5. Verdadeiro ou Falso

1. **V** — no ETL a transformação vem antes do carregamento.
2. **V** — no ELT o dado bruto é carregado primeiro.
3. **F** — "L" significa "Load" (Carregar), não "Limpar".
4. **V** — ELT aproveita o poder de processamento do destino (ex.: nuvem) para transformar depois.

---

### 6. Qual caminho escolher?

1. **ETL** — precisa do dado já limpo, sem poder de processamento extra no destino.
2. **ELT** — grande volume de dado bruto, processamento acontece depois, aproveitando a nuvem.

---

### 7. Ligue a etapa ao que ela faz

**1 = C** (Extract → retira o dado da fonte) · **2 = A** (Transform → limpa e organiza) · **3 = B** (Load → coloca no destino final)

---

### 8. Verdadeiro ou Falso

1. **V** — no ETL o dado só chega ao destino depois de corrigido.
2. **V** — no ELT o dado bruto fica no destino antes de ser transformado.

---

### 9. Complete a frase

a) **ETL**
b) **ELT**

---

### 10. Fluxograma: ETL x ELT

Produção livre (escrita ou desenhada). Critérios de correção:

- **ETL:** Extrair → Transformar → Carregar (3 etapas, nessa ordem, ligadas por setas).
- **ELT:** Extrair → Carregar → Transformar (3 etapas, nessa ordem, ligadas por setas).
- Aceitar variações de palavras equivalentes (ex.: "buscar" no lugar de "extrair"), desde que a ordem e
  o sentido de cada etapa estejam corretos.

---

## Distribuição de pontos

10 questões × 1,0 ponto = **10,0**. Nas questões com múltiplos itens (1, 5, 6, 7, 8, 9), considerar 0,5
quando o aluno acertar parte da questão.
