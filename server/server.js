//MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const trails = require('./routes/trails');
const weather = require('./routes/weather');
const Trail = require('./db/models/Trails');
const rp = require('request-promise');
const weatherKey = require('../config/config');

//CONSTANTS
const PORT = process.env.PORT  || 3000;

//APPLICATIONS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use('/trails', trails);
app.use('/weather', weather);
app.use(express.static('pubic'));

global.hikeNowWeather = {
  station_id: '',
  weather: '',
  temperature_string: '',
  relative_humidity: '',
  wind_dir: '',
  wind_mph: '',
  wind_gust_mph: '',
  feelslike_string: '',
  visibility_mi: '',
  precip_1hr_string: '',
  precip_today_in: '',
  observation_location_latitude: '',
  observation_location_longitude: '',
}

let WEATHERAPIKEY = weatherKey.weather.apiKey;

function weatherData () {
  let trails = {}
  new Trail()
  .fetchAll()
  .then(result => {
    result.map(element => {
      trails[element.attributes.trailname] = {
      coordinates: element.attributes.coordinates[0]}
    })
  })
  rp(`http://api.wunderground.com/api/d32b00d3f891bff3/conditions/q/21.5633764486087,-158.237758592625.json`, (err,response, body) => {
        let data = JSON.parse(body)
        global.hikeNowWeather = {
          station_id: data.current_observation.station_id,
          weather: data.current_observation.weather,
          temperature_string: data.current_observation.temperature_string,
          relative_humidity: data.current_observation.relative_humidity,
          wind_dir: data.current_observation.wind_dir,
          wind_mph: data.current_observation.wind_mph,
          wind_gust_mph: data.current_observation.wind_gust_mph,
          feelslike_string: data.current_observation.feelslike_string,
          visibility_mi: data.current_observation.visibility_mi,
          precip_1hr_string: data.current_observation.precip_1hr_string,
          precip_today_in: data.current_observation.precip_today_in,
          observation_location_latitude: data.current_observation.observation_location.latitude,
          observation_location_longitude: data.current_observation.observation_location.longitude,
        }
  // for(var i in trails){
  //   let latitude = trails[i].coordinates[1]
  //   let longitude = trails[i].coordinates[0]
  //   rp(`http://api.wunderground.com/api/d32b00d3f891bff3/conditions/q/${latitude},${longitude}.json`, (err,response, body) => {
  //     let data = JSON.parse(body)
  //     if(data.current_observation.temp_f){
  //       return obj[i].temp_f = data.current_observation.temp_f
  //     }else if(data.current_observation.temp_f == undefined){
  //       return obj[i].temp_f = 'unknown'
  //     }
  })
}








app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON ${PORT}`)
  weatherData()
});