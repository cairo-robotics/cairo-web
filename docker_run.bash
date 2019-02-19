#!/bin/bash

echo "Pulling 'cmuell89/kinentic:dev'"
docker pull cmuell89/kinetic:dev
docker run -i -p 8080:8080 -t cmuell89/kinetic:dev /bin/bash /entrypoint.bash
