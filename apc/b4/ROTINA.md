# Rotina semanal — Preparador de Material

Status: **pendente de 1 passo do Jorge.**

## O bloqueio

A rotina roda na nuvem da Anthropic e precisa clonar `jorgefxv1/painel-professor`. A API recusou
salvar enquanto o GitHub não estiver conectado à conta Claude:

```
HTTP 401 — Connect your GitHub account before saving a routine that uses a GitHub repository.
```

## O que o Jorge precisa fazer (1x, ~1 min)

Rodar `/web-setup` no Claude Code, **ou** conectar pelo navegador em https://claude.ai/connect-github

Depois disso, pedir ao Claude: *"registra a rotina do preparador de material"*.

## Configuração já definida

| Campo | Valor |
|---|---|
| Nome | Preparador de Material — 4º Bimestre (JGP) |
| Agendamento | Todo domingo, 19h de Corumbá (`0 23 * * 0` em UTC) |
| Modelo | claude-sonnet-5 |
| Repositório | `https://github.com/jorgefxv1/painel-professor` |
| Ambiente | `env_01Nc2jMfPPoEPZuC8yG5tjrK` (Default) |
| Ferramentas | Bash, Read, Write, Edit, Glob, Grep |
| Entrega | Branch `material/semana-<N>` + Pull Request para `main` |

## O que ela faz a cada execução

1. Descobre a data real (`date`) e calcula a semana do bimestre (semana 1 = 02/10/2026).
2. Fora de 02/10–09/12/2026, não gera nada — só anota no `STATUS.md` e encerra.
3. Lê `.claude/skills/preparar-material/SKILL.md` como especificação.
4. Lê `divisao-aulas-4-bimestre.txt` (conteúdo canônico) e `data.js` (campo `semana`).
5. Gera **só o que falta** em `apc/b4/`, sem sobrescrever arquivo existente.
6. Confere por script todo número afirmado em gabarito.
7. Atualiza o `STATUS.md`.
8. Commita em branch nova e abre PR — **nunca push direto na main**.

## Por que PR e não push direto

O material vai para a mão de aluno. O PR dá ao Jorge um ponto de revisão antes de imprimir, e
mantém a `main` sempre com material já conferido.
