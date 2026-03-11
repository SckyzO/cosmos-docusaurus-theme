---
title: Badges & Labels
sidebar_position: 8
---

# Badges & Labels

## Release badges `.badge-new/beta/deprecated/experimental`

Inline pill badges for marking feature lifecycle state. Monospace uppercase, semantic color.

<span class="badge-new">New</span>&nbsp;
<span class="badge-beta">Beta</span>&nbsp;
<span class="badge-deprecated">Deprecated</span>&nbsp;
<span class="badge-experimental">Experimental</span>

```mdx
<span class="badge-new">New</span>
<span class="badge-beta">Beta</span>
<span class="badge-deprecated">Deprecated</span>
<span class="badge-experimental">Experimental</span>
```

### In headings

## Slurm plugin <span class="badge-new">New</span>

## Topology importers <span class="badge-beta">Beta</span>

## Legacy CSV export <span class="badge-deprecated">Deprecated</span>

## Docusaurus built-in `.badge--*`

<span class="badge badge--primary">primary</span>&nbsp;
<span class="badge badge--secondary">secondary</span>&nbsp;
<span class="badge badge--success">stable</span>&nbsp;
<span class="badge badge--info">info</span>&nbsp;
<span class="badge badge--warning">beta</span>&nbsp;
<span class="badge badge--danger">deprecated</span>

```mdx
<span class="badge badge--success">stable</span>
<span class="badge badge--warning">beta</span>
<span class="badge badge--danger">deprecated</span>
```

## HTTP method badges `.method-*`

For API reference pages — monospace, semantic colors.

<span class="method-get">GET</span> `/api/topology/rooms`

<span class="method-post">POST</span> `/api/topology/rooms`

<span class="method-put">PUT</span> `/api/topology/rooms/{id}`

<span class="method-patch">PATCH</span> `/api/topology/rooms/{id}`

<span class="method-delete">DELETE</span> `/api/topology/rooms/{id}`

```mdx
<span class="method-get">GET</span> `/api/topology/rooms`
<span class="method-post">POST</span> `/api/topology/rooms`
```

## Status labels `.status-*` / `.state-*`

For operational runbooks, health check tables, and node status docs.

| Node | Status |
| --- | --- |
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

`.state-ok/warn/crit/unknown` are identical aliases for projects using that convention.
