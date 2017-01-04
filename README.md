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

- one way to deploy those servers is to run them as systemd services
> make the *frontend/server/index.js* and *backend/app.js* executables
 copy the both *.service* files under *integration* at */etc/sytemd/system/*
 start them *systemctl start osk* and *systemd start api*

