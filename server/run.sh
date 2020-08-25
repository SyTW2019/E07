#!/bin/bash
docker build . -t bananat_server:1.0
docker run --name bananat_server -it bananat_server:1.0