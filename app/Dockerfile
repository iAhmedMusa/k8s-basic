FROM node:18-alpine

WORKDIR /usr/app
COPY package*.json .
RUN npm install
COPY . .
ENV MONGODB_SERVER=localhost \
    MONGODB_ADMINUSERNAME=admin \
    MONGODB_ADMINPASSWORD=password \
    DB_NAME=testDB
EXPOSE 3000

CMD [ "npm","start" ]
