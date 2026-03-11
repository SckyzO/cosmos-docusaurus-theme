---
title: Banners
sidebar_position: 3
---

# Banners

## Five built-in types

:::note
This is a **note**. Used for neutral supplementary information that is useful to know
but not critical for the main task.
:::

:::tip
This is a **tip**. Great for best practices, shortcuts, and recommended approaches that
improve the experience.
:::

:::info
This is an **info** block. For contextual guidance, clarifications, and non-critical
background information.
:::

:::warning
This is a **warning**. Use sparingly — reserved for situations that may cause
unexpected behavior or data loss if ignored.
:::

:::danger
This is a **danger** block. Reserved for destructive, irreversible, or security-critical
operations.
:::

## Custom title

:::tip[Pro tip]
Admonitions support custom titles via `:::tip[My Title]` syntax (Docusaurus 3+).
:::

:::warning[Before you proceed]
This operation cannot be undone. Back up your data first.
:::

## With code block inside

:::info[Configuration reference]

```yaml
plugins:
  simulator:
    enabled: true
    incident_mode: light
```

Set `incident_mode` to one of: `full_ok`, `light`, `medium`, `heavy`, `chaos`.

:::

## With list inside

:::note[Supported formats]

- YAML topology files
- JSON API responses
- CSV node exports

:::

## Nested Tabs in Admonition

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip[Install in any package manager]

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install cosmos-docusaurus-theme
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add cosmos-docusaurus-theme
```

  </TabItem>
</Tabs>

:::
