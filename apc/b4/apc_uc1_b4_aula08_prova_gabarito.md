# Gabarito Comentado — Prova Bimestral UC I (Ingestão de Dados)

**Arquivo da prova:** `apc_uc1_b4_aula08_prova.html` · 10 questões, 1,0 pt cada · **Total: 10,0 pts**

**Conferência de pontuação:** 10 questões × 1,0 pt = 10,0 pts. Confirmado com script:
`python3 -I -c "pts=[1.0]*10; assert len(pts)==10 and sum(pts)==10.0; print('ok')"` → `ok`.

---

### Questão 1 — Raspagem de dados (1,0 pt)
**Resposta: B** — "Extrair automaticamente informações de páginas web e transformá-las em dados organizados."
- A está errada: digitar manualmente é o contrário de raspagem — raspagem é automática.
- C está errada: raspagem é sobre extrair dado de uma fonte, não sobre apagar dados.
- D está errada: pedir por e-mail é uma forma manual e dependente de terceiros, não é raspagem.

### Questão 2 — Robots.txt e termos de uso (1,0 pt — 0,25 por item)
1. **V** — é exatamente a função do robots.txt: sinalizar quais áreas não devem ser visitadas por robôs.
2. **F** — dado público não significa dado livre para qualquer uso; termos de uso e LGPD podem restringir.
3. **V** — termos de uso podem proibir coleta automatizada mesmo de conteúdo visível publicamente.
4. **F** — a LGPD trata de dados pessoais em geral, incluindo coleta para pesquisa; não é exclusiva de empresas.

### Questão 3 — APIs (1,0 pt)
**Resposta: 1-C, 2-A, 3-D, 4-B**
- Endpoint = C (endereço da requisição).
- JSON = A (formato campo-valor/listas).
- API key = D (identifica/autentica quem requisita).
- Rate limit = B (limite de requisições por período).
Qualquer troca entre pares está errada — são associações 1-para-1, sem repetição.

### Questão 4 — Ordem de uma raspagem (1,0 pt)
**Ordem correta: 1) Inspecionar a página e identificar o índice da tabela; 2) Usar IMPORTHTML/IMPORTXML; 3) Limpar o resultado; 4) Registrar URL e data.**
Erro comum: colocar "limpar o resultado" antes de "usar a fórmula" — não há o que limpar antes de trazer o dado para a planilha. Outro erro comum: esquecer o registro de URL/data, que é o último passo e garante rastreabilidade da coleta.

### Questão 5 — Complete a frase (1,0 pt — 0,5 por lacuna)
a) **amostragem** (viés de amostragem).
b) **quem** (o problema está em quem respondeu, não em quantos campos foram preenchidos).
Aceitar sinônimos equivalentes em b) como "quais pessoas", desde que mantenha o sentido de que o problema é sobre quem compõe a amostra, e não sobre completude de campos.

### Questão 6 — Qual situação não deveria ser raspada (1,0 pt)
**Resposta: C** — dados de perfis protegidos por robots.txt e termos de uso que proíbem coleta automatizada.
- A, B e D são dados públicos sem restrição conhecida de robots.txt/termos de uso no enunciado — raspagem simples é aceitável.
- C é a única situação em que o próprio site sinaliza, por regra explícita, que a coleta automatizada não é permitida.

### Questão 7 — API x raspagem (1,0 pt — 0,25 por item)
1. **V** — API entrega dado já estruturado (JSON), mais estável que uma página pensada para leitura humana.
2. **F** — muitas APIs exigem autenticação (API key) e muitas raspagens não exigem autenticação alguma; a afirmação inverte a regra.
3. **V** — é exatamente a função do rate limit: impedir sobrecarga por excesso de requisições de um mesmo usuário.
4. **V** — mudança de layout quebra raspagem baseada em IMPORTHTML; uma API bem documentada tende a manter a mesma estrutura de resposta mesmo com mudanças visuais no site/produto.

### Questão 8 — Lendo um JSON de API (1,0 pt — 0,5 por item)
a) **34** (valor do campo `temperatura_celsius`).
b) É preciso mudar o **parâmetro/valor do campo "cidade" na requisição** (o endpoint/parâmetro que identifica qual cidade está sendo consultada) — não é preciso mudar o endereço da API inteiro, só o parâmetro de cidade.
Erro comum: responder "mudar a API" — a API é a mesma, muda-se o parâmetro da requisição.

### Questão 9 — Encontrando o viés (1,0 pt)
**Resposta esperada:** ficam de fora os clientes que não chegaram a finalizar a compra (desistentes, carrinho abandonado) e quem comprou e não respondeu a pergunta. O resultado tende a ser positivo porque só responde quem já concluiu a compra com sucesso — quem teve um problema grave provavelmente já desistiu antes de chegar à tela de finalização, ou simplesmente não responde.
Aceitar qualquer resposta que identifique (a) um grupo de clientes insatisfeitos que não chega a essa tela e (b) a relação causa-efeito entre "só pergunta no fim" e "resultado inflado positivamente".

### Questão 10 — Qual API pública usar (1,0 pt — 0,5 por linha)
1. Cotação do dólar → **AwesomeAPI (câmbio)**.
2. População de municípios de MS → **IBGE**.
Erro comum: trocar as duas, ou responder "BrasilAPI" para população — BrasilAPI é mais associada a CEP/feriados/DDD, não a dados populacionais do IBGE.

---

## Nota de verificação do professor

Pontuação integralmente objetiva/semi-objetiva conferida: 1+1+1+1+1+1+1+1+1+1 = **10,0 pts**, sem
arredondamento necessário. Nas questões 2 e 7 (V/F, 4 itens de 0,25), 4 × 0,25 = 1,0 em cada uma —
confirmado. Nas questões 5, 8 e 10 (2 itens de 0,5 cada), 2 × 0,5 = 1,0 em cada uma — confirmado.
