# Changelog

All notable changes to this project are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.1.2] — 2026-03-17

### Fixed

- **Mobile navbar sidebar**: `.navbar-sidebar` had no background rule —
  Infima's default rendered it white in both light and dark mode. Now
  inherits `--ifm-navbar-background-color` (correct for both themes).
- **Mobile navbar overflow**: external links (e.g. GitHub) in
  `.navbar__items--right` were visible on mobile (≤ 996px), overlapping
  the search bar. Hidden on mobile — accessible via the hamburger menu.

### Changed

- **eslint**: `9.39.4` → `10.0.3`
- **@eslint/js**: `9.39.4` → `10.0.1`
- **aquasecurity/trivy-action**: `0.30.0` → `0.35.0` (SHA pinned)

---

## [2.1.1] — 2026-03-11

### Fixed

- **Breadcrumb**: `ul.breadcrumbs { display: flex }` + `::after { content: none }` — kills Infima's
  whitespace injection between items; ChevronRight separator correctly aligned as flex child
- **Sidebar sub-menu**: corrected CSS selector from `.theme-doc-sidebar-menu .menu__list .menu__list`
  to `.menu__list > .menu__list-item > .menu__list` (direct child `>`) — matches actual DOM depth;
  `margin-left: 35px !important` aligns `|` line under category title text (measured 51.3px)
- **Sidebar sub-menu color**: `var(--ifm-menu-color)` instead of muted secondary
- **Banners (admonitions)**: reverted unsolicited CSS overrides; kept only the two requested rules:
  `[class*='admonitionHeading']:not(:last-child) { margin-bottom: 1rem }` and
  `[class*='admonitionIcon'] { display: inline-block; vertical-align: middle; margin-right: 0.4em }`
- **Demo MDX**: `class=` → `className=` in 7 files (fixes React DOM property warning)

### Added

- **`lint-mdx`** Makefile target — scans `demo/docs/**/*.md` for `class=` outside code blocks,
  preventing React prop warnings from slipping through the lint pipeline
- **`demo-check`** Makefile target — verifies 12 key pages exist in the static build output
  after `make demo-build`; more reliable than HTTP checks against the SPA dev server
- **`demo/scripts/check-pages.js`** — static build file checker used by `demo-check`
- `lint` target now includes `lint-mdx` as 5th step

## [2.1.0] — 2026-03-11

### Added

- **Banners (admonitions) — complete redesign**: Dismissible Alert style from Rackscope
  `ui-library/alerts` — uniform full border (not left-only), semantic icon colors, flex
  heading layout, `overflow: hidden` clips child shadows at rounded corners
- **Navbar COSMOS wordmark**: Outfit 700 uppercase, brand indigo `#465fff` / `#7592ff` dark;
  `|` vertical separator; active nav tab underline indicator matching Tabs style
- **Tabs**: flat underline (no border-radius), brand active state, proper dark mode vars
- **Pagination**: `rounded-lg`, monospace uppercase sublabel, brand hover ring
- **Breadcrumb**: ChevronRight SVG separator (disables Infima default), brand hover
- **Details accordion**: ChevronRight SVG arrow replacing `›` character
- **Blockquote**: brand left border + subtle tint
- **`<kbd>`**: chip style with 3D bottom border
- **Markdown images**: `border-radius: 12px` + shadow
- **`<abbr title>`**: styled tooltip on hover
- **Buttons**: `.btn` `.btn-primary` `.btn-secondary` `.btn-danger` `.btn-sm` `.btn-lg`
- **Release badges**: `.badge-new` `.badge-beta` `.badge-deprecated` `.badge-experimental`
- **Steps**: `ol.steps` — numbered procedure with circle indicators
- **Timeline**: `ul.timeline` — versioned event list with vertical line
- **Check list**: `ul.list-check` — feature list with checkmarks
- **Footer CSS**: 4-column grid, responsive (4→2→1), monospace section titles, brand colors
- **Announcement bar**: gradient indigo, improved link style
- **Favicon**: cosmos atom SVG injected via `injectHtmlTags()` with opt-out option
  `injectFavicon: false`; SVG properly `encodeURIComponent()`-encoded for `data:` URI
- **`validateOptions()`** exported — Docusaurus options validation for the theme plugin
- **Demo site restructure**: `showcase/` → `components/` (10 pages); dual navbar
  Documentation | Components; Components sidebar dedicated; `class=` → `className=` in MDX

### Changed

- **Font**: JetBrains Mono → **IBM Plex Mono** (code blocks, kbd, monospace elements)
- **Sidebar sub-menu**: `var(--ifm-menu-color)` color; `|` line aligned under title text
- **GitHub Actions**: all SHA-pinned (supply chain hardening); Node 20.19 pinned
- **CI**: Trivy vulnerability scan before Docker push; `npm ci` in all demo jobs;
  `publish.yml` runs full `npm run lint` before publish; `workflow_dispatch` default removed
- **Dockerfile**: `node:20.19-alpine3.21` (was floating `node:20-alpine`)
- **`demo/package.json`**: `@easyops-cn ^0.55` (was `latest`); `file:..` dependency
- **package.json**: description updated, removes stale "TailAdmin" reference

## [2.0.3] — 2026-03-11

### Added

- **Makefile** — developer targets: `lint`, `lint-css`, `lint-js`, `lint-md`,
  `lint-format`, `format`, `lint-fix`, `security`, `audit`, `install`,
  `demo-build`, `demo-start`, `demo-serve`, `demo-clear`, `docker-build`,
  `docker-up`, `docker-down`, `clean`
- **ESLint** (`eslint@9`, `@eslint/js`) — flat config (`eslint.config.mjs`),
  lints `src/**/*.js`; rules: `no-unused-vars` (allow `_` prefix), `no-console off`
- **Prettier** (`prettier@3`) — formats CSS, JS, JSON, MD; `.prettierrc` + `.prettierignore`
- **markdownlint-cli** (`@0.48`) — lints `*.md` and `docs/**/*.md`; `.markdownlint.json`
  with `MD024: siblings_only` (CHANGELOG-friendly), `MD013/MD033/MD041` disabled
- `npm` scripts: `lint:js`, `lint:md`, `lint:format`, `format`, `lint:fix`;
  `lint` now runs all four linters in sequence
- **CI** — `lint` job extended with JS (ESLint), Markdown, and Prettier steps

### Fixed

- `README.md`: `MD001` heading jump `###` → `##` for Live Demo link; `MD060` table
  pipe spacing on two tables; Development section updated to reference `make` commands
- `CHANGELOG.md`: `MD004` unordered list style — `+` continuation replaced with `and`
- `src/css/theme.css`: reformatted by Prettier (alignment, spacing — no logic change)

## [2.0.2] — 2026-03-11

### Added

- **Dynamic version badge** — sidebar badge now reads version from `package.json` at
  build time via `injectHtmlTags()` in `src/index.js`; no longer hardcoded in CSS.
  Consumers upgrading the package will see the correct version without any manual edit.

### Changed

- **Font weights** — Outfit loaded with 4 weights (`400;500;600;700`) instead of 6
  (`300;400;500;600;700;800`) — `300` and `800` were unused, reducing Google Fonts payload
- **demo/package.json** — `cosmos-docusaurus-theme: "latest"` → `"^2"` to prevent
  pulling an unexpected future major version at Docker build time
- **Dockerfile** — simplified: only `demo/` is copied (no longer needs the full project
  tree since `file:..` dependency is replaced by `^2` from npm); proper layer caching
  with `package.json` copied before source files
- **workflow_dispatch default** — `ref` input default updated from `v2.0.0` → `v2.0.2`

### Removed

- Hardcoded `:root { --cosmos-version: "cosmos v1.2.6" }` from `theme.css`
  (superseded by `injectHtmlTags()` injection)

## [2.0.1] — 2026-03-10

### Fixed

- **Tables full-width**: `display:table; width:100%` on desktop (>996px),
  `display:block; overflow-x:auto` on mobile — responsive, never breaks layout

## [2.0.0] — 2026-03-10

### Added — Native Docusaurus component coverage

1. **Color mode toggle icons** — sun (amber `#fbbf24`) in dark mode, moon (brand indigo `#7592ff`) in light mode via CSS `filter` colorization
2. **TOCCollapsible** — mobile table-of-contents styled as bordered card with uppercase monospace label, matching sidebar section labels
3. **DocCard / DocCardList** — auto-generated category index cards follow Void/Slate palette with hover lift
4. **Announcement bar close button** — `×` styled with opacity + hover bg tint
5. **Tag pages** — `/docs/tags/...` pages use pill tags with brand hover state
6. **Mobile search** — search input collapses to `2rem` icon-only on ≤576px, expands on focus with smooth width transition
7. **prefers-reduced-motion** — all transitions and animations disabled when the OS accessibility setting is active

### Fixed

- **Docker GHCR push timeout** — `provenance: false` + `sbom: false` on `docker/build-push-action` eliminates attestation overhead that caused network timeouts; `timeout-minutes: 30` on job; `docker/setup-buildx-action` added explicitly
- **CSS comments** — removed stale TailAdmin references, fixed redundant inline color-name comments

## [1.2.6] — 2026-03-10

### Added

- **Sidebar icons** — category icon system via `className: 'sidebar-cat-*'` in `sidebars.js`.
  10 Lucide-style SVG icons (rocket, monitor, pencil, puzzle, sliders, folder, server,
  database, layers, grid, code). CSS-only with dark-mode `filter:invert(1)`.
- **Sidebar sub-menu vertical line** — Rackscope-style left border on nested items.
  Sub-items: slightly smaller font, muted color, left padding.
- **Sidebar version badge** — always pinned at the very bottom of the sidebar viewport
  (`[class*="sidebarViewport"]` flex-column + `::after` outside scroll area).
  Hardcoded backgrounds (#fff / #111827) to always cover scrolled content.
- **Ctrl+K hint redesign** — ghost style: transparent chips with hairline border,
  `+` separator via `::before`, opacity 0.7 at rest, 0.9 on input focus.
  Preserves plugin positioning (only kbd elements restyled).

### Changed

- Search input: `min-width` 220px → 300px; font-family → `var(--ifm-font-family-base)` (Outfit)
- Demo `docusaurus.config.js`: `{ type:'search' }` positioned before external links;
  `searchBarShortcutHint: true`
- Dockerfile: copies full project so `file:..` resolves during local dev

## [1.2.5] — 2026-03-10

### Fixed

- **Search position**: add `{ type: 'search' }` in demo config before external links
  (CSS `order` alone insufficient when easyops inserts search last in DOM)
- **Search CSS selectors**: `[class*="navbarSearchContainer"]` with `order: -1 !important`
  and `[class*="navbarSearch"]` — previous `.navbar__search` didn't match actual class
- **Search input styling**: `!important` on bg/color to beat CSS module specificity
- **CTRL+K**: redesigned as compact transparent pill with clean kbd elements
- **colorModeToggle**: `order: 1 !important` on wrapper div (not button)
- **Hover**: navbar link color now changes to brand primary in both modes

## [1.2.2] — 2026-03-10

### Added

- **`@easyops-cn/docusaurus-search-local` native support** — CSS palette overrides
  so the search dropdown matches Void (dark) / Slate (light) out of the box.
  Set `--search-local-*` variables and `--ifm-navbar-search-input-*` for both modes.
  Navbar search input styled as ghost button matching navbar external links.
- Demo site ships with `@easyops-cn/docusaurus-search-local` pre-configured

### Changed

- Screenshots updated to 2560×1440 (2K) with search bar visible
- New `search.png` screenshot of active search dropdown

## [1.2.0] — 2026-03-10

### Changed — Rackscope design system alignment

6 axes inspired by the `templates/default` component library:

- **Border radius**: Cards `16px` (rounded-2xl), code `12px`, inline code `6px`, pagination `12px`
- **Admonitions**: AlertBanner style — `rounded-2xl`, all-around border at semantic opacity, `padding: 16px 20px`
- **Dark shadows**: shadow-card pattern on cards + code blocks (heavier on dark surfaces)
- **Details/summary**: SectionCard style — `rounded-2xl`, chevron that rotates, dark bg-gray-900
- **TOC active**: bg pill `rgb(70,95,255,0.08)` + border-radius + padding (mirrors sidebar active)
- **Sidebar labels**: `10px` + `letter-spacing: 0.12em` — exact Rackscope LayoutLabel
- **Typography**: `h1 font-weight: 800`, tight letter-spacing (`-0.04em` → `-0.01em`)
- **Scrollbar**: `4px` (was 5px) — matches Rackscope index.css

## [1.1.6] — 2026-03-10

### Changed

- **Navbar right items**: unified ghost button style — external links (GitHub, npm…)
  and the color mode toggle now share the same bordered appearance:
  `1px solid border`, `border-radius: 8px`, identical hover (indigo border + tint)
- Replaces the inconsistent circular toggle + plain text link combo

## [1.1.5] — 2026-03-10

### Fixed

- **Tooltip**: right-aligned to prevent viewport overflow; appears below button
- **Tables dark mode**: direct overrides on `th`/`td`/`thead` — CSS variables
  were not cascaded to table cells by Infima
- **Cards dark mode**: direct `background-color: #111827` override
- **Breadcrumbs**: explicit active/inactive link colors + separator in dark mode
- **Toggle button**: subtle hover background for better visibility

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
