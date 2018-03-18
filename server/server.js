//MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const trails = require('./routes/trails');
const { timedCalls } = require('./utilities/helper');
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
  //timedCalls(); 
  // updateWeatherStations();
});