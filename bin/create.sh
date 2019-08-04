#!/bin/sh

docker-machine create --driver=virtualbox Camagru
docker-machine ip Camagru
echo 'Connect docker-machine: eval $(docker-machine env Camagru)'