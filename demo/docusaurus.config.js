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

  themes: [
    // CSS theme plugin
    'cosmos-docusaurus-theme',
    // Local search — zero config, works offline, no API key required
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchBarShortcutHint: true,
      },
    ],
  ],

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
      announcementBar: {
        id: 'cosmos-v210',
        content:
          'cosmos <strong>v2.1.0</strong> is out — <a href="/utility-classes">see all new utility classes →</a>',
        isCloseable: true,
      },
      navbar: {
        title: 'cosmos',
        logo: {
          alt: 'cosmos logo',
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
            type: 'docSidebar',
            sidebarId: 'components',
            position: 'left',
            label: 'Components',
          },
          // Search positioned explicitly before external links
          { type: 'search', position: 'right' },
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
      // Footer disabled on the demo site — the theme ships full footer CSS support.
      // To enable a 4-column footer, add a footer block here. Example:
      //
      // footer: {
      //   style: 'dark',
      //   links: [
      //     { title: 'Docs',       items: [...] },
      //     { title: 'Components', items: [...] },
      //     { title: 'Resources',  items: [...] },
      //     { title: 'Community',  items: [...] },
      //   ],
      //   copyright: `© ${new Date().getFullYear()} Your Project. MIT License.`,
      // },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'typescript'],
      },
    }),
};

export default config;
