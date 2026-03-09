// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/**
 * Docusaurus configuration for the cosmos-docusaurus-theme demo site.
 *
 * The theme is loaded as a proper Docusaurus theme plugin via the `themes`
 * array, which is the canonical way to distribute a CSS theme package.
 *
 * @type {import('@docusaurus/types').Config}
 */
const config = {
  title: 'Cosmos Docusaurus Theme',
  tagline: 'A clean, dark-first Docusaurus theme based on TailAdmin',
  favicon: 'img/favicon.ico',

  url: 'https://sckyzo.github.io',
  baseUrl: process.env.DOCS_BASE_URL || '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Load the theme exactly as a real consumer would — using the npm package name.
  // The demo depends on cosmos-docusaurus-theme via "file:.." in package.json,
  // so this resolves to the local source during development and CI.
  themes: ['cosmos-docusaurus-theme'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        // No customCss here — the theme plugin handles injection via getClientModules()
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Cosmos Theme',
        logo: {
          alt: 'Cosmos Theme Logo',
          src: 'img/logo.svg',
          href: '/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/SckyzO/cosmos-docusaurus-theme',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.npmjs.com/package/cosmos-docusaurus-theme',
            label: 'npm',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Theme',
            items: [
              { label: 'Getting Started', to: '/' },
              { label: 'Customization', to: '/customization' },
              { label: 'Components', to: '/components' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'GitHub', href: 'https://github.com/SckyzO/cosmos-docusaurus-theme' },
              { label: 'npm', href: 'https://www.npmjs.com/package/cosmos-docusaurus-theme' },
              { label: 'Issues', href: 'https://github.com/SckyzO/cosmos-docusaurus-theme/issues' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SckyzO. MIT License.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'typescript'],
      },
    }),
};

export default config;
