# Gabarito Comentado — Prova Mensal UC II

> Material do professor. Prova do aluno: `apc_uc2_b4_aula03_prova.html`.
> Cobre Data Lake, Data Warehouse e Computação em Nuvem (Aulas 1-2).
> Turmas 2A e 2B · 4º bimestre 2026 · 10 questões, 1,0 ponto cada.

---

### 1. Banco, warehouse ou lake?

**Resposta: B.**

- A — errada: é a definição de data warehouse, não de data lake.
- C — errada: é a definição de data lake, não de data warehouse.
- D — errada: as três guardam dados em estágios e formatos diferentes, com finalidades distintas.

---

### 2. Verdadeiro ou Falso

1. **V** — lakehouse combina a flexibilidade do data lake com a organização do data warehouse.
2. **V** — sem organização e catálogo, um data lake se torna um "pântano de dados" (data swamp).
3. **F** — justamente o contrário: na nuvem não é preciso comprar servidor, paga-se pelo uso.
4. **V** — escalar para cima e para baixo conforme a demanda é uma das vantagens centrais da nuvem.

---

### 3. Onde esse dado deveria ficar?

| Situação | Resposta |
|---|---|
| Estoque atual, consultado e atualizado a cada venda | **Banco de dados relacional** |
| Vídeos brutos sem uso definido ainda | **Data lake** |

---

### 4. O papel da nuvem

**Resposta: A.**

- B — errada: nuvem é usada por empresas de todos os portes, não só para uso pessoal.
- C — errada: a elasticidade (escalar para cima/baixo) é justamente a vantagem central da nuvem.
- D — errada: Google Cloud, AWS e Azure são provedores de computação em nuvem, que podem hospedar data
  warehouses, mas não são sinônimos deles.

---

### 5. Complete as lacunas

a) **pântano**
b) **lakehouse**

---

### 6. Ligue o termo à definição

**1 = C** (Banco relacional → dia a dia do sistema) · **2 = D** (Data warehouse → análise e relatório)
· **3 = A** (Data lake → dado bruto, barato, uso futuro) · **4 = B** (Computação em nuvem →
infraestrutura sob demanda)

---

### 7. Coloque em ordem

1. Dado do dia a dia, sendo lido e gravado o tempo todo num banco relacional
2. Dado bruto recém-coletado, guardado sem tratamento num data lake
3. Dado consolidado e organizado num data warehouse, pronto para relatório

*Observação:* aceitar também a ordem em que o banco relacional e o data lake aparecem em posições
trocadas, desde que o data warehouse permaneça como etapa final — o que importa é entender que o
warehouse é o estágio mais "pronto para análise".

---

### 8. Pense e explique

**Vantagem:** guardar o dado bruto é rápido e barato, e preserva a informação original para usos ainda
não imaginados — não é preciso decidir, no momento da coleta, exatamente como o dado vai ser usado
depois.
**Risco:** sem organização e catálogo, esse dado bruto se perde em volume e vira um "pântano de dados"
(data swamp), difícil ou impossível de aproveitar depois.

---

### 9. Estudo de caso

O conceito é o **pântano de dados (data swamp)**: um data lake sem organização nem catálogo que acumula
tudo misturado se torna inútil, mesmo guardando informação valiosa. O que poderia ter sido feito
diferente: manter um mínimo de estrutura (pastas por tipo de dado e por ano, por exemplo) e um catálogo
simples (uma planilha ou documento listando o que está guardado onde), mesmo sem organizar o conteúdo
em si.

---

### 10. Montando o mini data warehouse

Aceitar quaisquer dois destes (ou equivalentes, vistos na prática da Aula 2):

- Formatos diferentes para o mesmo tipo de informação entre as abas (datas, nomes de cidade escritos de
  jeitos diferentes).
- Campos faltando em algumas linhas.
- Duplicidade de registros entre ou dentro das abas.
- Chaves que não se cruzam facilmente entre as três fontes (ex.: nome do cliente escrito diferente na
  aba de vendas e na de clientes).

---

## Distribuição de pontos

10 questões × 1,0 ponto = **10,0**. Nas questões com múltiplos itens (2, 3, 5, 6, 10), considerar 0,5
quando o aluno acertar parte da questão.
