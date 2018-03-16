//MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const trails = require('./routes/trails');
const Trail = require('./db/models/Trails');
const rp = require('request-promise');
const weatherKey = require('../config/config');

//CONSTANTS
const PORT = process.env.PORT  || 3000;

//APPLICATIONS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use('/trails', trails);
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
  display_location_full: ''
}

let WEATHERAPIKEY = weatherKey.weather.apiKey2;

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
  rp(`http://api.wunderground.com/api/${WEATHERAPIKEY}/conditions/q/21.5633764486087,-158.237758592625.json`, (err,response, body) => {
        let data = JSON.parse(body)
        // console.log(data.current_observation)
        global.hikeNowWeather.station_id = data.current_observation.station_id,
        global.hikeNowWeather.weather = data.current_observation.weather,
        global.hikeNowWeather.temperature_string = data.current_observation.temperature_string,
        global.hikeNowWeather.relative_humidity = data.current_observation.relative_humidity,
        global.hikeNowWeather.wind_dir = data.current_observation.wind_dir,
        global.hikeNowWeather.wind_mph = data.current_observation.wind_mph,
        global.hikeNowWeather.wind_gust_mph = data.current_observation.wind_gust_mph,
        global.hikeNowWeather.feelslike_string = data.current_observation.feelslike_string,
        global.hikeNowWeather.visibility_mi = data.current_observation.visibility_mi,
        global.hikeNowWeather.precip_1hr_string = data.current_observation.precip_1hr_string,
        global.hikeNowWeather.precip_today_in = data.current_observation.precip_today_in,
        global.hikeNowWeather.observation_location_latitude = data.current_observation.observation_location.latitude,
        global.hikeNowWeather.observation_location_longitude = data.current_observation.observation_location.longitude,
        global.hikeNowWeather.display_location_full = data.current_observation.display_location.full
        //console.log(global.hikeNowWeather)
      })
    }

//   for(var i in trails){
//     let latitude = trails[i].coordinates[1]
//     let longitude = trails[i].coordinates[0]
//     rp(`http://api.wunderground.com/api/d32b00d3f891bff3/conditions/q/${latitude},${longitude}.json`, (err,response, body) => {
//       let data = JSON.parse(body)

//   }) 
// }

app.get('/hikeNow/fake', (req,res) => {
  return res.json(global.hikeNowWeather)
})







app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON ${PORT}`)
  weatherData()
});