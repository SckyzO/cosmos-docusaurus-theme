// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    // ── Getting Started ───────────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started',
        'customization',
        'color-tokens',
      ],
    },

    // ── Component Reference ───────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Component Reference',
      collapsed: false,
      items: [
        'native-features',
        'components',
        'typography',
        'utility-classes',
      ],
    },

    // ── Showcase ──────────────────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Showcase',
      collapsed: true,
      items: [
        'showcase/showcase-index',
        'showcase/showcase-text',
        'showcase/showcase-code',
        'showcase/showcase-admonitions',
        'showcase/showcase-tabs-details',
        'showcase/showcase-tables-lists',
        'showcase/showcase-badges',
      ],
    },
  ],
};

export default sidebars;
