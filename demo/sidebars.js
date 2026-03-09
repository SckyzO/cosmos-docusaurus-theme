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
      ],
    },
  ],
};

export default sidebars;
