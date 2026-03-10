---
id: showcase-tabs-details
title: Tabs & Details
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tabs & Details

## Basic Tabs

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

## Tabs with text content

<Tabs>
  <TabItem value="dark" label="Dark mode" default>

Uses the **Void** palette — Tailwind gray-950/900/800 neutral blacks.

```css
--ifm-background-color: #030712;        /* gray-950 */
--ifm-background-surface-color: #111827; /* gray-900 */
```

  </TabItem>
  <TabItem value="light" label="Light mode">

Uses the **Slate** palette — warm white backgrounds with brown text tones.

```css
--ifm-background-color: #f9fafb;   /* gray-50 */
--ifm-font-color-base: #1a1714;    /* warm near-black */
```

  </TabItem>
</Tabs>

## Synced Tabs (same group-id)

<Tabs groupId="pkg-manager">
  <TabItem value="npm" label="npm" default>Install</TabItem>
  <TabItem value="yarn" label="yarn">Install</TabItem>
</Tabs>

<Tabs groupId="pkg-manager">
  <TabItem value="npm" label="npm" default>

```bash
npm run build
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn build
```

  </TabItem>
</Tabs>

When both `groupId` values match, selecting a tab in one group updates all groups.

---

## Details (collapsible)

### Basic

<details>
<summary>Click to expand — advanced configuration</summary>

All `--ifm-*` CSS variables can be overridden after importing the theme.

```css
:root {
  --ifm-color-primary: #e11d48;
  --ifm-font-family-base: 'Inter', system-ui, sans-serif;
}
```

</details>

### With list inside

<details>
<summary>Supported Docusaurus elements</summary>

- Navbar + sidebar
- Code blocks (all languages)
- Admonitions (5 types)
- Tabs + grouped tabs
- Tables and lists
- Cards and badges
- Algolia DocSearch
- Back-to-top button
- Progress bar

</details>

### Nested

<details>
<summary>Outer section</summary>

This is the outer content.

<details>
<summary>Inner section</summary>

Deeply nested expandable content. Both levels respect the theme.

</details>

</details>
