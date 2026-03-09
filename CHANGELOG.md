# Changelog

All notable changes to this project are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.5] — 2026-03-10

### Fixed

- Tooltip right-aligned (`right: 0`) so it never overflows outside the viewport
  when the toggle button is at the far right of the navbar
- Arrow adjusted to match right-aligned position

## [1.1.4] — 2026-03-10

### Fixed

- Tooltip now appears **below** the toggle button instead of above (was clipped
  by the top of the viewport since the navbar sits at the very top of the page)
- Arrow direction corrected accordingly (points up toward the button)

## [1.1.3] — 2026-03-10

### Added

- **Theme transition**: smooth 0.25s fade on `background-color`, `color`, `border-color`
  for navbar, sidebar, article, footer and cards — no more abrupt color switch
- **Color mode tooltip**: shows current mode (`dark mode` / `light mode` / `system mode`)
  on hover over the Docusaurus toggle button — styled per Void/Slate palette

## [1.1.2] — 2026-03-10

### Added

- `.state-ok`, `.state-warn`, `.state-crit`, `.state-unknown` — aliases for projects
  that use `.state-*` naming convention (identical colors to `.status-*`)

## [1.1.1] — 2026-03-09

### Fixed

- **Navbar regression**: dark mode navbar was rendering white with dark text. Root cause:
  `--ifm-navbar-background-color` CSS variable was not reliably applied in Docusaurus 3
  SSG/CSR builds. Fix: add direct CSS property overrides on `.navbar` and `.navbar__link`
  instead of relying solely on CSS custom properties.
- Dark mode navbar: `background-color: #111827` (Void gray-900) forced directly on element
- Dark mode footer: `background-color: #030712` (Void gray-950) forced directly
- Dark mode `.main-wrapper`: `background-color: #030712` forced directly
- Navbar links/brand/toggle: explicit `color: #e5e5e5` in dark mode

## [1.1.0] — 2026-03-09

### Added

- **Progress bar**: `--docusaurus-progress-bar-color` → brand indigo (light + dark)
- **Announcement bar**: brand-colored banner with styled links and close button
- **Breadcrumbs**: active crumb uses brand color with subtle hover background
- **Tabs**: styled active tab border + color, hover state on inactive tabs
- **Cards**: border, rounded corners (12px), hover effect with brand border
- **Tags**: pill style with brand-colored background and border
- **Back-to-top button**: brand indigo with hover state (both modes)
- **Algolia DocSearch**: full `--docsearch-*` variable set for light and dark
- **Demo**: now loads `cosmos-docusaurus-theme` as a real npm package (`file:..`)
  instead of a local path — exactly mirrors real consumer setup
- **Demo**: new "Native Features" page showcasing all newly styled elements

### Changed

- `demo/docusaurus.config.js`: `themes: ['cosmos-docusaurus-theme']` (was local path)
- `demo/package.json`: added `cosmos-docusaurus-theme: "file:.."` dependency

## [1.0.1] — 2026-03-09

### Fixed

- Aligned dark palette to **Void** (Tailwind gray-950/900/800 neutral blacks — not TailAdmin bluish-gray)
- Aligned light palette to **Slate** (warm brown text tones `#1a1714` / `#5c574f` — not cold blue-gray)
- Corrected all hardcoded color values in sidebar, navbar border, footer border, scrollbar
- Updated screenshots to reflect corrected palette

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
