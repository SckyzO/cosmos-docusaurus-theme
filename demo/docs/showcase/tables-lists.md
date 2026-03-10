---
id: showcase-tables-lists
title: Tables & Lists
sidebar_position: 6
---

# Tables & Lists

## Table — default alignment

| Package | Version | License | Downloads/month |
|---|---|---|---|
| `cosmos-docusaurus-theme` | `1.1.7` | MIT | — |
| `@docusaurus/core` | `3.9.2` | MIT | 800k+ |
| `stylelint` | `17.4.0` | MIT | 5M+ |
| `react` | `19.2.4` | MIT | 30M+ |

## Table — custom alignment

| Left | Center | Right |
|:---|:---:|---:|
| Item A | 42 | $1,200 |
| Item B | 7 | $340 |
| **Total** | **49** | **$1,540** |

## Table — with inline elements

| Node | Status | Command |
|---|---|---|
| `compute001` | Online | `ssh compute001` |
| `compute002` | Offline | — |
| `gpu-01` | Draining | `squeue -w gpu-01` |

---

## Lists

### Unordered

- Outfit + JetBrains Mono typography
- Indigo brand palette (`#465fff`)
- Dark mode first-class (default)
- Zero JavaScript — CSS only
- Compatible with Docusaurus 3+

### Ordered

1. Install the package via npm
2. Add `cosmos-docusaurus-theme` to `themes` array
3. Set `defaultMode: 'dark'` in `colorMode`
4. Restart the dev server
5. Open `http://localhost:3000`

### Task list

- [x] CSS variables mapped to Infima
- [x] Dark / light mode
- [x] Tabs, cards, admonitions
- [x] Algolia DocSearch styled
- [x] Back-to-top button
- [x] Progress bar
- [ ] RTL support (planned)
- [ ] Custom Prism theme (planned)

### Nested

- Theme variables
  - Color palette (Void / Slate)
  - Typography scale (Outfit + JetBrains Mono)
  - Spacing + shadow tokens
- Component styles
  - Navbar + toggle button
  - Sidebar + collapsible menu
  - Code blocks + inline code
  - Tables, admonitions, pagination
- Utility classes
  - `.method-get/post/put/delete/patch`
  - `.status-ok/warn/crit/unknown`
  - `.state-ok/warn/crit/unknown`

### Mixed nested (ordered + unordered)

1. Install the theme
   - From npm: `npm install cosmos-docusaurus-theme`
   - From source: `file:../cosmos-docusaurus-theme`
2. Configure Docusaurus
   - Add to `themes` array
   - Optionally override variables in `custom.css`
3. Deploy
   - GitHub Pages via Actions
   - Netlify, Vercel, or any static host
