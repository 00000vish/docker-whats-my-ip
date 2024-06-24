FROM node:current-alpine3.19

ENV PORT=3000

WORKDIR /server
COPY public ./public
COPY package.json ./package.json
COPY server.js ./server.js

RUN npm install

CMD ["npm", "run" ,"server"]

EXPOSE $PORT
