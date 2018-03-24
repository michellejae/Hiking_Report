//MODULES
const express = require('express');
const app = express();
const rp = require('request-promise');
const bodyParser = require('body-parser');
const path = require('path');
const trails = require('./routes/trails');
const { randomGoodTrail } = require('./utilities/helper');
const {timedCalls, updateWeatherStations } = require('./utilities/updateWeatherStations');
const { getRainData, getRainTotalData } = require ('./utilities/rainData.js')
const Trail = require('./db/models/Trails');
const fakeGoodData = require('./utilities/fakeGoodData')
const fakeAllData = require('./utilities/fakeAllData')
const fakeSingleData = require('./utilities/fakeSingleData')
const { getTrailHeads } = require('./utilities/helper')
const { timedWeather, timedRain } = require('./utilities/nodeSchedule')
const { getTrails } = require('./routes/trails')

//CONSTANTS
const PORT = process.env.PORT  || 3000;

//APPLICATIONS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));


app.use(express.static('public'));


app.get('/api/hikeNow/trail/:name', (req, res) => {
  let name = req.params.name
  return new Trail()
  .where({trailname: name})
  .fetch()
  .then(singleTrail => {
    singleTrail = singleTrail.toJSON()
    return singleTrail
  }).then(finalSingleTrail => {
    const trailWeather = global.hikeNow.weather[finalSingleTrail.weather]
    finalSingleTrail.weather = trailWeather
    const rainWeather = global.hikeNow.rain[finalSingleTrail.rain]
    finalSingleTrail.rain = rainWeather
    return res.json(finalSingleTrail)
  }).catch(err =>{
    console.log(err)
  })
})

app.get('/api/hikeNow', (req, res) => {
  return new Trail()
  .fetchAll()
  .then(allTrails => {
    allTrails = allTrails.toJSON()
    return allTrails
 }).then(trails => {
   return trails.map(trail => {
    const trailweather = global.hikeNow.weather[trail.weather]
    trail.weather = trailweather
    const rainWeather = global.hikeNow.rain[trail.rain]
    trail.rain = rainWeather
    return trail
    }).filter(trail => {

     if (trail.weather && (trail.weather.wind_gust_mph !== undefined)){
       if(trail.weather.wind_gust_mph < 25) {
         if(trail.rain && trail.rain.rainfall) {
           return trail.rain.rainfall < .4999
         }
       }
      }
    })
  }).then(goodTrails => {
    let goodRandomTrails = []
    goodRandomTrails.push(goodTrails[randomGoodTrail(goodTrails)])
    goodRandomTrails.push(goodTrails[randomGoodTrail(goodTrails)])    
    goodRandomTrails.push(goodTrails[randomGoodTrail(goodTrails)])
    return res.json(goodRandomTrails)
  }).catch(err =>{
    console.log(err)
  })
})

app.get('/api/hikeNow/all', (req, res) => {
  return new Trail()
  .fetchAll()
  .then(allTrails => {
    allTrails = allTrails.toJSON()
    return allTrails
  }).then(trails => {
   return trails.map(trail => {
    const trailweather = global.hikeNow.weather[trail.weather]
    trail.weather = trailweather
    const rainWeather = global.hikeNow.rain[trail.rain]
    trail.rain = rainWeather
    return trail
    })
  }).then(allTrails => {
      return res.json(allTrails)
  }).catch(err =>{
    console.log(err)
  })
})

app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON ${PORT}`);
  //  getTrails();
  //getTrailHeads();
  //getRainTotalData();
  //timedRain();
  //timedWeather();
  //getRainData();
  // updateWeatherStations();
});