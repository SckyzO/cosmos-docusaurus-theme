---
title: Navigation
sidebar_position: 7
---

# Navigation

## Breadcrumb

The breadcrumb trail above each page uses a **ChevronRight** SVG separator and brand-color hover.
Inactive items are muted gray, the active (current) item uses brand indigo.

The breadcrumb on this page renders as:

> Home › Components › Navigation

This is generated automatically from the sidebar hierarchy. No manual configuration needed.

## Pagination

The previous/next navigation at the bottom of each doc page. Styled with:

- `border-radius: 8px` — rounded-lg
- Brand color on hover with a subtle ring
- Monospace uppercase sublabel (`PREVIOUS` / `NEXT`)

Navigate to any adjacent page to see it in action. ↓

## Configuring breadcrumb depth

In `docusaurus.config.js`, the breadcrumb is enabled by default. To hide it on specific pages:

```yaml
---
hide_table_of_contents: true
---
```

Or disable globally:

```js title="docusaurus.config.js"
presets: [
  ['classic', {
    docs: {
      breadcrumbs: false,
    },
  }],
],
```
