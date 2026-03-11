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
 * Options:
 *   injectFavicon {boolean} — inject the cosmos atom favicon (default: true).
 *     Set to false if your site already has its own favicon.
 *
 * @see https://docusaurus.io/docs/api/plugin-methods/lifecycle-apis#getClientModules
 */

'use strict';

const path = require('path');
const { version } = require('../package.json');

// Cosmos favicon — indigo rounded-square with atom/constellation symbol.
// Pre-encoded as a valid data: URI (all special chars percent-encoded).
const FAVICON_SVG = encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">' +
    '<rect width="32" height="32" rx="7" fill="#465fff"/>' +
    '<circle cx="16" cy="16" r="6.5" fill="none" stroke="white" stroke-width="1.5" opacity="0.5"/>' +
    '<circle cx="16" cy="16" r="2.5" fill="white"/>' +
    '<circle cx="16" cy="9" r="1.5" fill="white"/>' +
    '<circle cx="22" cy="20" r="1.5" fill="white"/>' +
    '<circle cx="10" cy="20" r="1.5" fill="white"/>' +
    '</svg>'
);

/**
 * @param {import('@docusaurus/types').LoadContext} _context
 * @param {{ injectFavicon?: boolean }} options
 * @returns {import('@docusaurus/types').Plugin}
 */
function cosmosDocusaurusTheme(_context, options) {
  const { injectFavicon = true } = options ?? {};

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
     * Optionally injects the cosmos favicon (opt-out via injectFavicon: false).
     *
     * @returns {import('@docusaurus/types').HtmlTags}
     */
    injectHtmlTags() {
      /** @type {import('@docusaurus/types').HtmlTagObject[]} */
      const headTags = [
        {
          tagName: 'style',
          innerHTML: `:root { --cosmos-version: "cosmos v${version}"; }`,
        },
      ];

      if (injectFavicon) {
        headTags.push({
          tagName: 'link',
          attributes: {
            rel: 'icon',
            type: 'image/svg+xml',
            href: `data:image/svg+xml,${FAVICON_SVG}`,
          },
        });
      }

      return { headTags };
    },
  };
}

/**
 * Validate plugin options passed by the consumer.
 *
 * @param {{ validate: Function, options: object }} param
 * @returns {object}
 */
cosmosDocusaurusTheme.validateOptions = ({ options }) => {
  const { injectFavicon = true } = options ?? {};
  if (typeof injectFavicon !== 'boolean') {
    throw new Error(
      `[cosmos-docusaurus-theme] Option "injectFavicon" must be a boolean, got: ${typeof injectFavicon}`
    );
  }
  return { injectFavicon };
};

module.exports = cosmosDocusaurusTheme;
