# Security policy

## Supported versions

Only the latest release gets security fixes. There are no maintenance branches:
a fix ships as a new patch release of the npm package, together with a new
`ghcr.io/sckyzo/cosmos-docusaurus-theme` image.

## Reporting a vulnerability

Report it privately through GitHub: open the **Security** tab of this
repository and choose **Report a vulnerability**, or go straight to
<https://github.com/SckyzO/cosmos-docusaurus-theme/security/advisories/new>.
Please do not open a public issue or pull request for it.

A report helps most when it includes:

- the affected version: the npm version, or the image tag and digest
- what an attacker gains, and in which setup
- steps or a proof of concept that reproduce it
- a fix, if you have one in mind

I acknowledge every report on its advisory and keep you updated there. If I
confirm the problem, I prepare the fix in the advisory's private fork, release
it, then publish the advisory with credit to you, unless you prefer not to be
named. If I conclude it is not a vulnerability, I explain why on the same
thread.

## Scope

The npm package is a stylesheet, self-hosted fonts and a small Docusaurus
plugin (`src/index.js`). The plugin registers the stylesheet and injects a
`<style>` tag with the package version and, unless `injectFavicon` is `false`,
an SVG favicon as a `data:` URI. The package has no runtime dependencies and
sends no JavaScript to the browser.

The demo container image runs the Docusaurus development server (`npm start`)
on port 3000. It is meant for previewing the theme on your own machine. Do not
expose it on a public network.

The demo site on GitHub Pages is a static build of `demo/`.

A problem in Docusaurus itself, or in a dependency, belongs with that project
unless this repository makes it exploitable. Known dependency advisories reach
me through Dependabot and the container scan, so report one only if you can
show that it is exploitable here.

## How dependencies and releases are checked

- Dependabot alerts and security updates cover the root, `demo/` and
  `tests/render/` lockfiles. Version updates run every week for npm and GitHub
  Actions.
- Every pull request runs `npm audit --audit-level=high` on the root lockfile,
  and fails if the package gains a runtime dependency.
- Each release scans the demo image with Trivy before pushing it, and stops on
  any fixable HIGH or CRITICAL finding. The same scan runs every Monday.
- Each finding accepted in `.trivyignore` has its reason written above it.
  Those accepted as unreachable also carry an expiry date, after which the scan
  fails on them again.
- Releases reach npm from `publish.yml` through trusted publishing (OIDC), with
  no npm token involved, and npm attaches a provenance attestation to each
  release published that way.
- Every GitHub Action in the workflows is pinned to a full commit SHA.
