//MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const trails = require('./routes/trails');
const { getTrailHeads } = require('./utilities/helper');
const { fireWeatherApi } = require('./utilities/helper');
const { getWeatherData } = require('./utilities/helper');

//CONSTANTS
const PORT = process.env.PORT  || 3000;

//APPLICATIONS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use('/trails', trails);
app.use(express.static('pubic'));

app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON ${PORT}`);
  getTrailHeads();
});