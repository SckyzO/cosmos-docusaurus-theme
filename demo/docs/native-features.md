---
id: native-features
title: What's Styled
sidebar_position: 4
---

# What's Styled

Every native Docusaurus element covered by the theme — applied automatically, no configuration needed.

## Navbar

The navbar uses a **ghost button** style for all right-side items. The brand area has a `|` separator and the site title renders as a wordmark.

Key CSS variables:
```css
--ifm-navbar-height:           72px;
--ifm-navbar-link-color:       /* warm dark / neutral light */
--ifm-navbar-link-hover-color: #465fff;
```

## Sidebar

Category icons via `className` in `sidebars.js`:

```js title="sidebars.js"
{
  type: 'category',
  label: 'Getting Started',
  className: 'sidebar-cat-rocket',   // ← adds Lucide rocket icon
  items: ['getting-started'],
}
```

Available icon classes: `rocket` `monitor` `pencil` `puzzle` `sliders` `folder` `server` `database` `layers` `grid` `code`

The sidebar also shows a **version badge** pinned at the bottom (reads from `package.json` automatically via `injectHtmlTags()`).

## Breadcrumb

ChevronRight separator, brand hover, muted inactive trail — automatic.

> Home › Documentation › Getting Started

## Tabs

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="dark" label="Dark (Void)" default>

Deep neutral blacks — Tailwind gray-950/900/800, no blue tint.

```css
--ifm-background-color: #030712;         /* gray-950 */
--ifm-background-surface-color: #111827; /* gray-900 */
```

  </TabItem>
  <TabItem value="light" label="Light (Slate)">

Warm white backgrounds — brown-toned text, not cold blue-gray.

```css
--ifm-background-color: #f9fafb;  /* gray-50 */
--ifm-font-color-base:  #1a1714;  /* warm near-black */
```

  </TabItem>
</Tabs>

## Admonitions

Five types — Toast Showcase style: icon pinned left, semantic title, muted body.

:::note
Neutral context — supplementary information that's good to know.
:::

:::tip
Best practice, shortcut, or recommended approach.
:::

:::info
Contextual guidance or clarification.
:::

:::warning
May cause unexpected behavior or data loss if ignored.
:::

:::danger
Destructive, irreversible, or security-critical operation.
:::

## Cards

<div className="card" style={{padding: '16px 20px', marginBottom: '12px'}}>

**Styled card**

Border, `border-radius: 16px`, dark shadow, brand border on hover.

</div>

```mdx
<div class="card">Your content</div>
```

## Tags

<span className="tag">docusaurus</span>&nbsp;
<span className="tag">css-only</span>&nbsp;
<span className="tag">dark-first</span>&nbsp;
<span className="tag">void-palette</span>

```mdx
<span class="tag">docusaurus</span>
```

## Details / Accordion

<details>
<summary>How does the sidebar version badge work?</summary>

The `injectHtmlTags()` lifecycle hook reads `version` from `package.json` and injects:
```html
<style>:root { --cosmos-version: "cosmos v2.x.x"; }</style>
```
The sidebar `::after` pseudo-element uses `content: var(--cosmos-version)`.

</details>

## Keyboard keys

Press <kbd>Ctrl</kbd> + <kbd>K</kbd> to open search. Press <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> for the command palette.

## Blockquote

> Use `>` markdown syntax for pull-quotes and context notes. The left border uses the brand indigo accent.

## Progress bar & announcement bar

```js title="docusaurus.config.js"
themeConfig: {
  announcementBar: {
    id: 'v2',
    content: 'cosmos v2.1.0 is out — <a href="/changelog">see what\'s new</a>',
    isCloseable: true,
  },
},
```

The progress bar color is controlled by `--docusaurus-progress-bar-color` (set to brand indigo automatically).

## Algolia DocSearch

All `--docsearch-*` variables are overridden for both Void (dark) and Slate (light). No extra configuration needed.

```js title="docusaurus.config.js"
themeConfig: {
  algolia: {
    appId: 'YOUR_APP_ID',
    apiKey: 'YOUR_SEARCH_API_KEY',
    indexName: 'YOUR_INDEX_NAME',
  },
},
```
