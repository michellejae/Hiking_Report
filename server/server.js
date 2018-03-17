//MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const trails = require('./routes/trails');
const Trail = require('./db/models/Trails');
const rp = require('request-promise');
const weatherKey = require('../config/config');
const knex = require('./knex/knex');

//CONSTANTS
const PORT = process.env.PORT  || 3000;
let WEATHERAPIKEY = weatherKey.weather.apiKey2;
const WEATHER_API_ENDPOINT = `http://api.wunderground.com/api/${WEATHERAPIKEY}/conditions/q/`;

//APPLICATIONS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use('/trails', trails);
app.use(express.static('public'));

global.hikeNow = {};

global.hikeNow.weather = {
    unknown: {
      station_id: '',
      weather: '',
      temperature_string: '',
      relative_humidity: '',
      wind_dir: '',
      wind_mph: '',
      wind_gust_mph: '',
      feelslike_string: '',
      visibility_mi: '',
      precip_1hr_string: '',
      precip_today_in: '',
      observation_location_latitude: '',
      observation_location_longitude: '',
      display_location_full: ''
  }
}

function getTrailHeads () {
  let trails = [];
  new Trail()
  .fetchAll()
  .then(result => {
    result.map(element => {
      if(element.attributes.trailname !== 'Ualakaa Trail'){
        trails.push(element.attributes.coordinates[0]);
      }
    })
    fireWeatherAPI(trails);
  })
}

function fireWeatherAPI (arr) {
  arr.map(element => {
    let latitude = element[1];
    let longitude = element[0];
    getWeatherData(latitude,longitude);
  })
}

function getWeatherData(lat,long){
    return rp(`${WEATHER_API_ENDPOINT}${lat},${long}.json`)
      .then(json => {
        return JSON.parse(json);
      })
      .then(data => {
        if(data.current_observation.station_id){
          global.hikeNow[data.current_observation.station_id] = {
            city: data.current_observation.display_location.city,
            state: data.current_observation.display_location.city,
            longitude: data.current_observation.display_location.longitude,
            latitude: data.current_observation.display_location.latitude,
            observation_time: data.current_observation.observation_time,
            weather: data.current_observation.weather,
            temp_f: data.current_observation.temp_f,
            temp_c: data.current_observation.temp_c,
            relative_humidity: data.current_observation.relative_humidity,
            wind_dir: data.current_observation.wind_dir,
            wind_degrees: data.current_observation.wind_degrees,
            wind_mph: data.current_observation.wind_mph,
            wind_gust_mph: data.current_observation.wind_gust_mph,
            wind_gust_kph: data.current_observation.wind_gust_kph,
            feelslike_f: data.current_observation.feelslike_f,
            feelslike_c: data.current_observation.feelslike_c,
            visibility_mi: data.current_observation.visibility_mi,
            visibility_km: data.current_observation.visibility_km,
            UV: data.current_observation.UV
          };
        }else{
          return global.hikeNow.weather;
        }
      })
      .catch(err => {
        console.log(err)
      });
};

function updateWeatherStations () {
  let arr = [

  knex('trails').where({trailname: 'Waahila Ridge Trail'}).update({weather: 'KHIAIEA8'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Kamananui Valley Road'}).update({weather: 'KHIAIEA8'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Kaunala Trail (West)'}).update({weather: 'KHIAIEA8'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Aiea Loop Trail'}).update({weather: 'KHIAIEA8'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Kalawahine Trail'}).update({weather: 'KHIWAIAN3'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Puu Pia Trail'}).update({weather: 'KHIHONOL140'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Poamoho Access Road'}).update({weather: 'KHIWAHIA5'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: `Waimano Trail Access`}).update({weather: 'KHIHONOL140'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: `Kapa'ele'ele Trail`}).update({weather: 'KHIHONOL111'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Makiki Valley Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Maunawili Ditch Trail'}).update({weather: 'KHIHALEI8'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Kulanaahane Trail'}).update({weather: 'KHIHALEI8'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Maunawili Trail Pali Access'}).update({weather: 'KHIHALEI8'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Makapuu Lighthouse Road'}).update({weather: 'KHIHALEI8'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Maakua Ridge Trail'}).update({weather: 'KHIHALEI8'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Nahuina Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Maunawili Falls Trail'}).update({weather: 'KHIKAILU2'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Kaena Pt. Rd. (Waianae)'}).update({weather: 'KHIWAIAN3'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Kuliouou Ridge Trail'}).update({weather: 'KHIHONOL131'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Nuuanu Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Kanealole Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Manana Trail'}).update({weather: 'KHIAIEA8'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Kealia Trail'}).update({weather: 'KHIWAIAN3'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Hauula Loop Trail'}).update({weather: 'KHIHALEI8'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Lower Waimano Trail'}).update({weather: 'KHIHONOL140'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Aihualama Trail'}).update({weather: 'KHIHONOL140'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Tantalus Arboretum and Sculpture Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Kuaokala Trail'}).update({weather: 'KHIWAIAN3'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Hawailoa Ridge Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Manoa Falls Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Judd Memorial Loop Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    console.log(result)
  })
  ,
  knex('trails').where({trailname: 'Kealia Access Road'}).update({weather: 'KHIWAIAN3'})
  .then(result => {
    console.log(result)
  })
  ,
  knex('trails').where({trailname: 'Upper Waimano Trail'}).update({weather: 'KHIKAILU7'})
  .then(result => {
    console.log(result)
  })
  ,
  knex('trails').where({trailname: 'Schofield-Waikane Trail'}).update({weather: 'KHIMILIL19'})
  .then(result => {
    console.log(result)
  })
  ,
  knex('trails').where({trailname: 'Wiliwilinui Access Road'}).update({weather: 'KHIHONOL14'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Wiliwilinui Trail'}).update({weather: 'KHIHONOL14'})
  .then(result => {
    console.log(result)
  })
  ,
  knex('trails').where({trailname: 'Poamoho Access Road'}).update({weather: 'KHIWAHIA5'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Manoa Cliff Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Mokuleia-Kuaokala Firebreak Access Road'}).update({weather: 'KHIWAHIA5'})
  .then(result => {
    console.log(result)
  }),
  knex('trails').where({trailname: 'Poamho RidgeTrail'}).update({weather: 'KHIWAHIA5'})
  .then(result => {
    console.log(result)
  })
  ]

  for(var i = 0; i < arr.length; i++){
    return arr[i]
  }
}





app.get('/api/hikeNow/fake', (req,res) => {
  return res.json(global.hikeNow)
})


app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON ${PORT}`);
  getTrailHeads();
  updateWeatherStations()
});