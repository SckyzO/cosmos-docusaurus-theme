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
  // Moved from the deprecated top-level onBrokenMarkdownLinks (removed in v4).
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Docusaurus Faster (Rspack + SWC + Lightning CSS). ssgWorkerThreads is
  // omitted on purpose: it requires a v4 future flag, kept out of this build.
  future: {
    faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      mdxCrossCompilerCache: true,
      rspackBundler: true,
      rspackPersistentCache: true,
    },
    // useCssCascadeLayers is intentionally OFF.
    // Lightning CSS flattens @layer by inflating the layered (Infima) rules
    // with :not(#\#):not(#\#), which outranks this theme's plain-specificity
    // :root / [data-theme] custom properties. Infima then wins every variable
    // override: --ifm-background-surface-color resolved to #242526 instead of
    // #111827, so the navbar no longer matched the sidebar. Re-enable only
    // once the theme declares its own layer or raises its specificity.
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    // CSS theme plugin
    'cosmos-docusaurus-theme',
    // Local search: zero config, works offline, no API key required
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
        // No customCss here: the theme plugin handles injection via getClientModules()
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
        // Bump both id and version on each release so the banner reappears.
        id: 'cosmos-v223',
        content:
          'cosmos <strong>v2.2.3</strong> is out: <a href="/utility-classes">explore the utility classes →</a>',
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
      // Footer disabled on the demo site: the theme ships full footer CSS support.
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
