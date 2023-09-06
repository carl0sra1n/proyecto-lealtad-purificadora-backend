FROM node:18.17.1
WORKDIR /app
COPY package.json /app/
RUN npm i
COPY . /app
RUN npm install -g sails
CMD sails lift
