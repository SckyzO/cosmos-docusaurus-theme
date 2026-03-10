// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started',
        'customization',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        'components',
        'typography',
        'utility-classes',
        'native-features',
      ],
    },
    {
      type: 'category',
      label: 'Showcase',
      collapsed: false,
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
