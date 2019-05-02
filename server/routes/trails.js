const request = require('request');
const rp = require('request-promise');
const Trail = require('../db/models/Trails');

const hikingAPI = 'https://opendata.arcgis.com/datasets/f78c7f66f5c54872840044cf4310cd2d_0.geojson';

module.exports = {
  getTrails
}

function getTrails(){
  let coords;
  return rp(hikingAPI) 
  .then(trails => {
    trails = JSON.parse(trails)
    return trails.features
  }).then(newTrails => {
   newTrails.map(element => {
     console.log()
     coords = element.geometry.coordinates[0][0]
     if(element.properties.Trailname === 'Ualakaa Trail'){
      return new Trail ({
        district: element.properties.DISTRICT,
        length_m: element.properties.LENGTH_M,
        elev_range: element.properties.ELEV_RANGE,
        climat: element.properties.CLIMAT,
        tspt_type: element.properties.TSPT_TYPE,
        feature: element.properties.FEATURE,
        amenitie: element.properties.AMENITIE,
        use_rest: element.properties.USE_REST,
        hazard: element.properties.HAZARD,
        trailname: element.properties.Trailname,
        coordinates: JSON.stringify(element.geometry.coordinates[0][0]),
        weather: JSON.stringify(element.geometry.coordinates[0][0][0]),
        standard: element.properties.STANDARD
      }) 
      .save()
     } else {
      return new Trail ({
        district: element.properties.DISTRICT,
        length_m: element.properties.LENGTH_M,
        elev_range: element.properties.ELEV_RANGE,
        climat: element.properties.CLIMAT,
        tspt_type: element.properties.TSPT_TYPE,
        feature: element.properties.FEATURE,
        amenitie: element.properties.AMENITIE,
        use_rest: element.properties.USE_REST,
        hazard: element.properties.HAZARD,
        trailname: element.properties.Trailname,
        coordinates: JSON.stringify(element.geometry.coordinates[0]),
        weather: JSON.stringify(element.geometry.coordinates[0][0]),
        standard: element.properties.STANDARD
      }) 
      .save()
    }
    return element
  })
}).catch(err => {
    console.log(err)
  })
  console.log('cool')
}


