# ── cosmos-docusaurus-theme — Developer Makefile ──────────────────────────────
#
# Usage:
#   make              → lint + security + demo-build (default)
#   make help         → list all targets
#
# Requirements: Node.js >=18, Docker (for demo-docker, docker-build)
# ─────────────────────────────────────────────────────────────────────────────

.DEFAULT_GOAL := all
.PHONY: all help install lint lint-css security audit demo-install demo-build \
        demo-start demo-serve demo-clear docker-build docker-up docker-down clean

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
	@echo "    lint             Run all linters (CSS)"
	@echo "    lint-css         Run stylelint on src/css/**/*.css"
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
	cd $(DEMO_DIR) && $(NPM) install --legacy-peer-deps

# ── Lint & Quality ────────────────────────────────────────────────────────────

## Run stylelint on CSS sources
lint-css:
	$(NPM) run lint:css

## Run all linters
lint: lint-css

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
