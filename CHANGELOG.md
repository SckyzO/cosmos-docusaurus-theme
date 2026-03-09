# Changelog

All notable changes to this project are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] — 2024-03-09

### Added

- Initial release of `cosmos-docusaurus-theme`
- CSS-only theme based on TailAdmin design system
- Proper Docusaurus theme plugin via `getClientModules()` — use with `themes: ['cosmos-docusaurus-theme']`
- Backwards-compatible CSS import via `cosmos-docusaurus-theme/css/theme.css`
- Light and dark mode support (`[data-theme='dark']`)
- Outfit + JetBrains Mono typography loaded from Google Fonts
- Indigo brand palette (`#465fff`) mapped to Infima CSS variables
- Styled: navbar, sidebar, code blocks, admonitions, tables, pagination, footer, scrollbar
- Optional utility classes: `.method-get/post/put/delete/patch`, `.status-ok/warn/crit/unknown`
- Demo site deployed to GitHub Pages
- CI workflow: stylelint + npm audit + demo build
- Publish workflow: npm publish + GitHub Pages deploy on `v*` tags
- Dependabot for npm and GitHub Actions
