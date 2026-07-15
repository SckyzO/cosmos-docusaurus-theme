/**
 * Static build checker — verifies that key demo pages exist in the build output.
 * Run after `npm run build` (make demo-build).
 *
 * Usage: node scripts/check-pages.js
 */

'use strict';

const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '..', 'build');

// Pages that must exist in the static build
const REQUIRED_PAGES = [
  'index.html',
  'customization/index.html',
  'color-tokens/index.html',
  'native-features/index.html',
  'utility-classes/index.html',
  'components/banners/index.html',
  'components/typography/index.html',
  'components/tabs/index.html',
  'components/buttons/index.html',
  'components/utilities/index.html',
  'components/navigation/index.html',
  'components/badges-labels/index.html',
];

// Check build dir exists
if (!fs.existsSync(BUILD_DIR)) {
  console.error('✖ Build directory not found. Run: make demo-build');
  process.exit(1);
}

let errors = 0;

for (const page of REQUIRED_PAGES) {
  const full = path.join(BUILD_DIR, page);
  if (fs.existsSync(full)) {
    console.log(`  OK   ${page}`);
  } else {
    console.error(`  MISS ${page}`);
    errors++;
  }
}

if (errors > 0) {
  console.error(`\n✖ ${errors} required page(s) missing from build.`);
  process.exit(1);
}

console.log(`\n✔ All ${REQUIRED_PAGES.length} required pages present in build.`);
