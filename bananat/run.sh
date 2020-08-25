#!/bin/bash
docker build . -t bananat_angular:1.0
docker run --name bananat_angular -it bananat_angular:1.0