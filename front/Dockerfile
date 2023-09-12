FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm build

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
