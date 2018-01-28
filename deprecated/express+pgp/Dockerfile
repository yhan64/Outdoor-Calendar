FROM node:8
WORKDIR /api
ADD package.json /api
ADD src/ /api/src
RUN npm install
EXPOSE 3000
CMD ["node", "src/helloworld.js"]
