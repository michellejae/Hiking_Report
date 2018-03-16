//MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const trails = require('./routes/trails');
const weather = require('./routes/weather');
const Trail = require('./db/models/Trails');
const rp = require('request-promise');

//CONSTANTS
const PORT = process.env.PORT  || 3000;

//ROUTES
const rainRoutes = require(`./routes/rain`);

//APPLICATIONS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(express.static('public'));

//ENDPOINTS
app.use(`/rain`, rainRoutes);
app.use('/trails', trails);
app.use('/weather', weather);


//IN MEMORY
let inMemTrails = {};
let inMemRain = {};

app.get('/', (req,res) => {
  return new Trail ()
  .fetchAll()
  .then(result => {
    result.map(element => {
      inMemTrails[element.attributes.trailname] = {
        coordinates: element.attributes.coordinates[0]}
    })
  })
})

app.get('/', (req,res) => {

})



app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON ${PORT}`)
});