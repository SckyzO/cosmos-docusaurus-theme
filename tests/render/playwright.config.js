// @ts-check
const path = require('path');
const { defineConfig, devices } = require('@playwright/test');

const DEMO_DIR = path.resolve(__dirname, '../../demo');
const PORT = Number(process.env.SMOKE_PORT || 3100);
const BASE_URL = `http://127.0.0.1:${PORT}`;

/**
 * Rendering smoke test config.
 *
 * Lives in its own package rather than in `demo/` on purpose: installing
 * @playwright/test downloads browser binaries, and `demo/` is installed by the
 * demo build, the Pages deploy and the Dockerfile, none of which need a
 * browser. Keeping it here leaves those three untouched.
 *
 * The demo build must already exist (`npm run build` in demo/) — `docusaurus
 * serve` only serves demo/build, it does not create it.
 */
module.exports = defineConfig({
  testDir: __dirname,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // No retries: a computed style either matches or it does not. A style
  // assertion that only passes on retry is a signal, not noise to be smoothed.
  retries: 0,
  reporter: process.env.CI
    ? [['github'], ['list'], ['html', { open: 'never' }]]
    : [['list']],

  use: {
    baseURL: BASE_URL,
    trace: 'retain-on-failure',
  },

  // Chromium only. This suite checks cascade resolution and font loading, not
  // cross-browser behaviour, and one engine keeps CI fast.
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],

  webServer: {
    command: `npm run serve -- --port ${PORT} --host 127.0.0.1 --no-open`,
    cwd: DEMO_DIR,
    url: BASE_URL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
});
