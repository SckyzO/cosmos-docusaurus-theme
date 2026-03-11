/**
 * cosmos-docusaurus-theme
 *
 * A Docusaurus theme plugin that injects the Cosmos CSS theme.
 * Implemented as a proper Docusaurus theme via getClientModules() so that
 * consumers can use the standard `themes` array in their config:
 *
 *   themes: ['cosmos-docusaurus-theme']
 *
 * No component swizzling — CSS-only override of Infima variables.
 *
 * @see https://docusaurus.io/docs/api/plugin-methods/lifecycle-apis#getClientModules
 */

'use strict';

const path = require('path');
const { version } = require('../package.json');

/**
 * @param {import('@docusaurus/types').LoadContext} _context
 * @param {object} _options
 * @returns {import('@docusaurus/types').Plugin}
 */
function cosmosDocusaurusTheme(_context, _options) {
  return {
    name: 'cosmos-docusaurus-theme',

    /**
     * Return the CSS file as a client module so Docusaurus injects it
     * into the page bundle automatically.
     *
     * @returns {string[]}
     */
    getClientModules() {
      return [path.resolve(__dirname, 'css/theme.css')];
    },

    /**
     * Inject the package version as a CSS custom property so the sidebar
     * version badge stays in sync with package.json automatically.
     *
     * @returns {import('@docusaurus/types').HtmlTags}
     */
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'style',
            innerHTML: `:root { --cosmos-version: "cosmos v${version}"; }`,
          },
        ],
      };
    },
  };
}

module.exports = cosmosDocusaurusTheme;
