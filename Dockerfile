FROM node:20-alpine

# Copy the entire project so demo/package.json can resolve "file:.." to /workspace
WORKDIR /workspace
COPY . .

# Install demo dependencies (resolves file:.. to /workspace/src)
WORKDIR /workspace/demo
RUN npm install --legacy-peer-deps

EXPOSE 3000

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "3000"]
