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
  };
}

module.exports = cosmosDocusaurusTheme;
