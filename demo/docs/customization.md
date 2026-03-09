---
id: customization
title: Customization
sidebar_position: 2
---

# Customization

The theme uses standard Infima CSS variables. Override any of them after importing
the theme in your own `custom.css`.

## Changing the brand color

```css title="src/css/custom.css"
@import 'cosmos-docusaurus-theme';

/* Replace the indigo palette with your own brand color */
:root {
  --ifm-color-primary:         #e11d48;
  --ifm-color-primary-dark:    #be123c;
  --ifm-color-primary-darker:  #9f1239;
  --ifm-color-primary-darkest: #881337;
  --ifm-color-primary-light:   #fb7185;
  --ifm-color-primary-lighter: #fda4af;
  --ifm-color-primary-lightest:#ffe4e6;
}
```

:::tip Color generator
Use the [Docusaurus color generator](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima)
to get the full scale from a single hex value.
:::

## Changing the font

```css title="src/css/custom.css"
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --ifm-font-family-base: 'Inter', system-ui, sans-serif;
}
```

## Adjusting sidebar width

```css title="src/css/custom.css"
:root {
  --ifm-sidebar-width: 320px;
  --doc-sidebar-width: 320px;
}
```

## Dark background overrides

```css title="src/css/custom.css"
[data-theme='dark'] {
  --ifm-background-color:         #0a0e17;
  --ifm-background-surface-color: #111827;
  --ifm-navbar-background-color:  #111827;
}
```

## Available CSS variables

Below are the key variables exposed by the theme. All standard
[Infima variables](https://infima.dev/docs/variables) are also available.

```css
/* Brand */
--ifm-color-primary
--ifm-color-primary-dark / -darker / -darkest
--ifm-color-primary-light / -lighter / -lightest

/* Typography */
--ifm-font-family-base
--ifm-font-family-monospace
--ifm-font-size-base
--ifm-line-height-base

/* Layout */
--ifm-navbar-height
--ifm-sidebar-width
--doc-sidebar-width

/* Surfaces (dark mode) */
--ifm-background-color
--ifm-background-surface-color
--ifm-navbar-background-color
--ifm-footer-background-color
```
