---
id: utility-classes
title: Utility Classes
sidebar_position: 5
---

# Utility Classes

Optional CSS classes for use in MDX pages. All included in `theme.css` — no extra import needed.

## Buttons `.btn-*`

<a className="btn btn-primary" href="#">Primary</a>&nbsp;
<a className="btn btn-secondary" href="#">Secondary</a>&nbsp;
<a className="btn btn-danger" href="#">Danger</a>

Sizes: <a className="btn btn-primary btn-sm" href="#">Small</a>&nbsp; <a className="btn btn-primary btn-lg" href="#">Large</a>

```mdx
<a class="btn btn-primary" href="/docs/getting-started">Get started</a>
<a class="btn btn-secondary" href="/docs/customization">Customize</a>
<a class="btn btn-primary btn-lg" href="#">Large CTA</a>
```

## Release badges `.badge-new/beta/deprecated/experimental`

Inline pill labels for marking feature lifecycle state.

<span className="badge-new">New</span>&nbsp;
<span className="badge-beta">Beta</span>&nbsp;
<span className="badge-deprecated">Deprecated</span>&nbsp;
<span className="badge-experimental">Experimental</span>

```mdx
## Slurm integration <span class="badge-new">New</span>
## CSV export <span class="badge-deprecated">Deprecated</span>
```

## HTTP method labels `.method-*`

<span className="method-get">GET</span> `/api/topology/rooms`

<span className="method-post">POST</span> `/api/topology/rooms`

<span className="method-put">PUT</span> `/api/topology/rooms/{id}`

<span className="method-patch">PATCH</span> `/api/topology/rooms/{id}`

<span className="method-delete">DELETE</span> `/api/topology/rooms/{id}`

```mdx
<span class="method-get">GET</span> `/api/topology/rooms`
```

## Status labels `.status-*` / `.state-*`

| Node | Status |
| --- | --- |
| `web-01` | <span className="status-ok">OK</span> |
| `db-primary` | <span className="status-warn">WARN</span> |
| `cache-01` | <span className="status-crit">CRIT</span> |
| `worker-03` | <span className="status-unknown">UNKNOWN</span> |

`.state-ok/warn/crit/unknown` are identical aliases.

## Numbered steps `<ol className="steps">`

<ol className="steps">
  <li><strong>Install</strong> — run <code>npm install cosmos-docusaurus-theme</code></li>
  <li><strong>Register</strong> — add <code>'cosmos-docusaurus-theme'</code> to the <code>themes</code> array</li>
  <li><strong>Configure</strong> — set <code>defaultMode: 'dark'</code> in <code>colorMode</code></li>
  <li><strong>Start</strong> — run <code>npm start</code> and open <a href="http://localhost:3000">localhost:3000</a></li>
</ol>

```mdx
<ol class="steps">
  <li><strong>Install</strong> — <code>npm install cosmos-docusaurus-theme</code></li>
  <li><strong>Register</strong> — add to <code>themes</code> array</li>
</ol>
```

## Timeline `<ul className="timeline">`

<ul className="timeline">
  <li><strong>v2.1.0</strong> — Buttons, steps, timeline, blockquote, kbd, tooltip, 4-col footer</li>
  <li><strong>v2.0.3</strong> — Full lint suite: ESLint, Prettier, markdownlint, Makefile</li>
  <li><strong>v2.0.2</strong> — Dynamic version badge via <code>injectHtmlTags()</code></li>
  <li><strong>v2.0.1</strong> — Tables full-width desktop, scrollable mobile</li>
  <li><strong>v2.0.0</strong> — 8 native Docusaurus components, GHCR workflow fix</li>
</ul>

```mdx
<ul class="timeline">
  <li><strong>v2.1.0</strong> — New utility classes</li>
  <li><strong>v2.0.0</strong> — Major refactor</li>
</ul>
```

## Check list `<ul className="list-check">`

<ul className="list-check">
  <li>CSS-only — no JavaScript, no React component swizzling</li>
  <li>Dark-first with full light mode support (Void + Slate palettes)</li>
  <li>Outfit + JetBrains Mono typography</li>
  <li>Every native Docusaurus element styled</li>
  <li>Sidebar icons, sub-menu line, version badge</li>
  <li>Local search (easyops-cn) palette overrides</li>
</ul>

```mdx
<ul class="list-check">
  <li>CSS-only — no JavaScript</li>
  <li>Dark-first with full light mode support</li>
</ul>
```

## Docusaurus built-in badges

<span className="badge badge--primary">primary</span>&nbsp;
<span className="badge badge--secondary">secondary</span>&nbsp;
<span className="badge badge--success">stable</span>&nbsp;
<span className="badge badge--warning">beta</span>&nbsp;
<span className="badge badge--danger">deprecated</span>

```mdx
<span class="badge badge--success">stable</span>
<span class="badge badge--warning">beta</span>
<span class="badge badge--danger">deprecated</span>
```
