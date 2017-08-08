FROM node:8
RUN mkdir -p /api
WORKDIR /api
ADD package.json /api
ADD src/ /api
RUN npm install
RUN pwd && ls -l
EXPOSE 3000
CMD ["node", "src/helloworld.js"]
