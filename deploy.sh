#!/usr/bin/env bash
cd ./frontend; ng build --prod;
rsync -avzh   ./dist/frontend/   root@51.178.29.162:/var/www/frontend;
rsync -avzh --exclude='.git' ../backend/ root@51.178.29.162:/var/www/backend;
ssh root@51.178.29.162 chmod -R 777 /var/
