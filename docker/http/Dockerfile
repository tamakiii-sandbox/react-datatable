FROM node:8.15.0-alpine

RUN apk add --update make openssl

ENTRYPOINT npx http-server -p 80 /app/public