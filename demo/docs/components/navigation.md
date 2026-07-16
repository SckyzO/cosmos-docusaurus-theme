---
title: Navigation
sidebar_position: 7
---

# Navigation

## Breadcrumb

The breadcrumb trail above each page uses a ChevronRight SVG separator and brand-color hover.
Inactive items are muted gray, the active (current) item uses brand indigo.

The breadcrumb on this page renders as:

> Home › Components › Navigation

This is generated automatically from the sidebar hierarchy and needs no manual configuration.

## Pagination

The previous and next links at the bottom of each doc page have:

- `border-radius: 8px` (rounded-lg)
- Brand-color hover with a subtle ring
- Monospace uppercase sublabel (`PREVIOUS` / `NEXT`)

Navigate to an adjacent page to see it.

## Configuring breadcrumbs

Breadcrumbs are enabled by default and generated from the sidebar hierarchy. To disable them globally, set `breadcrumbs: false` in the docs preset options:

```js title="docusaurus.config.js"
presets: [
  ['classic', {
    docs: {
      breadcrumbs: false,
    },
  }],
],
```
