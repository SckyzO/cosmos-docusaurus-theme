---
id: typography
title: Typography
sidebar_position: 4
---

# Typography

The theme ships **Outfit** as the body typeface and **JetBrains Mono** for all
code, both loaded from Google Fonts.

## Type scale

| Token                       | Value      | Usage                         |
|-----------------------------|------------|-------------------------------|
| `--ifm-font-size-base`      | `16.5px`   | Body text                     |
| `--ifm-h1-font-size`        | `2.2rem`   | Page title                    |
| `--ifm-h2-font-size`        | `1.6rem`   | Section heading               |
| `--ifm-h3-font-size`        | `1.25rem`  | Sub-section heading           |
| `--ifm-code-font-size`      | `93%`      | Inline code                   |
| `--ifm-line-height-base`    | `1.7`      | Body line height              |
| `--ifm-font-weight-bold`    | `600`      | Bold weight (semi-bold)       |

## Font families

```css
/* Body */
--ifm-font-family-base: 'Outfit', system-ui, -apple-system, sans-serif;

/* Code */
--ifm-font-family-monospace: 'JetBrains Mono', 'Fira Code', monospace;
```

## Overriding the font

You can switch to any Google Font by overriding the variables after importing
the theme:

```css title="src/css/custom.css"
/* Load Inter from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --ifm-font-family-base: 'Inter', system-ui, sans-serif;
}
```

## Outfit OpenType features

The theme enables four OpenType features on `<html>` for improved legibility
with Outfit:

```css
html {
  font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
  -webkit-font-smoothing: antialiased;
}
```

These activate Outfit's alternate glyph variants, giving a cleaner look to
characters like `a`, `g`, `l` and `i` at small sizes.

## Prose example

Lorem ipsum dolor sit amet, **consectetur adipiscing elit**. Sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut *aliquip ex ea commodo*
consequat.

Duis aute irure dolor in reprehenderit in `voluptate velit` esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
in culpa qui officia deserunt mollit anim id est laborum.
