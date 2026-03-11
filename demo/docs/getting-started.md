---
id: getting-started
title: Getting Started
sidebar_position: 1
slug: /
---

# Getting Started

**cosmos** is a CSS-only theme plugin for [Docusaurus 3](https://docusaurus.io) — aligned with the Rackscope Void/Slate design system.
No component swizzling, no JavaScript, pure CSS.

:::tip Zero config
Drop it in and every Docusaurus native element is styled automatically. No `customCss` entry needed.
:::

## Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install cosmos-docusaurus-theme
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add cosmos-docusaurus-theme
```

  </TabItem>
  <TabItem value="pnpm" label="pnpm">

```bash
pnpm add cosmos-docusaurus-theme
```

  </TabItem>
  <TabItem value="docker" label="Docker">

```bash
git clone https://github.com/SckyzO/cosmos-docusaurus-theme.git
cd cosmos-docusaurus-theme
docker compose up
# → http://localhost:3000
```

  </TabItem>
</Tabs>

## Setup

Add the theme to the `themes` array in `docusaurus.config.js`:

```js title="docusaurus.config.js"
export default {
  // highlight-next-line
  themes: ['cosmos-docusaurus-theme'],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
  },
};
```

:::info Alternative — direct CSS import
If you prefer to import the CSS manually instead of using the theme plugin:
```js
presets: [['classic', { theme: { customCss: ['cosmos-docusaurus-theme/css/theme.css'] } }]]
```
:::

## What's included

### Native Docusaurus elements

Everything styled automatically — no classes, no configuration required:

| Element | Notes |
| --- | --- |
| Navbar — ghost buttons, brand, toggle | COSMOS wordmark · brand indigo title |
| Sidebar — icons, sub-menu line, version badge | `className: 'sidebar-cat-*'` for icons |
| Breadcrumb — ChevronRight separator | Automatic, brand hover |
| Tabs — flat underline, brand active | `import Tabs from '@theme/Tabs'` |
| Pagination — sublabel monospace, brand hover | Automatic prev / next |
| Code blocks — all languages, titles | Line highlighting supported |
| Admonitions — Toast style, semantic icons | 5 types: note / tip / info / warning / danger |
| Tables — full-width desktop, scroll mobile | Automatic |
| Cards — rounded-2xl, dark shadow, hover | `<div className="card">` |
| Tags — pill style, brand hover | `<span className="tag">` |
| Details / summary — accordion style | `<details><summary>` |
| TOC — active pill, H2/H3 hierarchy | Right panel |
| Blockquote — brand left border | `>` markdown syntax |
| `<kbd>` — chip style, 3D border | `<kbd>Ctrl</kbd>` |
| Images — rounded-xl, shadow | `![alt](src)` in markdown |
| `<abbr title>` — tooltip on hover | `<abbr title="...">` |
| Back-to-top + progress bar | Automatic |
| Algolia DocSearch | `--docsearch-*` variables overridden |
| Local search (easyops-cn) | `--search-local-*` variables overridden |

### Utility classes (MDX)

Optional classes for MDX pages — full reference at [Utility Classes](/utility-classes):

| Class | Purpose |
| --- | --- |
| `.btn` `.btn-primary` `.btn-secondary` `.btn-danger` | CTA buttons in docs pages |
| `.badge-new` `.badge-beta` `.badge-deprecated` `.badge-experimental` | Release lifecycle labels |
| `.method-get/post/put/delete/patch` | HTTP method labels for API docs |
| `.status-ok/warn/crit/unknown` | Operational health indicators |
| `.steps` on `<ol>` | Numbered procedure guide |
| `.timeline` on `<ul>` | Version history / changelog |
| `.list-check` on `<ul>` | Feature checklist |

## Requirements

- Docusaurus **3.0+** <span className="badge-new">Required</span>
- Node.js **18+**
- Docker — optional for zero-install preview

:::note
CSS-only — no React components, no swizzling, no JavaScript runtime.
:::
