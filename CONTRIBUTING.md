# Contributing

Issues and pull requests are welcome. Please report security problems
privately instead, as described in [SECURITY.md](SECURITY.md).

## Before you start

- Search the existing issues first.
- For anything beyond a small fix, such as a new utility class, a new option or
  a different default look, open an issue before writing code. Every site that
  installs the theme picks up a changed default on its next update, so I would
  rather agree on the design first.
- Keep one change per pull request. A refactor and a new feature go in separate
  pull requests.

A useful bug report gives the theme and Docusaurus versions, the color mode,
the browser, and a screenshot or the page where the problem shows.

## Repository layout

| Path                               | Contents                                                                                                           |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `src/css/theme.css`                | The theme, a CSS override of Infima and the Docusaurus classes                                                     |
| `src/css/fonts/`                   | Self-hosted Outfit and IBM Plex Mono, under the [SIL OFL 1.1](src/css/fonts/OFL.txt)                               |
| `src/index.js`                     | The Docusaurus plugin entry. It registers the stylesheet and injects the version variable and the optional favicon |
| `demo/`                            | The demo site deployed to GitHub Pages. It uses the theme straight from the repository root                        |
| `tests/render/`                    | A Playwright smoke test that checks computed styles in Chromium                                                    |
| `Dockerfile`, `docker-compose.yml` | The demo container, which runs the dev server on port 3000                                                         |
| `.github/workflows/`               | CI, the Pages deploy, the release and the weekly container scan                                                    |

Only `src/`, `LICENSE`, `README.md` and `CHANGELOG.md` go into the npm package.

## Setting up

CI runs on Node.js 26, so use the same major version locally.

```bash
make install      # root dev tooling: stylelint, ESLint, markdownlint, Prettier
make demo-start   # installs demo/ and serves it on http://localhost:3000
```

Both targets install with `npm ci` (with `--legacy-peer-deps` in `demo/`, as in
CI), so the lockfiles stay untouched. `demo/node_modules/cosmos-docusaurus-theme`
is a link to the repository root, so edits under `src/` need no reinstall.
`make help` lists every target.

## Checks

Every pull request to `main` runs these CI jobs:

| CI job                              | Local equivalent               |
| ----------------------------------- | ------------------------------ |
| Lint (CSS + JS + Markdown + Format) | `npm run lint`                 |
| Security audit                      | `npm audit --audit-level=high` |
| Build demo site                     | `make demo-build`              |
| Render smoke test                   | `make render-test`             |
| Verify Dockerfile builds            | `make docker-build`            |

The first four must pass, and the branch must be up to date with `main`, before
a pull request can merge. Running `make` with no target covers lint, the
security checks and the demo build. `npm run lint:fix` fixes what the linters
can fix by themselves.

The security audit job also fails as soon as `package.json` has a
`dependencies` entry, because the theme ships no runtime dependencies.
`make lint` runs one check that CI does not: demo MDX pages must use
`className=`, not `class=`.

A build that compiles proves little for a CSS theme. The render smoke test
loads the built demo in Chromium, in both color modes, and compares computed
styles with the values listed at the top of `tests/render/render.spec.js`. When
you change a token on purpose, update it in both places.
[tests/render/README.md](tests/render/README.md) lists what the suite asserts.

Pull requests that change the `Dockerfile`, `.trivyignore` or the scan workflow
also run the container scan, which fails on any fixable HIGH or CRITICAL
finding in the demo image.

## Theme rules

- The package stays CSS only: no swizzled components and no JavaScript sent to
  the browser. `src/index.js` only registers the stylesheet and injects head
  tags.
- Fonts and other assets stay self-hosted. Nothing loads from a CDN.
- Check your change in light and dark mode. The smoke test covers the values it
  knows about, not every element on every page.
- When you style a new element or add a utility class, show it on a page under
  `demo/docs/`, so it can be checked on the live demo.

## Commits and pull requests

- Commit messages and pull request titles follow
  [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):
  `type(scope): subject`. The history uses `feat`, `fix`, `docs`, `ci`,
  `build`, `chore` and `test`, for example
  `fix(demo): disable useCssCascadeLayers, navbar color regression`.
- I squash-merge pull requests, so the title becomes the commit message on
  `main`.
- Add an entry under `## [Unreleased]` in [CHANGELOG.md](CHANGELOG.md) for any
  change a user of the theme or of the demo image would notice.
- Say how you checked the change: the commands you ran, plus screenshots in
  both color modes for anything visual.

## Releases

1. Set the new version in `package.json`, in both version fields of
   `package-lock.json`, and in the `..` entry of `demo/package-lock.json`.
2. Rename `## [Unreleased]` in `CHANGELOG.md` to `## [X.Y.Z] - YYYY-MM-DD`.
3. Merge that through a pull request, then push the tag `vX.Y.Z` on the merge
   commit.

The tag starts `publish.yml`. It builds the demo image, scans it with Trivy and
pushes it to GHCR as `vX.Y.Z` and `latest`. It then publishes the package to
npm through trusted publishing and creates the GitHub release from the matching
CHANGELOG section. A failed scan stops the release before anything is
published.
