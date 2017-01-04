FROM node:7.3.0
ADD . /code
WORKDIR /code
RUN npm install -g gulp
RUN npm install
