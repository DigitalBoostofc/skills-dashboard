# Enriquecimento dos agentes — status

Última atualização: 2026-04-24

## Pipeline de enriquecimento

1. Os arquivos `.md` dos agentes ficam em `C:\Users\Programador\Desktop\agentes\`
2. Sub-agentes Explore extraem campos estruturados em JSON (role, identity, corePrinciples, keyCommands, typicalWorkflow, pitfalls, collaboratesWith)
3. JSONs vão para `_enrich/batch-*.json`
4. `_enrich/merge.js` injeta o campo `detail: {...}` em cada entrada correspondente do `agents-data.js`
5. `agent.html` renderiza automaticamente o `detail` quando presente

## Para retomar o trabalho

```bash
# Na raiz do projeto
node _enrich/merge.js   # re-aplica todos os _enrich/batch-*.json sobre agents-data.js
```

O script é idempotente: pula agentes que já têm `detail`. Basta adicionar novos JSONs em `_enrich/` e rodar de novo.

## Squads já enriquecidos (detalhes no dashboard)

| Squad | Agentes | Fonte |
|---|---:|---|
| AIOX | 12 | escrito direto no `agents-data.js` |
| Advisory Board | 11 | `_enrich/batch-A.json` |
| Movement | 7 | `_enrich/batch-A.json` |
| Data Squad | 7 | `_enrich/batch-A.json` |
| Traffic Masters | 16 | `_enrich/batch-H.json` |
| **Total ativo** | **53** | |

## Squads ainda pendentes de enriquecimento (arquivos existem no disco)

Precisam rodar o extrator (sub-agente Explore) e salvar em `_enrich/batch-*.json`, depois `node _enrich/merge.js`.

| Squad | Agentes | Arquivos-fonte |
|---|---:|---|
| Brand Squad | 15 | `brand-chief.md`, `al-ries.md`, ... `naming-strategist.md` |
| C-Level Squad | 6 | `caio-architect.md`, `cio-engineer.md`, ... `vision-chief.md` |
| Claude Code Mastery | 8 | `claude-mastery-chief.md`, ... `swarm-orchestrator.md` |
| Design Squad | 8 | `design-chief.md`, `brad-frost.md`, ... `visual-generator.md` |
| Copy Master | 33 | `copy-master-chief.md`, `alex-hormozi.md`, ... `todd-brown.md` |
| Storytelling | 12 | `story-chief.md`, `blake-snyder.md`, ... `shawn-coyne.md` |
| Cybersecurity (apenas 1 dos 15) | 1 | só `busterer.md` existe |
| **Total pendente** | **83** | |

## Squads impossíveis (arquivos-fonte ausentes)

| Squad | Agentes | Observação |
|---|---:|---|
| Hormozi Squad | 16 | Nenhum arquivo `hormozi-*.md` no diretório-fonte (só `alex-hormozi.md`, que pertence ao Copy Master) |
| Cybersecurity (14 de 15) | 14 | Faltam: cyber-chief, cartographer, chris-sanders, command-generator, dirber, fuzzer, georgia-weidman, jim-manico, marcus-carey, omar-santos, peter-kim, ripper, rogue, shannon-runner |
| **Total impossível** | **30** | |

## Como extrair um squad novo

Despachar um sub-agente `Explore` com este prompt (ajustando o mapeamento file→id):

```
Ler arquivos em C:\Users\Programador\Desktop\agentes\:
- {file1.md} → {id1}
- {file2.md} → {id2}
...

Para cada arquivo, extrair (do YAML agent/persona/commands e markdown "Typical Workflow", "Common Pitfalls", "Agent Collaboration"):
- role (pt-BR, 1 linha)
- identity (pt-BR, 1 frase)
- corePrinciples (4-6 itens, pt-BR, <12 palavras cada)
- keyCommands (6-8 comandos principais, formato {cmd:"*name", desc:"pt-BR <10 palavras"}, INCLUIR o prefixo *)
- typicalWorkflow (3-6 passos, pt-BR, <15 palavras)
- pitfalls (3-5 itens, pt-BR, <15 palavras, sem o ❌)
- collaboratesWith (3-6 "@name")

Retornar APENAS JSON keyed by id. Sem markdown fences, sem comentários.
```

Salvar a saída em `_enrich/batch-{nome}.json` e rodar `node _enrich/merge.js`.
