#!/bin/sh
docker run -it \
    --name mm \
    --rm \
    -p 8080:8080 \
    -v /$(pwd):/opt/magic_mirror/modules/mmm-pegelstand \
    -v /$(pwd)/docker/config.js:/opt/magic_mirror/config/config.js \
    -v /$(pwd)/docker/custom.css:/opt/magic_mirror/css/custom.css \
    karsten13/magicmirror:v2.27.0 npm run server