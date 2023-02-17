FROM node:alpine AS base

WORKDIR /app
COPY . /app

RUN npm i -g --force npx
RUN npm ci
RUN npm run build

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

CMD ["npx", "serve", "-s", "dist"]