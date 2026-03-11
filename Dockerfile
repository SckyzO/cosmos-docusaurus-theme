FROM node:20-alpine

WORKDIR /app

COPY demo/package.json demo/package-lock.json* ./
RUN npm install --legacy-peer-deps

COPY demo/ .

EXPOSE 3000

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "3000"]
