# osk
office_shared_knowledge_library

## Frontend

- package for production: `npm run build`
> if all goes fine, a *build/* dir should have been generated  

- start the server: 'node frontend/server/index.js`
> the server will serve the files under the *../build/* dir  
 server will run at *http://localhost:3000`

## Backend

- run the server: `node app.js`
> the server will run at *http://localhost:5000*

## integration

as a Linux service
- one way to deploy those servers is to run them as systemd services
> make the *frontend/server/index.js* and *backend/app.js* executables
 copy the both *.service* files under *integration* at */etc/sytemd/system/*
 start them *systemctl start osk* and *systemd start api*

as a docker container
- each server can be ran inside a docker container. There are a Dockerfile and a Makefile
for the frontend and the backend server.
> Running `make` will create a local `build` dir and copy there all the needed source files.
then a `docker build` command is triggered to create the proper docker image.
The image can be launched with the `docker run` command.
i.e: `docker run -p 8081:5000 --name=osk_backend_server -d osk/backend:latest`
- mapping host port with container port
- naming the container
- running in detached mode

It is possible to inspect the container logs with `docker logs <container_id>` command.
It is possible to enter the container with `docker exec -it <container_id> /bin/bash`
