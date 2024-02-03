ARG NODE_VERSION=20.3.1

FROM node:${NODE_VERSION}-slim as base

WORKDIR /app

COPY ./package*.json /app/

RUN npm install && npm cache clean --force

COPY . .

ENV PATH ./node_modules/.bin/:$PATH