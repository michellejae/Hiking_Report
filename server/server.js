//MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const trails = require('./routes/trails');
const weather = require('./routes/weather');

//CONSTANTS
const PORT = process.env.PORT  || 3000;

//APPLICATIONS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));


app.use('/trails', trails);
app.use('/weather', weather);
app.use(express.static('pubic'));


app.get('/', (req,res) => {
  res.send('smoke')
})


app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON ${PORT}`)
});