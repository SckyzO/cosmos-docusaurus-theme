// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Rendering smoke test.
 *
 * Why this exists: v2.2.2 enabled `future.v4.useCssCascadeLayers`, and Lightning
 * CSS emulates `@layer` by inflating the layered rules with `:not(#\#):not(#\#)`.
 * That inverts the usual "unlayered wins" rule, so Infima's defaults outranked
 * this theme's plain-specificity `:root` / `[data-theme]` blocks and silently
 * replaced 58 theme variables. The demo rendered as near-vanilla Docusaurus.
 *
 * Every gate stayed green: stylelint parsed the CSS, the demo compiled, all 12
 * pages existed, Trivy found no CVEs. For a CSS-only theme, rendering is the
 * product, and nothing was looking at it.
 *
 * So this suite asserts *computed* values in a real browser. A real cascade
 * engine is the point: reading the CSS as text cannot see a specificity
 * inversion, which is exactly what made the original analysis miss it.
 *
 * Expected values are the theme's own, from src/css/theme.css. When you change
 * a token there on purpose, this test fails and you update it here — that is
 * the intended workflow, not an annoyance.
 */

/** Custom properties that must resolve identically in both color modes. */
const COMMON_VARS = {
  '--ifm-navbar-height': '72px', // Infima default: 3.75rem
  '--ifm-font-size-base': '1.0313rem', // Infima default: 100%
  '--ifm-h1-font-size': '2.2rem',
  '--ifm-h2-font-size': '1.6rem',
  '--cosmos-brand': '#465fff',
  '--cosmos-brand-light': '#7592ff',
};

/** Per-mode custom properties. Every one of these was clobbered by the bug. */
const MODE_VARS = {
  light: {
    '--ifm-color-primary': '#465fff', // Infima default: #3578e5
    '--ifm-background-color': '#f9fafb', // Infima default: #fff
    '--ifm-background-surface-color': '#fff',
    '--ifm-navbar-background-color': '#fff',
  },
  dark: {
    '--ifm-color-primary': '#7592ff', // Infima default: #3578e5
    '--ifm-navbar-background-color': '#111827',
    // The six below are declared by Infima at html[data-theme='dark'] (0,1,1).
    // The theme has to match that selector to reach them — see the
    // html[data-theme='dark'] block in src/css/theme.css.
    '--ifm-background-color': '#030712', // Infima default: #1b1b1d
    '--ifm-background-surface-color': '#111827', // Infima default: #242526
    '--ifm-code-background': '#1f2937', // Infima default: rgba(255,255,255,.1)
    '--ifm-color-emphasis-300': '#1f2937', // Infima default: var(--ifm-color-gray-700)
    '--ifm-color-emphasis-600': '#a3a3a3', // Infima default: var(--ifm-color-gray-400)
    '--ifm-toc-border-color': '#1f2937', // Infima default: var(--ifm-color-emphasis-200)
  },
};

/** Font stacks, asserted by substring so the fallback chain can evolve. */
const FONT_VARS = {
  '--ifm-font-family-base': 'Outfit', // Infima default: system-ui, ...
  '--ifm-font-family-monospace': 'IBM Plex Mono', // Infima default: SFMono-Regular, ...
};

/**
 * Loads a page in the requested color mode.
 *
 * The demo sets `respectPrefersColorScheme: true`, so emulating the media query
 * is enough — no localStorage seeding, no clicking the toggle. The data-theme
 * assertion is a precondition: if Docusaurus ever stops honouring the media
 * query, this fails loudly instead of silently testing the wrong mode twice.
 */
async function gotoInMode(page, url, mode) {
  await page.emulateMedia({ colorScheme: mode });
  await page.goto(url);
  await expect(page.locator('html')).toHaveAttribute('data-theme', mode);
  await page.evaluate(() => document.fonts.ready);
}

/** Reads computed custom properties off the document root. */
function readVars(page, names) {
  return page.evaluate((list) => {
    const style = getComputedStyle(document.documentElement);
    return Object.fromEntries(list.map((name) => [name, style.getPropertyValue(name).trim()]));
  }, names);
}

for (const mode of /** @type {const} */ (['light', 'dark'])) {
  test.describe(`${mode} mode`, () => {
    test('theme custom properties win over Infima defaults', async ({ page }) => {
      await gotoInMode(page, '/', mode);

      const expected = { ...COMMON_VARS, ...MODE_VARS[mode] };
      const actual = await readVars(page, Object.keys(expected));

      // Compared as a whole object so a failure reports every clobbered
      // variable at once, the way the original regression actually looked.
      expect(actual).toEqual(expected);
    });

    test('font stacks are the theme fonts', async ({ page }) => {
      await gotoInMode(page, '/', mode);

      const actual = await readVars(page, Object.keys(FONT_VARS));
      for (const [name, family] of Object.entries(FONT_VARS)) {
        expect(actual[name], `${name} must start with ${family}`).toContain(family);
      }
    });
  });
}

test.describe('rendered layout', () => {
  test('dark navbar and sidebar share one background', async ({ page }) => {
    await gotoInMode(page, '/', 'dark');

    // The symptom that surfaced the bug: the navbar drifted to Infima's
    // #242526 while the sidebar kept #111827, so the header stopped matching.
    const navbar = page.locator('.navbar').first();
    const sidebar = page.locator('.theme-doc-sidebar-container').first();
    await expect(navbar).toBeVisible();
    await expect(sidebar).toBeVisible();

    await expect(navbar).toHaveCSS('background-color', 'rgb(17, 24, 39)');
    await expect(sidebar).toHaveCSS('background-color', 'rgb(17, 24, 39)');
  });

  test('navbar is 72px tall', async ({ page }) => {
    await gotoInMode(page, '/', 'dark');

    // Border box, not clientHeight: the navbar carries a 1px bottom border,
    // which clientHeight excludes.
    const box = await page.locator('.navbar').first().boundingBox();
    expect(box?.height).toBe(72);
  });

  test('body renders in Outfit and code in IBM Plex Mono', async ({ page }) => {
    await gotoInMode(page, '/components/code-blocks', 'dark');

    const bodyFont = await page.evaluate(() => getComputedStyle(document.body).fontFamily);
    expect(bodyFont).toContain('Outfit');

    const codeFont = await page
      .locator('.theme-code-block code')
      .first()
      .evaluate((el) => getComputedStyle(el).fontFamily);
    expect(codeFont).toContain('IBM Plex Mono');
  });
});

test.describe('self-hosted fonts', () => {
  test('woff2 files are served and the faces are usable', async ({ page }) => {
    /** @type {{url: string, status: number}[]} */
    const fontResponses = [];
    page.on('response', (response) => {
      if (response.url().endsWith('.woff2')) {
        fontResponses.push({ url: response.url(), status: response.status() });
      }
    });

    await gotoInMode(page, '/components/code-blocks', 'dark');

    // Fonts ship inside the package (no Google Fonts request), so a 404 here
    // means the asset pipeline dropped them and every visitor gets a fallback.
    const failed = fontResponses.filter((r) => r.status !== 200);
    expect(failed, `woff2 requests must all return 200: ${JSON.stringify(failed)}`).toEqual([]);
    expect(fontResponses.length, 'no woff2 was requested at all').toBeGreaterThan(0);

    const loaded = await page.evaluate(() => ({
      outfit: document.fonts.check('1rem Outfit'),
      mono: document.fonts.check('1rem "IBM Plex Mono"'),
    }));
    expect(loaded).toEqual({ outfit: true, mono: true });
  });
});
