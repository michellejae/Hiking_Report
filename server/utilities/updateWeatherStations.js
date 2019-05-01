const knex = require('../knex/knex');

module.exports = {
  updateWeatherStations: updateWeatherStations
}

function updateWeatherStations () {
  let arr = [

  knex('trails').where({trailname: 'Waahila Ridge Trail'}).update({rain: 'PFSH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kamananui Valley Road'}).update({rain: 'MOAH1', region: 'Central'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kaunala Trail (West)'}).update({rain: 'KTAH1', region: 'North'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Aiea Loop Trail'}).update({rain: 'MOAH1', region: 'Central'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kalawahine Trail'}).update({rain: 'MNLH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Puu Pia Trail'}).update({rain: 'MNLH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: `Waimano Trail Access`}).update({rain: 'PACH1', region: 'Central'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: `Kapa'ele'ele Trail`}).update({rain: 'KNRH1', region: 'North'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Makiki Valley Trail'}).update({rain: 'MNLH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Maunawili Ditch Trail'}).update({rain : 'WMLH1', region: 'East'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kulanaahane Trail'}).update({rain: 'MOAH1', region: 'Central'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Maunawili Trail Pali Access'}).update({rain : 'MAUH1', region: 'East'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Makapuu Lighthouse Road'}).update({rain: 'KMHH1', region: 'East'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Maakua Ridge Trail'}).update({rain: 'PNSH1', region: 'North'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Nahuina Trail'}).update({rain : 'MNLH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Maunawili Falls Trail'}).update({rain: 'MAUH1', region: 'East'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kaena Pt. Rd. (Waianae)'}).update({rain : 'POAH1', region: 'West'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kuliouou Ridge Trail'}).update({rain: 'NIUH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Nuuanu Trail'}).update({rain: 'MNLH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kanealole Trail'}).update({rain: 'MNLH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Manana Trail'}).update({rain: 'PACH1', region: 'Central'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kealia Trail'}).update({rain : 'POAH1', region: 'North'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Hauula Loop Trail'}).update({rain: 'PNSH1', region: 'North'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Lower Waimano Trail'}).update({rain: 'PACH1', region: 'Central'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Aihualama Trail'}).update({rain: 'MNLH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Tantalus Arboretum and Sculpture Trail'}).update({rain: 'MNLH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kuaokala Trail'}).update({rain: 'POAH1', region: 'West'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Hawailoa Ridge Trail'}).update({rain: 'NIUH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Manoa Falls Trail'}).update({rain: 'MNLH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Judd Memorial Loop Trail'}).update({rain : 'MNLH1', region: 'South'})
  .then(result => {
    return result
  })
  ,
  knex('trails').where({trailname: 'Kealia Access Road'}).update({rain: 'POAH1', region: 'North'})
  .then(result => {
    return result
  })
  ,
  knex('trails').where({trailname: 'Upper Waimano Trail'}).update({rain: 'PACH1', region : 'Central'})
  .then(result => {
    return result
  })
  ,
  knex('trails').where({trailname: 'Schofield-Waikane Trail'}).update({rain: 'OFRH1', region: 'Central'})
  .then(result => {
    return result
  })
  ,
  knex('trails').where({trailname: 'Wiliwilinui Access Road'}).update({rain: 'NIUH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Wiliwilinui Trail'}).update({rain: 'NIUH1', region: 'South'})
  .then(result => {
    return result
  })
  ,
  knex('trails').where({trailname: 'Poamoho Access Road'}).update({rain: 'OFRH1', region:'North'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Manoa Cliff Trail'}).update({rain: 'MNLH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Mokuleia-Kuaokala Firebreak Access Road'}).update({rain: 'POAH1', region: 'North'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Poamoho RidgeTrail'}).update({rain: 'OFRH1', region: 'North'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Mokuleia Forest Reserve Access Road'}).update({rain: 'POAH1', region: 'North'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Mokuleia Trail'}).update({rain: 'POAH1', region: 'North'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Pauoa Flats Trail'}).update({rain : 'MNLH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Puu Ohia Trail'}).update({rain : 'MNLH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Maunawili-Waimanalo Access Road'}).update({rain: 'WMLH1', region: 'East'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Moleka Trail'}).update({rain: 'MNLH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kaena Pt. Rd. (Mokuleia)'}).update({rain: 'POAH1', region: 'North'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kolowalu Trail'}).update({rain: 'MNLH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Maunawili Trail'}).update({rain: 'MAUH1', region: 'East', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kaena Point Trail'}).update({rain : 'POAH1', region: 'North'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Maunalaha Trail'}).update({rain : 'MNLH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Ualakaa Trail'}).update({rain: 'MNLH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Nakoa Trail'}).update({rain: 'KNRH1', region: 'North'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kuliouou Valley Trail'}).update({rain: 'NIUH1', region: 'South'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Diamond Head Trail'}).update({region: 'South'})
  .then(result => {
    return result
  })
  ]
  for(var i = 0; i < arr.length; i++){
    return arr[i]
  }
}