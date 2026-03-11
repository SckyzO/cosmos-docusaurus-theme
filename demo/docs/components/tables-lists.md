---
title: Tables & Lists & Images
sidebar_position: 5
---

# Tables, Lists & Images

## Tables

Full-width on desktop, horizontally scrollable on mobile.

| Plugin | Status | Description |
| --- | --- | --- |
| Simulator | <span className="status-ok">Active</span> | Generates synthetic Prometheus metrics |
| Slurm | <span className="status-warn">Optional</span> | HPC workload manager integration |
| NetBox | <span className="badge-beta">Beta</span> | CMDB importer |

### With alignment

| Left | Center | Right |
| :--- | :---: | ---: |
| Alpha | Bravo | 1,000 |
| Charlie | Delta | 2,500 |
| Echo | Foxtrot | 18,432 |

## Unordered lists

- First item — standard bullet list
- Second item with **bold** content
  - Nested item with indentation
  - Another nested item
- Third top-level item

## Ordered lists

1. Clone the repository
2. Copy `config/app.example.yaml` to `config/app.yaml`
3. Edit the topology files under `config/topology/`
4. Run `make up` to start all services

## Images

Images get automatic rounded corners and a subtle shadow:

![Cosmos dark mode](https://raw.githubusercontent.com/SckyzO/cosmos-docusaurus-theme/main/docs/screenshots/dark.png)

## Check list `.list-check`

Use `<ul className="list-check">` for feature lists and prerequisites:

<ul className="list-check">
  <li>Prometheus scraping configured and reachable</li>
  <li>Topology YAML file created with at least one site and room</li>
  <li>Device templates defined for your hardware</li>
  <li>Docker and Docker Compose installed on the host</li>
</ul>

```mdx
<ul class="list-check">
  <li>Prometheus scraping configured</li>
  <li>Topology YAML created</li>
</ul>
```
