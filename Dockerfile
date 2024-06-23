FROM node:current-alpine3.19

WORKDIR /server
COPY public ./public
COPY package.json ./package.json
COPY server.js ./server.js

RUN npm install

CMD ["npm", "run" ,"server"]

EXPOSE 3000
