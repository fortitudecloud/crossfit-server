FROM node:7.4.0-slim
#FROM grapple
#FROM hypriot/rpi-node
#FROM amble/nodemonjs7-pi

WORKDIR /app
COPY . /app

RUN npm install -g typescript
# RUN npm install -g nodemon

RUN npm install

RUN tsc -p ./src

EXPOSE 3000
#EXPOSE 5858

#CMD [ "npm", "run", "debug" ]
CMD [ "npm", "run", "start" ]
#CMD [ "npm", "run", "nodemon" ]
