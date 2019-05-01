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


#MY STUFF TO DO
-run the functions at the bottom of server.js to get data once you have everything up for db
-button on top right is not working
-update global variable api to include latitude in the global.hikeNow.weather[latitude] = latitude, summary, etc
- credit weather api somewhere on app
- got revisit node schedule to confirm the timing
