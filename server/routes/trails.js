const express = require('express');
const router = express.Router();
const request = require('request');

const hikingAPI = 'https://opendata.arcgis.com/datasets/f78c7f66f5c54872840044cf4310cd2d_0.geojson';

router.get('/',(req,res) => {
  request(hikingAPI, (error,response,body) => {
    // console.log('error',error)
    // console.log('statusCode',response && response.statusCode)
    // console.log('body',body)
    
        console.log(body)
  })
});











module.exports = router;