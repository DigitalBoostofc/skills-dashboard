# Layouts

## Global Layout
```
<header> (sticky, 66px)
  logo | pill-nav-tabs | header-stat | search-input

<cat-bar> (sticky, skills panel only)
  pill category filter buttons

<main panels> (one visible at a time)
  #skills-panel   → cat-bar + skills grid
  #agents-panel   → howto-steps + squads-grid + filter-bar + agents-grid
  #strategies-panel → intro + filter-pills + strategies-grid
  #guide-panel    → hero + pattern-nav + guide-sections

<footer>
  mono text + accent highlights
```

## Grid patterns
- Skills: `repeat(auto-fill, minmax(310px, 1fr))`, gap 12px
- Agents: `repeat(auto-fill, minmax(300px, 1fr))`, gap 10px
- Squads: `repeat(auto-fill, minmax(200px, 1fr))`, gap 8px
- Strategies: `repeat(auto-fill, minmax(340px, 1fr))`, gap 14px

## Max widths
- Skills main: 1440px
- Agents main: 1440px
- Guide wrap: 1080px

## Padding
- Desktop: 28–32px horizontal
- Mobile (<820px): 16px horizontal
