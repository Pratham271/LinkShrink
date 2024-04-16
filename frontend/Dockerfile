FROM node:20

WORKDIR /frontend/app/src

COPY package* .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]