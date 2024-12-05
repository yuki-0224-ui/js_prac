FROM node:20-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache git

RUN npm install -g npm@latest \
        nodemon

RUN apk add --no-cache bash vim
