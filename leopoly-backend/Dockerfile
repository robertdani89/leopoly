FROM node:18

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

COPY . .
COPY .env.docker .env

RUN npm run build

CMD [ "node", "dist/main.js" ]