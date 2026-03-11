FROM node:20.19-alpine3.21

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
