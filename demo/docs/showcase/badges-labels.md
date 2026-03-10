---
id: showcase-badges
title: Badges & Labels
sidebar_position: 7
---

# Badges & Labels

## Docusaurus built-in badges

<span class="badge badge--primary">primary</span>&nbsp;
<span class="badge badge--secondary">secondary</span>&nbsp;
<span class="badge badge--success">stable</span>&nbsp;
<span class="badge badge--info">info</span>&nbsp;
<span class="badge badge--warning">beta</span>&nbsp;
<span class="badge badge--danger">deprecated</span>

```mdx
<span class="badge badge--primary">primary</span>
<span class="badge badge--success">stable</span>
<span class="badge badge--warning">beta</span>
<span class="badge badge--danger">deprecated</span>
```

## cosmos-theme — HTTP method labels

Useful for API reference pages. Styled in monospace with semantic colors.

<span class="method-get">GET</span> `/api/topology/rooms`

<span class="method-post">POST</span> `/api/topology/rooms`

<span class="method-put">PUT</span> `/api/topology/rooms/{id}`

<span class="method-patch">PATCH</span> `/api/topology/rooms/{id}`

<span class="method-delete">DELETE</span> `/api/topology/rooms/{id}`

```mdx
<span class="method-get">GET</span> `/api/topology/rooms`
<span class="method-post">POST</span> `/api/topology/rooms`
<span class="method-put">PUT</span> `/api/topology/rooms/{id}`
<span class="method-patch">PATCH</span> `/api/topology/rooms/{id}`
<span class="method-delete">DELETE</span> `/api/topology/rooms/{id}`
```

## cosmos-theme — Status labels (`.status-*`)

For operational runbooks and health check tables.

| Node | Status |
|---|---|
| `web-01` | <span class="status-ok">OK</span> |
| `db-primary` | <span class="status-warn">WARN</span> |
| `cache-01` | <span class="status-crit">CRIT</span> |
| `worker-03` | <span class="status-unknown">UNKNOWN</span> |

```mdx
<span class="status-ok">OK</span>
<span class="status-warn">WARN</span>
<span class="status-crit">CRIT</span>
<span class="status-unknown">UNKNOWN</span>
```

## cosmos-theme — State aliases (`.state-*`)

Identical colors to `.status-*` — provided for projects using the `.state-` naming convention
(e.g. Rackscope docs).

| Node | State |
|---|---|
| `compute001` | <span class="state-ok">OK</span> |
| `compute002` | <span class="state-warn">WARN</span> |
| `compute003` | <span class="state-crit">CRIT</span> |
| `compute004` | <span class="state-unknown">UNKNOWN</span> |

```mdx
<span class="state-ok">OK</span>
<span class="state-warn">WARN</span>
<span class="state-crit">CRIT</span>
<span class="state-unknown">UNKNOWN</span>
```
