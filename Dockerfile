FROM java:8-alpine
MAINTAINER cpark@basistech.com

RUN apk update && apk add nodejs && npm install npm@latest -g
RUN npm install --save handlebars

WORKDIR /source
CMD npm install && npm run-script build && echo "Build Complete"