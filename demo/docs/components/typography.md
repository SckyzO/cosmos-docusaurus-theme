---
title: Typography
sidebar_position: 2
---

# Typography

## Headings

# Heading 1 — Page title
## Heading 2 — Major section
### Heading 3 — Sub-section
#### Heading 4 — Detail level
##### Heading 5
###### Heading 6

## Body text

Regular paragraph text rendered in **Outfit** at 16.5px / line-height 1.7. Long-form prose is comfortable at full width across both Void (dark) and Slate (light) themes.

**Bold** text uses `font-weight: 600` — readable without being heavy. *Italic* for emphasis.
~~Strikethrough~~ for deprecated or removed content.

## Inline code

Use `inline code` for commands, file paths, and short snippets. Styled with JetBrains Mono, subtle background, and border.

```
`file path`, `variable`, `command --flag`
```

## Keyboard keys `<kbd>`

Keyboard shortcuts rendered as chip-style keys with a subtle 3D border:

Press <kbd>Ctrl</kbd> + <kbd>K</kbd> to open the search bar.

Press <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> to open the command palette.

```mdx
Press <kbd>Ctrl</kbd> + <kbd>K</kbd> to open the search bar.
```

## Blockquote

> Use blockquotes for pull quotes, context notes, and referenced content. The left-border accent ties to the brand color.

> **Note**: Blockquotes inherit the brand indigo left border and a subtle tint background — both modes.

```mdx
> This is a blockquote with a **bold** element inside.
```

## Horizontal rule

---

Rules are thin, low-contrast, and non-distracting.

## Abbreviations `<abbr>` with tooltip

Hover any abbreviation to see a styled tooltip:

The <abbr title="HyperText Markup Language">HTML</abbr> document uses <abbr title="Cascading Style Sheets">CSS</abbr> for visual styling, and <abbr title="PromQL — Prometheus Query Language">PromQL</abbr> for metric expressions.

```mdx
<abbr title="PromQL — Prometheus Query Language">PromQL</abbr>
```

## Inline HTML elements

| Element | Render |
| --- | --- |
| `<mark>` | <mark>highlighted text</mark> |
| `<sup>` | E = mc<sup>2</sup> |
| `<sub>` | H<sub>2</sub>O |
| `<del>` | <del>deprecated method</del> |
| `<ins>` | <ins>replacement text</ins> |
