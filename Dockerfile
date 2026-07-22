FROM node:26.5.0-alpine3.23

# Upgrade OS packages to pick up security patches (e.g. zlib CVE-2026-22184)
RUN apk upgrade --no-cache

# The npm bundled with node 26.5.0 ships tar 7.5.16, which carries
# CVE-2026-59873 (CRITICAL) and CVE-2026-59874. npm 12 bundles tar >= 7.5.19.
# Pinned rather than @latest so the image stays reproducible; bump deliberately.
# This is the base-image bump that .trivyignore deferred back when the base was
# node 20, where npm 12 could not be installed (it needs node >= 22).
RUN npm install -g npm@12.0.1

# Copy the theme package first so demo/package.json can resolve "file:.." locally
WORKDIR /workspace
COPY src/ ./src/
COPY package.json ./

# Install demo dependencies — resolves file:.. to /workspace.
# npm ci (not install) for a reproducible, lockfile-exact build, matching CI.
WORKDIR /workspace/demo
COPY demo/package.json demo/package-lock.json ./
RUN npm ci --legacy-peer-deps

COPY demo/ .

EXPOSE 3000

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "3000"]
