FROM node:latest

RUN apt-get clean && \
    apt-get update && \
    apt-get install -yq apt-utils inotify-tools
RUN mkdir -p /usr/src/app
ADD . /usr/src/app
WORKDIR /usr/src/app
RUN yarn install
CMD yarn build