//MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const trails = require('./routes/trails');
const { randomGoodTrail } = require('./utilities/helper');
const {timedCalls, updateWeatherStations } = require('./utilities/updateWeatherStations');
const { getRainData } = require ('./utilities/rainData.js')
const Trail = require('./db/models/Trails');
const fakeGoodData = require('./utilities/fakeGoodData')
const fakeAllData = require('./utilities/fakeAllData')
const fakeSingleTrail = require('./utilities/fakeSingleTrail')
//const { getTrailHeads } = require('./utilities/helper')


//CONSTANTS
const PORT = process.env.PORT  || 3000;

//APPLICATIONS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use('/trails', trails);
app.use(express.static('pubic'));

app.get('/api/hikeNow/fake', (req, res) =>{
let randomGoodTrails = [];
randomGoodTrails.push(fakeGoodData[randomGoodTrail(fakeAllData)])
randomGoodTrails.push(fakeGoodData[randomGoodTrail(fakeAllData)])
randomGoodTrails.push(fakeGoodData[randomGoodTrail(fakeAllData)])

return res.json(randomGoodTrails)

})

app.get('/api/hikeNow/FUCK', (req, res) =>{
 return res.json(fakeAllData)
    
})


app.get('/api/hikeNow/trail/fake/:name', (req, res) => {
  let name = req.params.name
  return res.json(fakeSingleTrail[name])
})

// app.get('/api/hikeNow/trail/:name', (req, res) => {
//   let name = req.params.name
//   return new Trail()
//   .fetch({trailname: name})
//   .then(singleTrail => {
//     singleTrail = singleTrail.toJSON()
//     return singleTrail
//   }).then(result => {
//     singleTrailObj.length = result.length_m,
//     singleTrailObj.elev = result.evel_range,
//     singleTrailObj.standard = result.standard,
//     singleTrailObj.climate = result.climat,
//     singleTrailObj.features = result.feature,
//     singleTrailObj.amenities = result.amenitie,
//     singleTrailObj.coordinates = result.coordinates[0]
//     return result
//   }).then(connectWeather => {
//     if(global.hikeNow.weather[name]) {
//       singleTrailObj.weatherConditions = global.hikeNow.weather[name]
//     }
//     return res.json(singleTrailObj)
//   })
// })

app.get('/api/hikeNow/', (req, res) => {
  return new Trail()
  .fetchAll()
  .then(allTrails => {
    allTrails = allTrails.toJSON()
    return allTrails
  }).then(trails => {
   return trails.map(trail => {
    const trailweather = global.hikeNow.weather[trail.weather]
    trail.weather = trailweather
    return trail
    }).filter(trail => {
     if(trail.weather && trail.weather.wind_gust_mph){
       return trail.weather.wind_gust_mph < 25
     }
    })
  }).then(goodTrails => {
  
    return res.json(goodTrails)
  })
})

app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON ${PORT}`);
  //timedCalls(); 
  // updateWeatherStations();
  // getRainData();
});