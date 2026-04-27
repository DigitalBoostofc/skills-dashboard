# Pages

## Single page: index.html

All UI lives in one file. Dependency tree:

```
index.html
├── <style> (all CSS, ~890 lines)
│   ├── :root CSS variables
│   ├── body / background effects
│   ├── header styles
│   ├── category bar styles
│   ├── skill card styles
│   ├── agent card styles
│   ├── squad card styles
│   ├── strategy card styles
│   ├── filter bar styles
│   ├── guide panel styles
│   ├── toast / empty state
│   └── responsive @media
├── agents-data.js (external)
├── strategies-data.js (external)
└── <script> (inline JS, ~2000 lines)
    ├── setMode() — panel switching
    ├── filterCat() — skill category filter
    ├── filterFn() — agent function filter
    ├── filterSquad() — squad filter
    ├── buildSkillCards() — render skill cards
    ├── buildAgentCards() — render agent cards
    ├── buildStrategyCards() — render strategy cards
    └── copy helpers
```
