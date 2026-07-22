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

- **Void** dark palette: deep neutral blacks (`#030712 / #111827`) with indigo accents
- **Slate** light palette: gray-50/white surfaces with warm brown text tones, not cold blue-gray
- **Outfit** display typeface and **IBM Plex Mono** for code, self-hosted as woff2 (no Google Fonts CDN, so GDPR and CSP friendly)
- Zero JavaScript and no swizzled components: a pure CSS override of Docusaurus Infima
- Every native Docusaurus element styled out of the box
- Utility classes for MDX pages: buttons, badges, steps, timeline, check lists

Built for Docusaurus 3 and verified against the v4 future flags, including
Docusaurus Faster (Rspack) and CSS cascade layers.

---

## Screenshots

> Dark mode: Void palette

![Dark mode](https://raw.githubusercontent.com/SckyzO/cosmos-docusaurus-theme/main/docs/screenshots/dark.png)

> Light mode: Slate palette

![Light mode](https://raw.githubusercontent.com/SckyzO/cosmos-docusaurus-theme/main/docs/screenshots/light.png)

> Banners: Dismissible Alert style, semantic icons, full border

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

Styled automatically, with no configuration needed:

| Element                                                  | Notes                                         |
| -------------------------------------------------------- | --------------------------------------------- |
| Navbar: wordmark, ghost buttons, thin vertical separator | Brand indigo title                            |
| Sidebar: icons, sub-menu line, version badge             | `className: 'sidebar-cat-*'` for icons        |
| Breadcrumb: ChevronRight separator, brand hover          | Automatic                                     |
| Tabs: flat underline, brand active                       | `import Tabs from '@theme/Tabs'`              |
| Pagination: monospace sublabel, brand hover              | Automatic prev / next                         |
| Code blocks: all languages, titles                       | IBM Plex Mono                                 |
| Banners: Dismissible Alert style, semantic icons         | 5 types: note / tip / info / warning / danger |
| Tables: full-width desktop, scroll mobile                | Automatic                                     |
| Cards: rounded-2xl, dark shadow, hover                   | `<div class="card">`                          |
| Tags                                                     | `<span class="tag">`                          |
| Details / summary: accordion style                       | `<details><summary>`                          |
| TOC: H2/H3 hierarchy + active pill                       | Right panel                                   |
| Blockquote: brand left border                            | `>` markdown syntax                           |
| `<kbd>`: chip style                                      | `<kbd>Ctrl</kbd>`                             |
| Images: rounded-xl, shadow                               | `![alt](src)`                                 |
| `<abbr title>`: tooltip on hover                         | `<abbr title="...">`                          |
| Back-to-top + progress bar                               | Automatic                                     |
| Algolia DocSearch                                        | `--docsearch-*` variables                     |
| Local search (easyops-cn)                                | `--search-local-*` variables                  |
| Announcement bar                                         | `themeConfig.announcementBar`                 |
| Smooth dark/light transition                             | Automatic                                     |

### Utility classes

For use in MDX pages (`className=` in JSX context):

| Class                                                                | Purpose                     |
| -------------------------------------------------------------------- | --------------------------- |
| `.btn` `.btn-primary` `.btn-secondary` `.btn-danger`                 | CTA buttons                 |
| `.btn-sm` `.btn-lg`                                                  | Button sizes                |
| `.badge-new` `.badge-beta` `.badge-deprecated` `.badge-experimental` | Release lifecycle labels    |
| `.method-get/post/put/delete/patch`                                  | HTTP method labels          |
| `.status-ok/warn/crit/unknown` (aliases: `.state-*`)                 | Operational health labels   |
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

Load a `custom.css` of your own through the classic preset. It applies on top
of the theme:

```js title="docusaurus.config.js"
presets: [
  ['classic', {
    theme: { customCss: require.resolve('./src/css/custom.css') },
  }],
],
```

### Recolor the brand

The brand indigo lives in one place. Override two variables and the whole theme
(links, active states, buttons, tints) follows, in both light and dark:

```css title="src/css/custom.css"
:root {
  --cosmos-brand: #e11d48; /* light-mode accent */
  --cosmos-brand-rgb: 225, 29, 72; /* same color, for translucent fills */
}

[data-theme='dark'] {
  --cosmos-brand-light: #fb7185; /* dark-mode accent (lighter for contrast) */
  --cosmos-brand-light-rgb: 251, 113, 133;
}
```

You can still override the full Infima palette (`--ifm-color-primary`,
`--ifm-color-primary-dark`, …) the usual way if you need finer control.

### Overriding styles, not just colors

The theme leans on `!important` in places to win against Infima and Docusaurus
CSS-module classes. Variable overrides above cascade normally, but if you
override a concrete property (padding, radius, a specific selector) and it does
not take, match the theme's specificity or add `!important` to your rule.

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

## Known limitations

- **Localized sites (i18n).** The color-mode toggle's ghost-button border and
  hover tooltip are matched on the button's English `aria-label`
  (`"dark and light mode"`). On a site running in another locale, Docusaurus
  translates that label, so those two touches do not apply. The toggle itself
  still works and its sun/moon icon coloring (class-based) is unaffected.
  Everything else in the theme is language-agnostic.

---

## License

[MIT](LICENSE) © SckyzO

Bundled fonts (Outfit, IBM Plex Mono) are licensed separately under the
[SIL Open Font License 1.1](src/css/fonts/OFL.txt).
