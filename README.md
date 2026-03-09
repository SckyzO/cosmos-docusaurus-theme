# cosmos-docusaurus-theme

<div align="center">

**A clean, dark-first Docusaurus theme based on [TailAdmin](https://tailadmin.com) design system.**

[![npm version](https://img.shields.io/npm/v/cosmos-docusaurus-theme.svg?style=flat-square)](https://www.npmjs.com/package/cosmos-docusaurus-theme)
[![npm downloads](https://img.shields.io/npm/dm/cosmos-docusaurus-theme.svg?style=flat-square)](https://www.npmjs.com/package/cosmos-docusaurus-theme)
[![CI](https://github.com/SckyzO/cosmos-docusaurus-theme/actions/workflows/ci.yml/badge.svg)](https://github.com/SckyzO/cosmos-docusaurus-theme/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.x-green?style=flat-square)](https://docusaurus.io)

### [Live Demo](https://sckyzo.github.io/cosmos-docusaurus-theme/) &nbsp;·&nbsp; [Release notes](https://github.com/SckyzO/cosmos-docusaurus-theme/releases) &nbsp;·&nbsp; [npm](https://www.npmjs.com/package/cosmos-docusaurus-theme)

</div>

---

## Features

- **CSS-only** — no swizzled components, no JavaScript
- **Dark mode first-class** (default) with full light mode support
- **[Outfit](https://fonts.google.com/specimen/Outfit)** + **JetBrains Mono** typography
- **Indigo** brand palette (`#465fff`) — Void dark / Slate light design tokens
- Covers **every native Docusaurus element** out of the box:

| Element | Styled |
|---|:---:|
| Navbar + sidebar | ✅ |
| Code blocks + inline code | ✅ |
| Admonitions (note/tip/warning/danger) | ✅ |
| Tables | ✅ |
| Pagination + breadcrumbs | ✅ |
| Footer + scrollbar | ✅ |
| **Tabs** | ✅ |
| **Cards** | ✅ |
| **Tags / pill badges** | ✅ |
| **Announcement bar** | ✅ |
| **Back-to-top button** | ✅ |
| **Progress bar** | ✅ |
| **Algolia DocSearch** | ✅ |

- Optional utility classes: `.method-get/post/put/delete`, `.status-ok/warn/crit/unknown`
- Compatible with **Docusaurus 3+**

---

## Screenshots

> Dark mode (default) — Void palette: navbar, sidebar, code blocks

![Dark mode screenshot](https://raw.githubusercontent.com/SckyzO/cosmos-docusaurus-theme/main/docs/screenshots/dark.png)

> Light mode — Slate palette: Components showcase

![Light mode screenshot](https://raw.githubusercontent.com/SckyzO/cosmos-docusaurus-theme/main/docs/screenshots/light.png)

> Native features — tabs, cards, tags, breadcrumbs, DocSearch

![Native features screenshot](https://raw.githubusercontent.com/SckyzO/cosmos-docusaurus-theme/main/docs/screenshots/features.png)

> See all features live at **[sckyzo.github.io/cosmos-docusaurus-theme](https://sckyzo.github.io/cosmos-docusaurus-theme/)**

---

## Installation

```bash
npm install cosmos-docusaurus-theme
```

## Usage

Register as a Docusaurus theme plugin in `docusaurus.config.js`:

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

The CSS is injected automatically via `getClientModules()`. No `customCss` entry needed.

### Alternative — direct CSS import

```js title="docusaurus.config.js"
export default {
  presets: [
    ['classic', {
      theme: {
        customCss: [require.resolve('cosmos-docusaurus-theme/css/theme.css')],
      },
    }],
  ],
};
```

---

## Customization

Override any Infima variable in your own `custom.css` after the theme is loaded:

```css title="src/css/custom.css"
/* Change brand color */
:root {
  --ifm-color-primary:         #e11d48;
  --ifm-color-primary-dark:    #be123c;
  --ifm-color-primary-darker:  #9f1239;
  --ifm-color-primary-darkest: #881337;
  --ifm-color-primary-light:   #fb7185;
  --ifm-color-primary-lighter: #fda4af;
  --ifm-color-primary-lightest:#ffe4e6;
}

/* Change font */
:root {
  --ifm-font-family-base: 'Inter', system-ui, sans-serif;
}
```

---

## Utility classes

| Class            | Usage                               |
|------------------|-------------------------------------|
| `.method-get`    | HTTP GET label (green, monospace)   |
| `.method-post`   | HTTP POST label (blue, monospace)   |
| `.method-put`    | HTTP PUT label (orange, monospace)  |
| `.method-delete` | HTTP DELETE label (red, monospace)  |
| `.method-patch`  | HTTP PATCH label (purple, monospace)|
| `.status-ok`     | OK state (green, bold)              |
| `.status-warn`   | WARN state (orange, bold)           |
| `.status-crit`   | CRIT state (red, bold)              |
| `.status-unknown`| UNKNOWN state (gray, bold)          |

---

## Development

```bash
# Install root dependencies (stylelint)
npm install

# Lint the CSS
npm run lint

# Start the demo site locally
cd demo && npm install && npm run start
```

---

## License

[MIT](LICENSE) — © SckyzO
