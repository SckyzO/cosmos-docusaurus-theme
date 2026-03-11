# ── cosmos-docusaurus-theme — Developer Makefile ──────────────────────────────
#
# Usage:
#   make              → lint + security + demo-build (default)
#   make help         → list all targets
#
# Requirements: Node.js >=18, Docker (for demo-docker, docker-build)
# ─────────────────────────────────────────────────────────────────────────────

.DEFAULT_GOAL := all
.PHONY: all help install lint lint-css lint-js lint-md lint-format lint-mdx format lint-fix \
        security audit demo-install demo-build demo-check demo-start demo-serve demo-clear \
        docker-build docker-up docker-down clean

# ── Config ────────────────────────────────────────────────────────────────────

NODE         ?= node
NPM          ?= npm
DOCKER       ?= docker
COMPOSE      ?= docker compose

DEMO_DIR     := demo

# ── Default ───────────────────────────────────────────────────────────────────

## Run lint + security + demo build (CI equivalent)
all: lint security demo-build

# ── Help ──────────────────────────────────────────────────────────────────────

help:
	@echo ""
	@echo "  cosmos-docusaurus-theme — available targets"
	@echo ""
	@echo "  Setup"
	@echo "    install          Install root devDependencies (stylelint)"
	@echo "    demo-install     Install demo site dependencies"
	@echo ""
	@echo "  Lint & Quality"
	@echo "    lint             Run all linters (CSS + JS + Markdown + format)"
	@echo "    lint-css         Run stylelint on src/css/**/*.css"
	@echo "    lint-js          Run ESLint on src/**/*.js"
	@echo "    lint-md          Run markdownlint on *.md and docs/**/*.md"
	@echo "    lint-format      Check formatting with Prettier (no write)"
	@echo "    format           Auto-fix formatting with Prettier"
	@echo "    lint-fix         Auto-fix all fixable lint issues (CSS + JS + format)"
	@echo ""
	@echo "  Security"
	@echo "    security         npm audit + no-runtime-deps check"
	@echo "    audit            npm audit (moderate and above)"
	@echo ""
	@echo "  Demo site"
	@echo "    demo-build       Build the demo static site"
	@echo "    demo-start       Start demo dev server (http://localhost:3000)"
	@echo "    demo-serve       Serve the built demo site"
	@echo "    demo-clear       Clear Docusaurus cache"
	@echo ""
	@echo "  Docker"
	@echo "    docker-build     Build the demo Docker image (no push)"
	@echo "    docker-up        Start demo in Docker (http://localhost:3000)"
	@echo "    docker-down      Stop and remove demo container"
	@echo ""
	@echo "  Maintenance"
	@echo "    clean            Remove node_modules and build artifacts"
	@echo ""

# ── Setup ─────────────────────────────────────────────────────────────────────

## Install root devDependencies
install:
	$(NPM) ci

## Install demo site dependencies
demo-install:
	cd $(DEMO_DIR) && $(NPM) ci --legacy-peer-deps

# ── Lint & Quality ────────────────────────────────────────────────────────────

## Run stylelint on src/css/**/*.css
lint-css:
	$(NPM) run lint:css

## Run ESLint on src/**/*.js
lint-js:
	$(NPM) run lint:js

## Run markdownlint on *.md and docs/**/*.md
lint-md:
	$(NPM) run lint:md

## Check formatting with Prettier (read-only, no write)
lint-format:
	$(NPM) run lint:format

## Auto-fix formatting with Prettier
format:
	$(NPM) run format

## Auto-fix all fixable issues (stylelint --fix + eslint --fix + prettier --write)
lint-fix:
	$(NPM) run lint:fix

## Check demo MDX files for class= (should be className= in JSX context)
lint-mdx:
	@echo "Checking demo MDX files for class= attributes outside code blocks..."
	@$(NODE) -e "\
	  const fs = require('fs'); \
	  const path = require('path'); \
	  let errors = 0; \
	  function walk(dir) { \
	    fs.readdirSync(dir).forEach(f => { \
	      const full = path.join(dir, f); \
	      if (fs.statSync(full).isDirectory()) { walk(full); return; } \
	      if (!f.endsWith('.md') && !f.endsWith('.mdx')) return; \
	      const lines = fs.readFileSync(full, 'utf8').split('\n'); \
	      let inCode = false; \
	      lines.forEach((line, i) => { \
	        if (/^[\x60~]{3}/.test(line.trim())) inCode = !inCode; \
	        if (!inCode && / class=\"/.test(line)) { \
	          console.error('  ' + full + ':' + (i+1) + ' — class= should be className='); \
	          errors++; \
	        } \
	      }); \
	    }); \
	  } \
	  walk('demo/docs'); \
	  if (errors) { console.error(errors + ' issue(s) found.'); process.exit(1); } \
	  else console.log('OK: no class= found in demo MDX files.');"

## Run all linters: CSS + JS + Markdown + Prettier format check + MDX check
lint: lint-css lint-js lint-md lint-format lint-mdx

# ── Security ──────────────────────────────────────────────────────────────────

## npm audit at moderate severity + invariant: no runtime deps shipped
security: audit
	@$(NODE) -e "\
	  const pkg = require('./package.json'); \
	  const deps = pkg.dependencies || {}; \
	  if (Object.keys(deps).length > 0) { \
	    console.error('ERROR: Package must not ship runtime dependencies:', deps); \
	    process.exit(1); \
	  } \
	  console.log('OK: No runtime dependencies.');"

## npm audit (moderate and above)
audit:
	$(NPM) audit --audit-level=moderate

# ── Demo site ─────────────────────────────────────────────────────────────────

## Build the demo static site (validates injectHtmlTags, CSS, sidebar icons…)
demo-build: demo-install
	cd $(DEMO_DIR) && $(NPM) run build

## HTTP smoke test — check key pages return 200 (requires demo-serve or docker-up first)
demo-check:
	DEMO_URL=http://localhost:3000 $(NODE) $(DEMO_DIR)/scripts/check-pages.js

## Start demo dev server with hot-reload (http://localhost:3000)
demo-start: demo-install
	cd $(DEMO_DIR) && $(NPM) start

## Serve the built demo (requires demo-build first)
demo-serve:
	cd $(DEMO_DIR) && $(NPM) run serve

## Clear Docusaurus cache and build artifacts
demo-clear:
	cd $(DEMO_DIR) && $(NPM) run clear

# ── Docker ────────────────────────────────────────────────────────────────────

## Build the demo Docker image without pushing (validates Dockerfile)
docker-build:
	$(DOCKER) build -t cosmos-docusaurus-theme:local .

## Start demo site in Docker (http://localhost:3000)
docker-up:
	$(COMPOSE) up --build -d
	@echo "Demo running at http://localhost:3000"

## Stop and remove demo container
docker-down:
	$(COMPOSE) down

# ── Maintenance ───────────────────────────────────────────────────────────────

## Remove node_modules and build artifacts
clean:
	rm -rf node_modules
	rm -rf $(DEMO_DIR)/node_modules $(DEMO_DIR)/build $(DEMO_DIR)/.docusaurus
