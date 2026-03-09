# cosmos-docusaurus-theme

[![npm version](https://img.shields.io/npm/v/cosmos-docusaurus-theme.svg)](https://www.npmjs.com/package/cosmos-docusaurus-theme)
[![npm downloads](https://img.shields.io/npm/dm/cosmos-docusaurus-theme.svg)](https://www.npmjs.com/package/cosmos-docusaurus-theme)
[![CI](https://github.com/SckyzO/cosmos-docusaurus-theme/actions/workflows/ci.yml/badge.svg)](https://github.com/SckyzO/cosmos-docusaurus-theme/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A clean, dark-first Docusaurus theme based on the [TailAdmin](https://tailadmin.com) design system.

- **CSS-only** — no swizzled components, no JavaScript
- **Dark mode first-class** (default), full light mode support
- **Outfit** + **JetBrains Mono** typography
- **Indigo** brand palette (`#465fff`) mapped to Infima variables
- Compatible with **Docusaurus 3+**

**[Live Demo](https://sckyzo.github.io/cosmos-docusaurus-theme)**

---

## Screenshots

> Light and dark mode — navbar, sidebar, code blocks, admonitions

<!-- Screenshots are added after the first gh-pages deployment -->

---

## Installation

```bash
npm install cosmos-docusaurus-theme
```

## Usage

Register it as a Docusaurus theme plugin in `docusaurus.config.js`:

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

The CSS is injected automatically. No `customCss` entry needed.

### Alternative — direct CSS import

If you prefer to control injection manually:

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

Override any Infima variable after the theme import:

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

/* Adjust sidebar width */
:root {
  --ifm-sidebar-width: 320px;
  --doc-sidebar-width: 320px;
}
```

---

## Utility classes

The theme ships optional utility classes for API and operational docs:

| Class            | Usage                                  |
|------------------|----------------------------------------|
| `.method-get`    | HTTP GET label (green, monospace)      |
| `.method-post`   | HTTP POST label (blue, monospace)      |
| `.method-put`    | HTTP PUT label (orange, monospace)     |
| `.method-delete` | HTTP DELETE label (red, monospace)     |
| `.method-patch`  | HTTP PATCH label (purple, monospace)   |
| `.status-ok`     | OK state (green, bold)                 |
| `.status-warn`   | WARN state (orange, bold)              |
| `.status-crit`   | CRIT state (red, bold)                 |
| `.status-unknown`| UNKNOWN state (gray, bold)             |

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
