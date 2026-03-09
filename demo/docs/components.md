---
id: components
title: Components Showcase
sidebar_position: 3
---

# Components Showcase

This page demonstrates every element styled by the theme.

## Headings

# Heading 1 — The quick brown fox
## Heading 2 — Jumped over the lazy dog
### Heading 3 — Pack my box with five dozen liquor jugs
#### Heading 4 — Sphinx of black quartz, judge my vow

---

## Code blocks

### Shell

```bash
npm install cosmos-docusaurus-theme
docker compose up -d
git commit -m "feat: add cosmos theme"
```

### JavaScript

```js title="docusaurus.config.js"
export default {
  themes: ['cosmos-docusaurus-theme'],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
  },
};
```

### YAML

```yaml title="docker-compose.yml"
services:
  docs:
    image: node:20-alpine
    working_dir: /app
    command: npm run start
    ports:
      - "3000:3000"
    volumes:
      - .:/app
```

### TypeScript with highlighted lines

```ts title="src/theme/index.ts"
import type { Plugin } from '@docusaurus/types';

// highlight-start
export default function cosmosTheme(): Plugin {
  return {
    name: 'cosmos-docusaurus-theme',
    getClientModules: () => ['./css/theme.css'],
  };
}
// highlight-end
```

---

## Admonitions

:::note
This is a **note**. Used for neutral supplementary information.
:::

:::tip
This is a **tip**. Perfect for best practices and shortcuts.
:::

:::info
This is an **info** block. Great for contextual guidance.
:::

:::warning
This is a **warning**. Use sparingly — reserve for real caution.
:::

:::danger
This is a **danger** block. Reserved for destructive or irreversible actions.
:::

---

## Tables

| Package                   | Version  | License | Downloads/month |
|---------------------------|----------|---------|-----------------|
| `cosmos-docusaurus-theme` | `1.0.0`  | MIT     | —               |
| `@docusaurus/core`        | `3.7.0`  | MIT     | 800k+           |
| `stylelint`               | `16.0.0` | MIT     | 5M+             |
| `prism-react-renderer`    | `2.4.0`  | MIT     | 1M+             |

---

## Inline code and badges

Install with `npm install cosmos-docusaurus-theme` or load from `themes` in your config.

The theme targets `[data-theme='dark']` for dark mode and `:root` for light mode.

<span class="badge badge--success">stable</span>&nbsp;
<span class="badge badge--warning">beta</span>&nbsp;
<span class="badge badge--danger">deprecated</span>

---

## Utility classes

### HTTP method labels

<span class="method-get">GET</span> `/api/theme/info`

<span class="method-post">POST</span> `/api/theme/apply`

<span class="method-put">PUT</span> `/api/theme/update`

<span class="method-delete">DELETE</span> `/api/theme/reset`

<span class="method-patch">PATCH</span> `/api/theme/partial`

### Status labels

System status: <span class="status-ok">OK</span>

Degraded performance: <span class="status-warn">WARN</span>

Service outage: <span class="status-crit">CRIT</span>

No data available: <span class="status-unknown">UNKNOWN</span>

---

## Blockquote

> "Good design is as little design as possible."
>
> — Dieter Rams

---

## Lists

### Unordered

- Outfit as the primary typeface
- JetBrains Mono for code
- Indigo brand palette from TailAdmin
- Dark mode first-class

### Ordered

1. Install the package via npm
2. Add `cosmos-docusaurus-theme` to the `themes` array
3. Set `defaultMode: 'dark'` in `colorMode`
4. Restart the dev server

### Nested

- Theme variables
  - Color palette
  - Typography scale
  - Spacing tokens
- Component styles
  - Navbar & sidebar
  - Code blocks & admonitions
  - Tables & pagination
