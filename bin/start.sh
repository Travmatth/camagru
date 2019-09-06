#!/bin/sh
if [-x "$(command -v docker-machine)"]; then
	docker-machine start Camagru
	eval $(docker-machine env Camagru)
	docker-machine ssh Camagru sudo mkdir /client
	docker-machine ssh Camagru sudo mount -t vboxsf client /client
	export CAMAGRU_LOCAL_VOL="/client"
else
	export CAMAGRU_LOCAL_VOL="$PWD/client"
fi
docker-compose -f docker/compose.development.yaml up -d