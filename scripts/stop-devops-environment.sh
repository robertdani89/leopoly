#!/bin/sh

SCRIPT_DIR="$( cd "$( dirname "$0" )" && pwd )"
DIR="$SCRIPT_DIR/../environment"

docker compose --project-directory $DIR down