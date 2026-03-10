---
id: getting-started
title: Getting Started
sidebar_position: 1
slug: /
---

# Getting Started

**Cosmos Docusaurus Theme** is a CSS-only theme plugin for [Docusaurus 3](https://docusaurus.io).
Aligned with the Rackscope Void/Slate design system — no component swizzling,
no JavaScript, just clean CSS.

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
```

Open **http://localhost:3000** — the full demo site runs with the theme.

  </TabItem>
</Tabs>

## Setup

Register as a Docusaurus theme plugin in `docusaurus.config.js`:

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

The CSS is injected automatically via `getClientModules()`. No `customCss` entry needed.

:::tip Alternative — direct CSS import
```js
theme: {
  customCss: [require.resolve('cosmos-docusaurus-theme/css/theme.css')],
}
```
:::

## Docker

The repository ships a `docker-compose.yml` for a zero-install preview
of the theme with the full demo site.

```bash
# Clone and start
git clone https://github.com/SckyzO/cosmos-docusaurus-theme.git
cd cosmos-docusaurus-theme
docker compose up

# Or pull the image directly (once published)
docker run -p 3000:3000 ghcr.io/sckyzo/cosmos-docusaurus-theme:latest
```

Open **[http://localhost:3000](http://localhost:3000)** — the full component showcase runs instantly.

## What's included

| Element | Styled |
|---|:---:|
| Navbar + toggle button | ✅ |
| Sidebar + section labels | ✅ |
| Code blocks (all languages) | ✅ |
| Admonitions — AlertBanner style | ✅ |
| Tables | ✅ |
| Tabs + Details/summary | ✅ |
| Cards | ✅ |
| Tags + Badges | ✅ |
| Pagination | ✅ |
| Breadcrumbs | ✅ |
| Footer | ✅ |
| Back-to-top + Progress bar | ✅ |
| Algolia DocSearch | ✅ |
| Smooth dark/light transition | ✅ |
| Scrollbar (4px) | ✅ |

## Requirements

- Docusaurus **3.0+**
- Node.js **18+**
- Docker (optional — for zero-install preview)
