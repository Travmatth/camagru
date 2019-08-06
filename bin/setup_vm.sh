#!/bin/sh
docker-machine start Camagru
eval $(docker-machine env Camagru)
docker-machine ssh Camagru sudo mkdir /client
docker-machine ssh Camagru sudo mount -t vboxsf client /client
echo 'docker-machine created, run `eval $(docker-machine env Camagru)` to connect to current shell'