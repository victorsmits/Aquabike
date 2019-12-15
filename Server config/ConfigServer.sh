#!/usr/bin/env bash
sudo apt-get install rsync -y
sudo apt-get update
sudo apt upgrade -y
sudo apt -y install lsb-release apt-transport-https ca-certificates
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list
sudo apt update
sudo apt-get install -y php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip
sudo apt-get install -y php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json php7.3-gd
sudo apt-get install -y nginx vim htop
chmod -R 777 /var/
