//MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const trails = require('./routes/trails');
const { timedCalls } = require('./utilities/helper');
const { updateWeatherStations } = require('./utilities/updateWeatherStations');
const { getRainData } = require ('./utilities/rainData.js')
const Trail = require('./db/models/Trails');
const fakeData = require('./utilities/fakeData')
const fakeSingleTrail = require('./utilities/fakeSingleTrail')

//CONSTANTS
const PORT = process.env.PORT  || 3000;

//APPLICATIONS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use('/trails', trails);
app.use(express.static('pubic'));

let allTrailsObj = {
  length: '',
  elev: '',
  weatherConditions: null,
}

let singleTrailObj = {
  length: '',
  elev: '',
  standard: '',
  climate: '',
  features: '',
  amenities: '',
  hazard: '',
  coordinates: null,
  weatherConditions: null
}


app.get('/api/hikeNow/fake', (req, res) =>{
  return res.json(fakeData)
})

app.get('/api/hikeNow/trail/fake/:name', (req, res) => {
  let name = req.params.name
  return res.json(fakeSingleTrail[name])
})

app.get('/api/hikeNow/trail/:name', (req, res) => {
  let name = req.params.name
  return new Trail()
  .fetch({trailname: name})
  .then(singleTrail => {
    singleTrail = singleTrail.toJSON()
    return singleTrail
  }).then(result => {
    singleTrailObj.length = result.length_m,
    singleTrailObj.elev = result.evel_range,
    singleTrailObj.standard = result.standard,
    singleTrailObj.climate = result.climat,
    singleTrailObj.features = result.feature,
    singleTrailObj.amenities = result.amenitie,
    singleTrailObj.coordinates = result.coordinates[0]
    return result
  }).then(connectWeather => {
    if(global.hikeNow.weather[name]) {
      singleTrailObj.weatherConditions = global.hikeNow.weather[name]
    }
    return res.json(singleTrailObj)
  })

})

app.get('/api/hikeNow/', (req,res) => {
  return new Trail()
  .fetchAll()
  .then(allTrails => {
    allTrails = allTrails.toJSON()
    return allTrails
  }).then(connectData => {
    connectData.map(element => {
      if(global.hikeNow.weather[element.weather]){
       allTrailsObj[element.trailname] = {
         length: element.length_m,
         elev: element.elev_range,
         weatherConditions: global.hikeNow.weather[element.weather]
       }
      }
    }) 
  }).then(result =>{
    return res.json(allTrailsObj)
  })
})

app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON ${PORT}`);
  //timedCalls(); 
  // updateWeatherStations();
  // getRainData();
});