# HIKING REPORT

# SETUP DATABASE
-IN POSTGRES
  -create role 'your user' with password 'your password';
  -create database 'your database name' with owner 'your user';
  -alter role 'your user' with login;
# SETUP CONFIG
-CREATE CONFIG FOLDER IN ROOT DIRECTORY
  -mkdir config
  -cd config
  -touch config.js

-CONFIG FILE SHOULD LOOK SOMETHING LIKE

  module.exports = {
  database: {
    user: 'user',
    password: 'password',
    database: 'database name'
  },
  weather: {
    apiKey: 'your api key',
    apiKey2: 'your api key'
  },
  map: {
    key: 'your api key'
  }
}