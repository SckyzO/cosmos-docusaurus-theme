---
title: Code Blocks
sidebar_position: 4
---

# Code Blocks

## Inline code

Install with `npm install cosmos-docusaurus-theme` or reference `src/index.js` directly.
The variable `--ifm-code-background` controls the background color.

## Bash

```bash
npm install cosmos-docusaurus-theme
docker compose up -d
git commit -m "feat: add cosmos theme"
```

## JavaScript — with title and line numbers

```js title="docusaurus.config.js" showLineNumbers
export default {
  themes: ['cosmos-docusaurus-theme'],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
  },
};
```

## TypeScript

```ts
interface ThemeTokens {
  indigo: string;
  textHi: string;
  textMid: string;
  border: string;
}

function useTokens(isDark: boolean): ThemeTokens {
  return isDark ? DARK_TOKENS : LIGHT_TOKENS;
}
```

## CSS — with highlighted lines

```css title="src/css/custom.css"
/* Override brand color */
/* highlight-start */
:root {
  --ifm-color-primary: #e11d48;
  --ifm-color-primary-dark: #be123c;
}
/* highlight-end */

/* Override font */
:root {
  --ifm-font-family-base: 'Inter', system-ui, sans-serif;
}
```

## YAML

```yaml title="config/app.yaml"
telemetry:
  prometheus_url: http://prometheus:9090
  cache_ttl_seconds: 60

plugins:
  simulator:
    enabled: true
    incident_mode: light
    changes_per_hour: 2
```

## JSON

```json title="package.json"
{
  "name": "my-docs",
  "dependencies": {
    "@docusaurus/core": "^3.9.2",
    "cosmos-docusaurus-theme": "^1.1.7"
  }
}
```

## Diff

```diff title="Migration from customCss"
- theme: {
-   customCss: ['./src/css/custom.css'],
- },
+ themes: ['cosmos-docusaurus-theme'],
```

## Python

```python title="scripts/generate_topology.py"
import yaml

def build_rack(name: str, devices: list[dict]) -> dict:
    return {
        "id": name.lower().replace(" ", "-"),
        "name": name,
        "devices": devices,
    }

rack = build_rack("Rack A01", [{"id": "compute001", "template_id": "dell-r750"}])
print(yaml.dump(rack))
```

## PromQL

```promql
# Nodes in CRIT state across all racks
up{job="node", instance=~"compute001|compute002|compute003"} == 0

# Average temperature per rack
avg by (rack) (
  ipmi_temperature_celsius{sensor="CPU Temp"}
)
```
