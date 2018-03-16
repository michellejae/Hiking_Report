# Hiking Report

# SETUP DATABASE
-IN POSTGRES
  -create role 'your user' with password 'your password';
  -create database 'your database name' with owner 'your user';
  -alter role 'your user' with login;

-CREATE CONFIG FOLDER IN ROOT DIRECTORY
  -mkdir config
  -cd config
  -touch config.js

-SETUP KNEX
  -knex init

-IN KNEX.JS FILE
  -change development with: 
  