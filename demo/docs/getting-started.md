---
id: getting-started
title: Getting Started
sidebar_position: 1
slug: /
---

# Getting Started

**Cosmos Docusaurus Theme** is a CSS-only theme plugin for [Docusaurus 3](https://docusaurus.io).
It maps the [TailAdmin](https://tailadmin.com) design system onto Docusaurus Infima variables —
no component swizzling, no JavaScript, just clean CSS.

## Installation

```bash
npm install cosmos-docusaurus-theme
```

## Setup

Register it as a Docusaurus theme in your `docusaurus.config.js`:

```js title="docusaurus.config.js"
export default {
  // highlight-start
  themes: ['cosmos-docusaurus-theme'],
  // highlight-end
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
  },
};
```

That is all. The theme CSS is injected automatically via `getClientModules()`.

:::tip Backwards-compatible usage
If you prefer not to use the `themes` array, you can still import the CSS directly:
```js
theme: {
  customCss: [require.resolve('cosmos-docusaurus-theme/css/theme.css')],
}
```
:::

## What's included

| Element         | Styled |
|-----------------|:------:|
| Navbar          | ✅     |
| Sidebar         | ✅     |
| Code blocks     | ✅     |
| Admonitions     | ✅     |
| Tables          | ✅     |
| Pagination      | ✅     |
| Footer          | ✅     |
| Scrollbar       | ✅     |
| Typography      | ✅     |
| Dark / Light    | ✅     |

## Requirements

- Docusaurus **3.0+**
- Node.js **18+**
