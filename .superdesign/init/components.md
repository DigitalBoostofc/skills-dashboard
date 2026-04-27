# Components

## Stack
Vanilla HTML/CSS/JS — single file (index.html, ~2905 lines). No framework.

## Key UI primitives

### Header (sticky, z-50)
- Height: 66px, background rgba(7,7,14,0.85), backdrop-filter blur(24px)
- Logo mark: 36×36px rounded box with ⌘ icon in accent color
- Pill nav: `.header-nav` — background rgba(255,255,255,0.05), border-radius 12px
- Active nav tab: background rgba(255,255,255,0.1) pill
- Search input: 260px wide, border-radius 10px, accent focus ring

### Category Bar (sticky below header)
- `.cat-bar`: horizontal scroll, pill buttons
- `.cat-btn.active`: color-mix background + border from `--cat-color`

### Skill Card (`.s-card`)
- glassmorphism: surface bg + border
- 3px top accent bar (::before) with `--cat-color`
- card-cmd: monospace pill with category color, clickable to copy
- copy-btn: 28×28px icon button

### Agent Card (`.a-card`)
- 3px top gradient bar (`.a-bar`) with `--squad-color`
- Icon 40×40px rounded
- `.a-cmd-btn`: full-width mono button, primary action

### Squad Card (`.sq-card`)
- Compact 200px min-width
- `.sq-accent`: 3px top gradient
- `.sq-orch-btn`: full-width command button

### Strategy Card (`.strat-card`)
- Similar to agent card
- Difficulty pills: easy=green, medium=yellow, hard=red

### Filter Bar (`.agent-filters`)
- Sticky below header
- Horizontal pill buttons with `--filter-color`

### Toast
- Fixed bottom-center, green border, mono font

### Empty State
- Centered with icon + title + subtitle
