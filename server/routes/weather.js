const express = require('express');
const router = express.Router();
const request = require('request');
const key = require('../../config/config');

// const WEATHERAPIKEY = key.weather.apiKey;
const longitude = null;
const latitude = null;

router.get('/',(req,res) => {
  // console.log(req)
  request(`http://api.wunderground.com/api/${WEATHERAPIKEY}/conditions/q/${latitude},${longitude}.json`, (error,response,body) => {
    // console.log(body)
  })
})


module.exports = router;