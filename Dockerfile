FROM node:20.20.1-alpine3.23

# Upgrade OS packages to pick up security patches (e.g. zlib CVE-2026-22184)
RUN apk upgrade --no-cache

# Copy the theme package first so demo/package.json can resolve "file:.." locally
WORKDIR /workspace
COPY src/ ./src/
COPY package.json ./

# Install demo dependencies — resolves file:.. to /workspace
WORKDIR /workspace/demo
COPY demo/package.json demo/package-lock.json* ./
RUN npm install --legacy-peer-deps

COPY demo/ .

EXPOSE 3000

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "3000"]
