FROM alpine
RUN apk add --update nodejs nodejs-npm
WORKDIR /usr/src/minnoserver
RUN npm install pm2 -g
COPY . /usr/src/minnoserver
EXPOSE 8000
CMD ["pm2-docker", "start", "route.js"]
