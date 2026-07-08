FROM node:24-alpine AS builder

WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM node:24-alpine

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package.json .
RUN npm i --omit=dev

EXPOSE 3000
CMD ["node", "dist/index.js"]