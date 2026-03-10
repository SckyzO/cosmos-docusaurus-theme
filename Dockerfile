FROM node:20-alpine

WORKDIR /app

# Install demo site dependencies
# cosmos-docusaurus-theme is installed from the published npm package
COPY demo/package.json ./package.json

# Replace the local file: reference with the published npm package
RUN sed -i 's|"cosmos-docusaurus-theme": "file:\.\."||g' package.json && \
    sed -i '/^  "cosmos-docusaurus-theme"/d' package.json && \
    npm install --legacy-peer-deps && \
    npm install cosmos-docusaurus-theme --legacy-peer-deps

# Copy demo source files
COPY demo/ .

EXPOSE 3000

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "3000"]
