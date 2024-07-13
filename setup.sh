#!/bin/bash

# Update package list
sudo apt update

# Install Apache
sudo apt install -y apache2

# Install MySQL
sudo apt install -y mysql-server

# Install PHP
sudo apt install -y php libapache2-mod-php php-mysql

# Install live-server
# Access the port usinglive-server --port=8080 --host=localhost --no-browser 
sudo npm install -g live-server

echo "LAMP stack + live-server installed successfully."

# Define the project root directory
PROJECT_ROOT="project_name"

# Create the project directory structure
mkdir -p $PROJECT_ROOT/assets/{css,js,images}
mkdir -p $PROJECT_ROOT/php

# Create empty index.html
touch $PROJECT_ROOT/index.html

# Create empty README.md
touch $PROJECT_ROOT/README.md

# Create empty style.css
touch $PROJECT_ROOT/assets/css/style.css

# Create empty script.js
touch $PROJECT_ROOT/assets/js/script.js

# Create empty index.php
touch $PROJECT_ROOT/php/index.php

echo "Web development project structure created successfully."