# Render smoke test

Loads the built demo site in Chromium and asserts computed styles. It exists
because the CSS gates this repo already had cannot see a rendering failure:
stylelint parses syntax, the demo build only proves the site compiles, and the
page check only proves files exist.

That gap shipped once. Version 2.2.2 enabled `future.v4.useCssCascadeLayers`,
Lightning CSS flattened `@layer` by inflating Infima's rules with
`:not(#\#):not(#\#)`, and 58 theme variables were silently replaced by Infima
defaults. Every check stayed green while the site rendered as near-vanilla
Docusaurus. Reading the CSS as text cannot catch a specificity inversion, so
this suite uses a real cascade engine instead.

## Running it

```bash
make render-test          # from the repo root: builds the demo, then tests
```

Or by hand:

```bash
cd demo && npm run build          # docusaurus serve only serves demo/build
cd ../tests/render
npm ci
npx playwright install chromium
npm test
```

Playwright starts `docusaurus serve` on port 3100 itself. Override with
`SMOKE_PORT` if that port is taken.

## What it asserts

In both light and dark mode:

- the theme's custom properties resolve to the theme's values, not Infima's
- `--ifm-font-family-base` and `--ifm-font-family-monospace` carry Outfit and
  IBM Plex Mono

Plus, on the rendered page:

- navbar and sidebar share one background in dark mode, the symptom that
  surfaced the 2.2.2 regression
- the navbar is 72px tall
- body text renders in Outfit, code blocks in IBM Plex Mono
- every self-hosted woff2 returns 200 and both faces report as loaded

## Changing a token

Expected values live at the top of `render.spec.js` and mirror
`src/css/theme.css`. Change a token there on purpose and this suite fails;
update both. That is the intended workflow, not an obstacle.

## Why it is not in `demo/`

Installing `@playwright/test` downloads a browser binary. `demo/` is installed
by the demo build, the GitHub Pages deploy and the Dockerfile, none of which
need one. Keeping Playwright here leaves all three untouched.
