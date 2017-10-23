FROM java:8-alpine
MAINTAINER cpark@basistech.com

RUN mkdir -p /.npm && mkdir -p /.config && chmod 777 /.npm && chmod 777 /.config
RUN apk update && apk add nodejs && npm install npm@latest -g
RUN npm install -g --save handlebars

WORKDIR /source
CMD npm install && npm run-script build && echo "Build Complete"