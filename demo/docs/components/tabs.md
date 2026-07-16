---
title: Tabs
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tabs

Flat underline style: a `border-bottom` indicator, brand color on the active tab, no background fill.

## Package manager

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

## Dark / light palette reference

<Tabs>
  <TabItem value="dark" label="Void (dark)" default>

The **Void** palette uses Tailwind gray-950/900/800 blacks, with no blue tint.

```css
--ifm-background-color:         #030712; /* gray-950 */
--ifm-background-surface-color: #111827; /* gray-900 */
--ifm-font-color-base:          #e5e5e5;
--ifm-toc-border-color:         #1f2937; /* gray-800 */
```

  </TabItem>
  <TabItem value="light" label="Slate (light)">

The **Slate** palette uses gray-50/white backgrounds with warm brown text tones.

```css
--ifm-background-color:         #f9fafb; /* gray-50 */
--ifm-background-surface-color: #ffffff;
--ifm-font-color-base:          #1a1714; /* warm near-black */
--ifm-toc-border-color:         #e5e7eb; /* gray-200 */
```

  </TabItem>
  <TabItem value="brand" label="Brand">

The brand color is **indigo `#465fff`**, with the lighter variant `#7592ff` in dark mode.

```css
--ifm-color-primary:       #465fff; /* light mode */
--ifm-color-primary:       #7592ff; /* dark mode  */
```

  </TabItem>
</Tabs>

## With code comparison

<Tabs groupId="framework">
  <TabItem value="react" label="React" default>

```js
// docusaurus.config.js
export default {
  themes: ['cosmos-docusaurus-theme'],
};
```

  </TabItem>
  <TabItem value="vue" label="Vue / Vuepress">

```js
// Not applicable: cosmos-docusaurus-theme is Docusaurus-specific.
// For VitePress, use the raw CSS import:
import 'cosmos-docusaurus-theme/css/theme.css';
```

  </TabItem>
</Tabs>

## Synced tabs

Tabs with the same `groupId` stay in sync across all instances on the page.

<Tabs groupId="framework">
  <TabItem value="react" label="React" default>

Synced with the tab above: clicking **Vue** there also selects it here.

  </TabItem>
  <TabItem value="vue" label="Vue / Vuepress">

Both tab groups switch together when `groupId` matches.

  </TabItem>
</Tabs>
