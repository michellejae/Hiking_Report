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
const { getTrailHeads } = require('./utilities/helper')


//CONSTANTS
const PORT = process.env.PORT  || 3000;

//APPLICATIONS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use('/trails', trails);
app.use(express.static('pubic'));
app.use(express.static('public'));

let resultObj = {
  length: '',
  elev: '',
  weatherConditions: null
}

app.get('/api/hikeNow/fake', (req,res) => {
  return new Trail()
  .fetchAll()
  .then(allTrails => {
    allTrails = allTrails.toJSON()
    return allTrails
  }).then(connectData => {
    console.log(connectData[0])
    connectData.map(element => {
      if(global.hikeNow.weather[element.weather]){
       // element.weather = global.hikeNow.weather[element.weather]
       resultObj[element.trailname] = {
         length: element.length_m,
         elev: element.elev_range,
         weatherConditions: global.hikeNow.weather[element.weather]
       }
      }
    }) // end of map
  }).then(result =>{
    return res.json(resultObj)
  })
})

app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON ${PORT}`);
  //timedCalls(); 
  getTrailHeads();
  //console.log(global.hikeNow)

  // updateWeatherStations();
  // getRainData();
});