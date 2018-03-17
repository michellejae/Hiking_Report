const knex = require('../knex/knex');

module.exports = {
  updateWeatherStations: updateWeatherStations
}

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