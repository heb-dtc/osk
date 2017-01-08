#Dockerfile for the repository service

FROM mysql:5

ENV MYSQL_ROOT_PASSWORD routepass  
ENV MYSQL_DATABASE officeSharedKnowledge  
ENV MYSQL_USER osk  
ENV MYSQL_PASSWORD kso

ADD setup.sql /docker-entrypoint-initdb.d  
