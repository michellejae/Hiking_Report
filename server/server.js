//MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const trails = require('./routes/trails');
const Trail = require('./db/models/Trails');
const rp = require('request-promise');
const weatherKey = require('../config/config');
const rain = require('./routes/rain');
const { getTrailHeads } = require('./utilities/helper');
const { fireWeatherApi } = require('./utilities/helper');
const { getWeatherData } = require('./utilities/helper');
const { updateWeatherStations } = require('./utilities/updateWeatherStations');

//CONSTANTS
const PORT = process.env.PORT  || 3000;

//APPLICATIONS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use('/trails', trails);
app.use(express.static('pubic'));
app.use(express.static('public'));


app.get('/api/hikeNow/fake', (req,res) => {
  return res.json(global.hikeNow)
})


app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON ${PORT}`);  
  // getTrailHeads();
  // updateWeatherStations();
});