FROM node:20-alpine

WORKDIR /app

# Copy demo package.json first for layer caching
# cosmos-docusaurus-theme is installed from npm (^1.x range)
COPY demo/package.json ./package.json

# Install all dependencies
RUN npm install --legacy-peer-deps

# Copy demo source files
COPY demo/ .

EXPOSE 3000

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "3000"]
