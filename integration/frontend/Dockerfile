#Dockerfile for the frontend service

FROM node:6

RUN mkdir -p /opt/osk/app
WORKDIR /opt/osk/app

COPY build/package.json /opt/osk/app
RUN npm install

COPY build/ /opt/osk/app
RUN npm run build

EXPOSE 3000

CMD [ "node", "server/index.js" ]
