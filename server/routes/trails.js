const express = require('express');
const router = express.Router();
const request = require('request');
const rp = require('request-promise');
const Trail = require('../db/models/Trails');

const hikingAPI = 'https://opendata.arcgis.com/datasets/f78c7f66f5c54872840044cf4310cd2d_0.geojson';


router.get('/',(req,res) => {
  rp(hikingAPI) 
  .then(trails => {
    trails = JSON.parse(trails)
    return trails.features
  }).then(newTrails => {
    newTrails.map(element => {
      return new Trail ({
        district: element.properties.DISTRICT,
        length_m: element.properties.LENGTH_M,
        elev_range: element.properties.ELEV_RANGE,
        start_pt: element.properties.START_PT,
        end_pt: element.properties.END_PT,
        standard: element.properties.STANDARD,
        climat: element.properties.CLIMAT,
        tspt_type: element.properties.TSPT_TYPE,
        feature: element.properties.FEATURE,
        amenitie: element.properties.AMENITIE,
        use_rest: element.properties.USE_REST,
        hazard: element.properties.HAZARD,
        trailname: element.properties.Trailname,
        coordinates: JSON.stringify(element.geometry.coordinates)
      }) //end of return newTrail
      .save()
      .then(result => {
        result = result.toJSON()
      })
    })
  }).then(newResult => {
    return res.json({message: 'heeeere'})
  })
  .catch(err => {
    console.log(err)
    return res.json({message: err.message}) 
  })
});

router.get('/all',(req,res) => {
  return new Trail()
  .fetchAll()
  .then(result => {
    result = result.toJSON()
    return res.json(result)
  })
  .catch(err => {
    return res.json({message: err.message})
  })
})

router.get('/:id',(req,res) => {
  console.log(req.params.id)
  return new Trail({'id': req.params.id})
  .fetch()
  .then(trail => {
  })
  .catch(err => {
    return res.json({message: err.message})
  })
})



module.exports = router;