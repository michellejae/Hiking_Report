const express = require('express');
const router = express.Router();
const request = require('request');

const hikingAPI = 'https://opendata.arcgis.com/datasets/f78c7f66f5c54872840044cf4310cd2d_0.geojson';

router.get('/',(req,res) => {
  request(hikingAPI, (error,response,body) => {
    let data = JSON.parse(body)
    // console.log(test.features)
    data.features.map(element => {
      console.log(element.geometry.coordinates)
      return new Hike ({
        objectid_1: element.properties.OBJECTID_1,
        objectid: element.properties.OBJECTID,
        trail_num: element.properties.TRAIL_NUM,
        quad: element.properties.QUAD,
        district: element.properties.DISTRICT,
        yrcreated: element.properties.YRCREATED,
        length_m: element.properties.LENGTH_M,
        elev_range: element.properties.ELEV_RANGE,
        st_access: element.properties.ST_ACCESS,
        start_pt: element.properties.START_PT,
        end_pt: element.properties.END_PT,
        standard: element.properties.STANDARD,
        climat: element.properties.CLIMAT,
        tspt_type: element.properties.TSPT_TYPE,
        feature: element.properties.FEATURE,
        amenitie: element.properties.AMENITIE,
        use_rest: element.properties.USE_REST,
        hazard: element.properties.HAZARD,
        comment: element.properties.COMMENT,
        trailname: element.properties.Trailname,
        web_link: element.properties.Web_Link,
        nah: element.properties.NAH,
        trail_url: element.properties.Trail_URL,
        coordinates: element.geometry.coordinates
      })
    })
  })
});



module.exports = router;