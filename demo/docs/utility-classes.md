---
id: utility-classes
title: Utility Classes
sidebar_position: 5
---

# Utility Classes

The theme ships a small set of **optional utility classes** useful for API
reference and operational documentation. They are included in `theme.css` but
have no effect unless you use them in your Markdown/MDX.

## HTTP method labels

Handy for documenting REST APIs inline:

| Class           | Output                                        |
|-----------------|-----------------------------------------------|
| `.method-get`   | <span class="method-get">GET</span>           |
| `.method-post`  | <span class="method-post">POST</span>         |
| `.method-put`   | <span class="method-put">PUT</span>           |
| `.method-delete`| <span class="method-delete">DELETE</span>     |
| `.method-patch` | <span class="method-patch">PATCH</span>       |

```mdx
<span class="method-get">GET</span> `/api/users`

<span class="method-post">POST</span> `/api/users`

<span class="method-delete">DELETE</span> `/api/users/{id}`
```

## Status labels

For operational runbooks, health check tables, and incident response docs:

| Class              | Output                                            |
|--------------------|---------------------------------------------------|
| `.status-ok`       | <span class="status-ok">OK</span>                 |
| `.status-warn`     | <span class="status-warn">WARN</span>             |
| `.status-crit`     | <span class="status-crit">CRIT</span>             |
| `.status-unknown`  | <span class="status-unknown">UNKNOWN</span>       |

```mdx
| Node          | Status                                  |
|---------------|-----------------------------------------|
| web-01        | <span class="status-ok">OK</span>       |
| db-primary    | <span class="status-warn">WARN</span>   |
| cache-01      | <span class="status-crit">CRIT</span>   |
| worker-03     | <span class="status-unknown">UNKNOWN</span> |
```

## Docusaurus badges

Standard Docusaurus badge classes, styled to match the TailAdmin palette:

```mdx
<span class="badge badge--success">stable</span>
<span class="badge badge--warning">beta</span>
<span class="badge badge--danger">deprecated</span>
```

Result: <span class="badge badge--success">stable</span>&nbsp;
<span class="badge badge--warning">beta</span>&nbsp;
<span class="badge badge--danger">deprecated</span>
