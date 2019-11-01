#!/bin/sh

set -eu

if [ -x "$(command -v docker-machine)" ]; then
	docker-machine start Camagru
	eval "$(docker-machine env Camagru)"
	docker-machine ssh Camagru sudo mkdir /client
	docker-machine ssh Camagru sudo mount -t vboxsf client /client
	export CAMAGRU_LOCAL_VOL="/client/node_modules"
else
	export CAMAGRU_LOCAL_VOL="$PWD/client/node_modules"
fi
docker-compose -f docker/compose.development.yaml up -d
echo "Finished setup, run:\n" '$(docker-machine env Camagru)'