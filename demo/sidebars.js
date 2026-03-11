// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // ── Documentation sidebar ──────────────────────────────────────────────────
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      className: 'sidebar-cat-rocket',
      collapsed: false,
      items: [
        'getting-started',
        'customization',
        'color-tokens',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      className: 'sidebar-cat-layers',
      collapsed: false,
      items: [
        'native-features',
        'utility-classes',
      ],
    },
  ],

  // ── Components sidebar ─────────────────────────────────────────────────────
  components: [
    {
      type: 'category',
      label: 'Components',
      className: 'sidebar-cat-puzzle',
      collapsed: false,
      items: [
        'components/overview',
        'components/typography',
        'components/banners',
        'components/code-blocks',
        'components/tables-lists',
        'components/tabs',
        'components/navigation',
        'components/badges-labels',
        'components/buttons',
        'components/utilities',
      ],
    },
  ],
};

export default sidebars;
