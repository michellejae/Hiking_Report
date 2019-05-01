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
- weather underground api is dead 
  - have to go and find new weather api and rewrite function to get weather data 
  - double check your saving the global variable correctly, do i need to save all the weather categories first? aren't those 'siblings' now to each station?
  - no station id for weather so want to connect them by lat or long coordinate. 
    - need to update table so it saves latitude only on weather category
    - latitude will now replace weather station id on table and global. when front end calls route, instead of connecting weather via station id it will be via latitude. 
  - i think rain is okay? 


- need to update file that updates table with weather, rain, region categories. remove weather. 
- need to update the global variable to match the new weather api. 
- credit weather api somewhere on app
