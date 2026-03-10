# cosmos-docusaurus-theme

<div align="center">

**The design system behind [Rackscope](https://rackscope.dev), packaged for any Docusaurus 3 site.**

[![npm version](https://img.shields.io/npm/v/cosmos-docusaurus-theme.svg?style=flat-square)](https://www.npmjs.com/package/cosmos-docusaurus-theme)
[![npm downloads](https://img.shields.io/npm/dm/cosmos-docusaurus-theme.svg?style=flat-square)](https://www.npmjs.com/package/cosmos-docusaurus-theme)
[![CI](https://github.com/SckyzO/cosmos-docusaurus-theme/actions/workflows/ci.yml/badge.svg)](https://github.com/SckyzO/cosmos-docusaurus-theme/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.x-green?style=flat-square)](https://docusaurus.io)

### [Live Demo](https://sckyzo.github.io/cosmos-docusaurus-theme/) &nbsp;·&nbsp; [Releases](https://github.com/SckyzO/cosmos-docusaurus-theme/releases) &nbsp;·&nbsp; [npm](https://www.npmjs.com/package/cosmos-docusaurus-theme)

</div>

---

A **CSS-only** Docusaurus theme built from the same design system that powers
[Rackscope](https://rackscope.dev) — a production monitoring platform for datacenters and HPC clusters.
Dark-first, opinionated, and refined.

- **Void** dark palette — deep neutral blacks (`#030712 / #111827`) with indigo accents
- **Slate** light palette — warm white surfaces with brown text tones, not cold blue-gray
- **Outfit** display typeface + **JetBrains Mono** for code
- Zero JavaScript, no swizzled components — pure CSS override of Docusaurus Infima
- Every element covered: admonitions, tabs, cards, tables, details, DocSearch, breadcrumbs…
- Smooth dark/light transition, ghost-button navbar, TOC active state, 4px scrollbar

---

## Screenshots

> Dark mode — Void palette

![Dark mode screenshot](https://raw.githubusercontent.com/SckyzO/cosmos-docusaurus-theme/main/docs/screenshots/dark.png)

> Light mode — Slate palette

![Light mode screenshot](https://raw.githubusercontent.com/SckyzO/cosmos-docusaurus-theme/main/docs/screenshots/light.png)

> See all components live → **[sckyzo.github.io/cosmos-docusaurus-theme](https://sckyzo.github.io/cosmos-docusaurus-theme/)**

---

## Quick start

```bash
npm install cosmos-docusaurus-theme
```

```js title="docusaurus.config.js"
export default {
  themes: ['cosmos-docusaurus-theme'],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
  },
};
```

### Try it instantly with Docker

Zero npm install required — the full demo runs in a container:

```bash
git clone https://github.com/SckyzO/cosmos-docusaurus-theme.git
cd cosmos-docusaurus-theme
docker compose up
# → http://localhost:3000
```

Or pull from GitHub Container Registry:

```bash
docker run -p 3000:3000 ghcr.io/sckyzo/cosmos-docusaurus-theme:latest
```

---

## What's covered

| Element | Styled |
|---|:---:|
| Navbar + ghost buttons | ✅ |
| Sidebar + section labels | ✅ |
| Code blocks (all languages) | ✅ |
| Admonitions — AlertBanner style, rounded-2xl | ✅ |
| Tables | ✅ |
| Tabs + synced tabs | ✅ |
| Details/summary — SectionCard style | ✅ |
| Cards — rounded-2xl + dark shadow | ✅ |
| Tags + Badges | ✅ |
| Breadcrumbs | ✅ |
| TOC — H2/H3 hierarchy + active pill | ✅ |
| Pagination | ✅ |
| Announcement bar | ✅ |
| Back-to-top + Progress bar | ✅ |
| Algolia DocSearch | ✅ |
| Smooth dark/light transition | ✅ |

---

## Customization

Override any CSS variable in your own `custom.css`:

```css title="src/css/custom.css"
/* Brand color */
:root {
  --ifm-color-primary:         #e11d48;
  --ifm-color-primary-dark:    #be123c;
  --ifm-color-primary-darker:  #9f1239;
  --ifm-color-primary-darkest: #881337;
  --ifm-color-primary-light:   #fb7185;
  --ifm-color-primary-lighter: #fda4af;
  --ifm-color-primary-lightest:#ffe4e6;
}

/* Font */
:root {
  --ifm-font-family-base: 'Inter', system-ui, sans-serif;
}
```

See the [Color Tokens](https://sckyzo.github.io/cosmos-docusaurus-theme/color-tokens) page
for all available tokens (dark + light with visual swatches).

---

## Utility classes

| Class | Usage |
|---|---|
| `.method-get/post/put/delete/patch` | HTTP method labels (monospace, semantic color) |
| `.status-ok/warn/crit/unknown` | Health state labels |
| `.state-ok/warn/crit/unknown` | Aliases for the above |

---

## Development

```bash
npm install          # stylelint devDeps
npm run lint         # CSS lint

# Demo site
cd demo && npm install && npm run start
```

---

## License

[MIT](LICENSE) — © SckyzO
