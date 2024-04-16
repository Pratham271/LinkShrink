FROM node:21

WORKDIR /backend/app/src

COPY package* .

RUN npm install

COPY . .

CMD [ "node", "index.js" ]