#!/bin/bash
docker network create --subnet 172.50.0.0/16 bananat
docker-compose build
docker-compose up