FROM node:12-alpine3.12 as build

WORKDIR /usr/src/app

COPY package*.json ./
COPY dist/ dist/

EXPOSE 3000
CMD [ "npm", "run", "docker:start"   ]

