FROM node:lts
WORKDIR /home/app/node
COPY package.json  .
COPY index.js .
EXPOSE 3000
RUN "npm" "install" 
CMD [ "node", "index.js" ]
