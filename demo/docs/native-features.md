---
id: native-features
title: Native Docusaurus Features
sidebar_position: 6
---

# Native Docusaurus Features

The theme provides styling for every native Docusaurus element — no configuration
required beyond installing the package.

## Progress bar

The page-loading progress bar uses the brand color automatically.

```css title="Controlled by"
--docusaurus-progress-bar-color: #465fff;  /* light */
--docusaurus-progress-bar-color: #7592ff;  /* dark  */
```

## Announcement bar

Add a dismissible banner above the navbar via `themeConfig.announcementBar`:

```js title="docusaurus.config.js"
themeConfig: {
  announcementBar: {
    id: 'new-release',
    content: '🎉 v1.1.0 is out — <a href="/changelog">see what\'s new</a>',
    isCloseable: true,
  },
},
```

The theme styles it with the brand indigo color (dark-friendly).

## Breadcrumbs

Automatically styled — active crumb uses brand color, items have a subtle hover
background. No configuration needed.

## Tabs

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
</Tabs>

## Cards

<div class="card" style={{padding: '16px 20px', marginBottom: '12px'}}>

**Card title**

Cards get a styled border, rounded corners and a hover effect.
Use them freely in MDX with `<div class="card">`.

</div>

<div class="card" style={{padding: '16px 20px'}}>

**Another card**

Hover me to see the brand-colored border appear.

</div>

## Tags

<span class="tag">docusaurus</span>&nbsp;
<span class="tag">css-only</span>&nbsp;
<span class="tag">dark-mode</span>&nbsp;
<span class="tag">infima</span>

```mdx
<span class="tag">docusaurus</span>
<span class="tag">css-only</span>
```

## Back-to-top button

Enabled in `docusaurus.config.js`:

```js title="docusaurus.config.js"
themeConfig: {
  docs: {
    sidebar: { autoCollapseCategories: true },
  },
}
```

The button uses the brand indigo color and has a hover state.

## Algolia DocSearch

When Algolia is configured, the search modal is fully styled to match the
Void/Slate palette — dark modal, brand-colored highlights.

```js title="docusaurus.config.js"
themeConfig: {
  algolia: {
    appId: 'YOUR_APP_ID',
    apiKey: 'YOUR_SEARCH_API_KEY',
    indexName: 'YOUR_INDEX_NAME',
  },
},
```

All `--docsearch-*` variables are overridden for both light and dark modes.
