# Gabarito Comentado — UC II: Prova Bimestral (Aula 07)

**Verificação de pontuação:** 10 questões × 1,0 ponto = **10,0 pontos**. Confirmado com script:
`python3 -c "pontos=[1.0]*10; print(sum(pontos))"` → `10.0`. ✅

---

### Questão 1 — Correspondência: formas de armazenamento (1,0 pt)

**Resposta: 1 = B · 2 = C · 3 = A**

- 1 (Banco de dados relacional) = B — dado organizado em tabelas, para o dia a dia do sistema.
- 2 (Data Warehouse) = C — dado já tratado e organizado, voltado para análise e relatório.
- 3 (Data Lake) = A — dado bruto, em qualquer formato, guardado barato para uso futuro.

Erro comum: trocar Data Warehouse por Data Lake — a diferença-chave é que o Warehouse já chega **tratado**,
o Lake chega **bruto**.

---

### Questão 2 — V/F: Nuvem e Data Lake (1,0 pt)

1. **Verdadeiro.** É a própria definição de computação em nuvem: pagar pelo uso, sem comprar servidor, e escalar conforme a demanda.
2. **Falso.** É o contrário: "pântano de dados" é um data lake **sem** organização nem catálogo, que virou um depósito inútil.
3. **Verdadeiro.** Lakehouse junta a flexibilidade do data lake com a organização do data warehouse.
4. **Falso.** Google Cloud, AWS e Azure são **provedores de computação em nuvem**, não bancos de dados relacionais — eles oferecem bancos relacionais, data warehouses e data lakes como serviços, entre outras coisas.

---

### Questão 3 — Onde guardar o dado? (1,0 pt)

**Resposta: C**

- A está errada: banco relacional exige estrutura de tabelas definida antes de guardar — não serve para dado bruto sem destino certo.
- B está errada: data warehouse recebe dado já tratado; aqui ainda não se sabe que perguntas o dado vai responder, então não há tratamento definido ainda.
- C está certa: data lake aceita dado bruto, em qualquer formato, guardado para decidir depois o que fazer com ele — exatamente o caso do histórico de cliques.
- D está errada: pen drive não tem escala, segurança nem disponibilidade para um histórico de cliques de um site.

---

### Questão 4 — Complete as frases (1,0 pt)

a) **pântano de dados** (ou "data swamp").
b) **elasticidade** (capacidade de escalar para cima ou para baixo conforme a demanda).

---

### Questão 5 — Qual gráfico usar? (1,0 pt)

**Resposta: B**

- A está errada: gráfico de barras serve para **comparar categorias**, não para mostrar tendência no tempo.
- B está certa: gráfico de linha é o indicado para mostrar como um valor varia ao longo do tempo (mês a mês).
- C está errada: gráfico de proporção mostra partes de um todo em um momento, não evolução mensal.
- D está errada: o tipo de gráfico muda completamente a leitura — escolher mal pode até enganar quem olha o painel.

---

### Questão 6 — Pergunta de negócio e tipo de gráfico (1,0 pt)

**Resposta: 1 = C · 2 = A · 3 = B**

- 1 (comparar produtos por categoria) = C (barra).
- 2 (como o número de visitantes mudou mês a mês) = A (linha, tendência no tempo).
- 3 (fração das vendas por forma de pagamento) = B (proporção).

---

### Questão 7 — V/F: Boas práticas de dashboard (1,0 pt)

1. **Verdadeiro.** Um bom título já entrega a resposta ou aponta a pergunta respondida pelo gráfico.
2. **Verdadeiro.** "Menos é mais" é mostrar só os indicadores que importam, não lotar a tela.
3. **Verdadeiro.** Cortar o eixo Y amplia visualmente uma diferença pequena, distorcendo a leitura.
4. **Falso.** O Looker Studio é gratuito (basta uma conta Google) — não exige pagamento nem cartão de crédito.

---

### Questão 8 — Escalas que enganam (1,0 pt — discursiva)

**Resposta esperada:** quando o eixo Y de um gráfico de barras não começa em zero, uma diferença pequena
entre as barras passa a ocupar quase toda a altura do gráfico, parecendo uma diferença enorme. Exemplo
aceito: vendas de R$ 98.000 e R$ 100.000 — se o eixo começar em R$ 95.000 em vez de R$ 0, a barra de
R$ 100.000 parece o dobro da de R$ 98.000, quando a diferença real é de só 2%.

**Critério:** aceitar qualquer exemplo coerente (números, percentuais, outro indicador) desde que explique
que o corte do eixo distorce a proporção visual entre os valores.

---

### Questão 9 — Rastreamento e LGPD (1,0 pt)

1. **Verdadeiro.** Rastreadores (cookies e scripts de terceiros) permitem cruzar o comportamento do usuário
   entre sites diferentes.
2. **Verdadeiro.** A LGPD garante o direito de saber o que foi coletado e de solicitar a exclusão dos dados.
3. **Falso.** O perfil de anúncios é construído majoritariamente a partir do **comportamento** (cliques,
   buscas, tempo em cada conteúdo), não apenas de formulários preenchidos diretamente.

---

### Questão 10 — O que eu ganho x o que eu entrego (1,0 pt — discursiva, resposta pessoal)

**Critério de correção:** aceitar qualquer app/site real e gratuito, desde que a dupla "ganho" e "entrego"
faça sentido. Exemplo de resposta completa (apenas ilustrativo — não é a resposta "certa" única):

- App escolhido: aplicativo de mapa e trânsito.
- O que eu ganho: rota mais rápida e aviso de trânsito em tempo real.
- O que eu entrego: minha localização em tempo real, meus trajetos frequentes e os horários em que me movimento.

Não aceitar resposta em que "o que eu entrego" fique vazio ou genérico ("meus dados") sem apontar **qual**
dado — o ponto da questão é nomear o dado específico coletado.
