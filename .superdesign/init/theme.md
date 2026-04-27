# Theme

## Stack
Single HTML file (no framework). All CSS is inline `<style>` in index.html.

## CSS Variables (current)
```css
:root {
  --bg:       #07070e;
  --bg2:      #0d0d18;
  --surface:  rgba(255,255,255,0.045);
  --surface-h:rgba(255,255,255,0.07);
  --border:   rgba(255,255,255,0.09);
  --border-h: rgba(255,255,255,0.16);
  --text:     #eeeef8;
  --text-2:   #9898c0;
  --text-3:   #505080;
  --accent:   #7cd3ff;
  --radius:   16px;
  --ff-body:  'Inter', sans-serif;
  --ff-mono:  'JetBrains Mono', monospace;
}
```

## Google Fonts
- Inter (400–800, italic)
- JetBrains Mono (400–600)

## Background
- Body: #07070e with dot-grid overlay (radial-gradient, 28px spacing)
- Ambient glow top-right: rgba(124,211,255,0.06)

## Glassmorphism pattern
Cards use `background: var(--surface)` + `border: 1px solid var(--border)` + `border-radius: var(--radius)`.
Header uses `backdrop-filter: blur(24px) saturate(180%)`.
