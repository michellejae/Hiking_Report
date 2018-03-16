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

//IN MEMORY
let inMemTrails = {}

app.get('/', (req,res) => {
  console.log('i got fired')
  return new Trail ()
  .fetchAll()
  .then(result => {
    result.map(element => {
      inMemTrails[element.attributes.trailname] = {
        coordinates: element.attributes.coordinates[0]}
    })
    weatherData(inMemTrails)
  })
  .catch(err => {
    return res.json({message: err.message})
  })
})

let WEATHERAPIKEY = weatherKey.weather.apiKey;

function weatherData (obj) {
  for(var i in obj){
    let latitude = obj[i].coordinates[1]
    let longitude = obj[i].coordinates[0]
    rp(`http://api.wunderground.com/api/${WEATHERAPIKEY}/conditions/q/${latitude},${longitude}.json`, (err,response, body) => {
      console.log(' yo its the weather',body)
    })
  }
}








app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON ${PORT}`)
});