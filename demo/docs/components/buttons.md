---
title: Buttons
sidebar_position: 9
---

# Buttons

`.btn-*` utility classes for MDX documentation pages — call-to-action links, download buttons, and inline actions.

## Variants

<a class="btn btn-primary" href="#">Primary action</a>&nbsp;
<a class="btn btn-secondary" href="#">Secondary</a>&nbsp;
<a class="btn btn-danger" href="#">Danger</a>

```mdx
<a class="btn btn-primary" href="/docs/getting-started">Get started</a>
<a class="btn btn-secondary" href="/docs/customization">Customize</a>
<a class="btn btn-danger" href="#">Destructive action</a>
```

## Sizes

<a class="btn btn-primary btn-sm" href="#">Small</a>&nbsp;
<a class="btn btn-primary" href="#">Default</a>&nbsp;
<a class="btn btn-primary btn-lg" href="#">Large</a>

```mdx
<a class="btn btn-primary btn-sm" href="#">Small</a>
<a class="btn btn-primary" href="#">Default</a>
<a class="btn btn-primary btn-lg" href="#">Large</a>
```

## Typical usage — landing page CTA

<div style={{display:'flex', gap:'12px', flexWrap:'wrap', marginBottom:'1rem'}}>
  <a class="btn btn-primary btn-lg" href="/docs/getting-started">Quick start →</a>
  <a class="btn btn-secondary" href="https://github.com/SckyzO/cosmos-docusaurus-theme">View on GitHub</a>
</div>

```mdx
<a class="btn btn-primary btn-lg" href="/docs/getting-started">Quick start →</a>
<a class="btn btn-secondary" href="https://github.com/...">View on GitHub</a>
```

:::tip
Use `<a>` for navigation links and `<button>` for in-page actions. Both support all `.btn-*` classes.
:::
