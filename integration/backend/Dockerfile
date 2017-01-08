#Dockerfile for the backend service

FROM node:6

RUN mkdir -p /opt/osk/app
WORKDIR /opt/osk/app

COPY build/package.json /opt/osk/app
RUN npm install

COPY build/ /opt/osk/app

EXPOSE 5000

CMD [ "node", "app.js" ]
