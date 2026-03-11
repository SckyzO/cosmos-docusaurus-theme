# cosmos-docusaurus-theme

<div align="center">

**The design system behind [Rackscope](https://rackscope.dev), packaged for any Docusaurus 3 site.**

[![npm version](https://img.shields.io/npm/v/cosmos-docusaurus-theme.svg?style=flat-square)](https://www.npmjs.com/package/cosmos-docusaurus-theme)
[![npm downloads](https://img.shields.io/npm/dm/cosmos-docusaurus-theme.svg?style=flat-square)](https://www.npmjs.com/package/cosmos-docusaurus-theme)
[![CI](https://github.com/SckyzO/cosmos-docusaurus-theme/actions/workflows/ci.yml/badge.svg)](https://github.com/SckyzO/cosmos-docusaurus-theme/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.x-green?style=flat-square)](https://docusaurus.io)

## [Live Demo](https://sckyzo.github.io/cosmos-docusaurus-theme/) &nbsp;·&nbsp; [Releases](https://github.com/SckyzO/cosmos-docusaurus-theme/releases) &nbsp;·&nbsp; [npm](https://www.npmjs.com/package/cosmos-docusaurus-theme)

</div>

---

A **CSS-only** Docusaurus theme built from the same design system that powers [Rackscope](https://rackscope.dev).
Dark-first, opinionated, pixel-perfect.

- **Void** dark palette — deep neutral blacks (`#030712 / #111827`) with indigo accents
- **Slate** light palette — warm white surfaces with brown text tones, not cold blue-gray
- **Outfit** display typeface + **IBM Plex Mono** for code
- Zero JavaScript, no swizzled components — pure CSS override of Docusaurus Infima
- Every native Docusaurus element styled out of the box
- Utility classes for MDX pages: buttons, badges, steps, timeline, check lists

---

## Screenshots

> Dark mode — Void palette

![Dark mode](https://raw.githubusercontent.com/SckyzO/cosmos-docusaurus-theme/main/docs/screenshots/dark.png)

> Light mode — Slate palette

![Light mode](https://raw.githubusercontent.com/SckyzO/cosmos-docusaurus-theme/main/docs/screenshots/light.png)

> Banners — Dismissible Alert style, semantic icons, full border

![Banners](https://raw.githubusercontent.com/SckyzO/cosmos-docusaurus-theme/main/docs/screenshots/banners.png)

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

### Options

```js title="docusaurus.config.js"
themes: [
  ['cosmos-docusaurus-theme', {
    injectFavicon: false,  // disable cosmos favicon injection (default: true)
  }],
],
```

### Try it instantly with Docker

```bash
git clone https://github.com/SckyzO/cosmos-docusaurus-theme.git
cd cosmos-docusaurus-theme
docker compose up
# → http://localhost:3000
```

---

## What's covered

### Native Docusaurus elements

Styled automatically — no configuration needed:

| Element                                                 | Notes                                         |
| ------------------------------------------------------- | --------------------------------------------- |
| Navbar — COSMOS wordmark, ghost buttons, `\|` separator | Brand indigo title                            |
| Sidebar — icons, sub-menu line, version badge           | `className: 'sidebar-cat-*'` for icons        |
| Breadcrumb — ChevronRight separator, brand hover        | Automatic                                     |
| Tabs — flat underline, brand active                     | `import Tabs from '@theme/Tabs'`              |
| Pagination — monospace sublabel, brand hover            | Automatic prev / next                         |
| Code blocks — all languages, titles                     | IBM Plex Mono                                 |
| Banners — Dismissible Alert style, semantic icons       | 5 types: note / tip / info / warning / danger |
| Tables — full-width desktop, scroll mobile              | Automatic                                     |
| Cards — rounded-2xl, dark shadow, hover                 | `<div class="card">`                          |
| Tags                                                    | `<span class="tag">`                          |
| Details / summary — accordion style                     | `<details><summary>`                          |
| TOC — H2/H3 hierarchy + active pill                     | Right panel                                   |
| Blockquote — brand left border                          | `>` markdown syntax                           |
| `<kbd>` — chip style                                    | `<kbd>Ctrl</kbd>`                             |
| Images — rounded-xl, shadow                             | `![alt](src)`                                 |
| `<abbr title>` — tooltip on hover                       | `<abbr title="...">`                          |
| Back-to-top + progress bar                              | Automatic                                     |
| Algolia DocSearch                                       | `--docsearch-*` variables                     |
| Local search (easyops-cn)                               | `--search-local-*` variables                  |
| Announcement bar                                        | `themeConfig.announcementBar`                 |
| Smooth dark/light transition                            | Automatic                                     |

### Utility classes

For use in MDX pages (`className=` in JSX context):

| Class                                                                | Purpose                     |
| -------------------------------------------------------------------- | --------------------------- |
| `.btn` `.btn-primary` `.btn-secondary` `.btn-danger`                 | CTA buttons                 |
| `.btn-sm` `.btn-lg`                                                  | Button sizes                |
| `.badge-new` `.badge-beta` `.badge-deprecated` `.badge-experimental` | Release lifecycle labels    |
| `.method-get/post/put/delete/patch`                                  | HTTP method labels          |
| `.status-ok/warn/crit/unknown`                                       | Operational health labels   |
| `ol.steps`                                                           | Numbered procedure guide    |
| `ul.timeline`                                                        | Version history / changelog |
| `ul.list-check`                                                      | Feature checklist           |

---

## Sidebar icons

Add `className: 'sidebar-cat-*'` to any category in `sidebars.js`:

```js title="sidebars.js"
{
  type: 'category',
  label: 'Getting Started',
  className: 'sidebar-cat-rocket',
  items: ['getting-started'],
}
```

Available icons: `rocket` `monitor` `pencil` `puzzle` `sliders` `folder` `server` `database` `layers` `grid` `code`

---

## Customization

Override any CSS variable in `custom.css`:

```css title="src/css/custom.css"
:root {
  --ifm-color-primary: #e11d48;
  --ifm-color-primary-dark: #be123c;
  --ifm-color-primary-darker: #9f1239;
  --ifm-color-primary-darkest: #881337;
  --ifm-color-primary-light: #fb7185;
  --ifm-color-primary-lighter: #fda4af;
  --ifm-color-primary-lightest: #ffe4e6;
}
```

---

## Development

```bash
make install         # install devDependencies
make lint            # CSS + JS + Markdown + format + MDX class= check
make security        # npm audit + no-runtime-deps
make demo-build      # build demo static site
make demo-check      # verify 12 key pages exist in build output
make demo-start      # dev server at http://localhost:3000
make docker-up       # demo in Docker at http://localhost:3000
```

---

## License

[MIT](LICENSE) — © SckyzO
