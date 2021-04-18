FROM node:10-alpine

# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy the app, note .dockerignore
COPY . /usr/src/app
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

RUN npm run build

EXPOSE 3000
CMD [ "node", "server.js" ]