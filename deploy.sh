#!/bin/bash
echo "Ricevuto Webhook, iniziando il deploy..."

cd ~/digitaldetox || exit
git pull origin main
docker-compose down
docker-compose up -d --build

echo "Deploy completato!"
