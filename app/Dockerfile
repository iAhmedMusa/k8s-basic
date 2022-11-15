FROM --platform=linux/amd64 node:16-alpine
# FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

ENV DB_NAME=
ENV DB_HOST=
ENV DB_USER=
ENV DB_PASS=

EXPOSE 3000

CMD ["node", "app.js"]