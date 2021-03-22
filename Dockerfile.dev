# pull official base image
FROM node:15.11.0-alpine3.10

# create working directory
RUN mkdir /app

# set working directory
WORKDIR /app

# copy app dependencies
COPY package.json /app

# install app dependencies
RUN npm install

# add app
COPY . /app

# start app
CMD ["npm", "start"]