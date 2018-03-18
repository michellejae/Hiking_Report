//MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const trails = require('./routes/trails');
<<<<<<< HEAD
const { timedCalls } = require('./utilities/helper');
=======
const Trail = require('./db/models/Trails');
const rp = require('request-promise');
const weatherKey = require('../config/config');
const { getTrailHeads } = require('./utilities/helper');
const { fireWeatherApi } = require('./utilities/helper');
const { getWeatherData } = require('./utilities/helper');
>>>>>>> f6503810f611cf70672a1609f3dfaf611bb03977
const { updateWeatherStations } = require('./utilities/updateWeatherStations');
const { getRainData } = require ('./utilities/rainData.js')

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
<<<<<<< HEAD
  console.log(`SERVER IS LISTENING ON ${PORT}`);
  //timedCalls(); 
  // updateWeatherStations();
=======
  console.log(`SERVER IS LISTENING ON ${PORT}`);  
  // getTrailHeads();
  // updateWeatherStations();
  // getRainData();

>>>>>>> f6503810f611cf70672a1609f3dfaf611bb03977
});