---
title: Utilities
sidebar_position: 10
---

# Utilities

Layout and content utilities for enriching documentation pages.

## Numbered steps `.steps`

Use `<ol className="steps">` for multi-step guides, install sequences, and procedures.

<ol className="steps">
  <li>
    <strong>Install the package</strong><br/>
    Run <code>npm install cosmos-docusaurus-theme</code> in your Docusaurus project.
  </li>
  <li>
    <strong>Add to themes</strong><br/>
    Edit <code>docusaurus.config.js</code> and add <code>'cosmos-docusaurus-theme'</code> to the <code>themes</code> array.
  </li>
  <li>
    <strong>Configure dark mode</strong><br/>
    Set <code>defaultMode: 'dark'</code> in <code>themeConfig.colorMode</code> for the best experience.
  </li>
  <li>
    <strong>Start your site</strong><br/>
    Run <code>npm start</code> — the theme is applied automatically.
  </li>
</ol>

```mdx
<ol class="steps">
  <li><strong>Install the package</strong><br/>Run <code>npm install …</code></li>
  <li><strong>Add to themes</strong><br/>Edit <code>docusaurus.config.js</code></li>
</ol>
```

## Timeline `.timeline`

Use `<ul className="timeline">` for changelogs, roadmaps, and versioned event sequences.

<ul className="timeline">
  <li><strong>v2.1.0</strong> — Buttons, steps, timeline, blockquote, kbd, tooltip utilities</li>
  <li><strong>v2.0.3</strong> — Makefile, ESLint, Prettier, markdownlint full lint suite</li>
  <li><strong>v2.0.2</strong> — Dynamic version badge via <code>injectHtmlTags()</code>, Dockerfile simplified</li>
  <li><strong>v2.0.1</strong> — Tables full-width on desktop, scrollable on mobile</li>
  <li><strong>v2.0.0</strong> — 8 native Docusaurus components covered, GHCR workflow fix</li>
  <li><strong>v1.2.6</strong> — Sidebar icons, sub-menu line, version badge, Ctrl+K ghost style</li>
</ul>

```mdx
<ul class="timeline">
  <li><strong>v2.1.0</strong> — New utility classes released</li>
  <li><strong>v2.0.0</strong> — Major refactor</li>
</ul>
```

## Check list `.list-check`

Use `<ul className="list-check">` for feature lists, requirements, and prerequisites.

<ul className="list-check">
  <li>Zero JavaScript — pure CSS theme override</li>
  <li>Dark-first with full light mode support</li>
  <li>Outfit + JetBrains Mono typography</li>
  <li>All native Docusaurus components styled</li>
  <li>Search (easyops-cn local) palette overrides included</li>
  <li>Sidebar icons, sub-menu line, version badge</li>
</ul>

```mdx
<ul class="list-check">
  <li>Zero JavaScript — pure CSS theme override</li>
  <li>Dark-first with full light mode support</li>
</ul>
```
