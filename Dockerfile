FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm i

COPY . .

EXPOSE 3000
ARG ENV

CMD ["npm", "dev"]; 

