FROM node:18

WORKDIR /opt/frontend

COPY . /opt/frontend

RUN npm install express

#ENTRYPOINT ["node", "app.js"]