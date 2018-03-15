const express = require('express');
const router = express.Router();
const request = require('request');

const WEATHERAPIKEY = '3473543e1f51e009';
const longitude = null;
const latitude = null;

router.get('/',(req,res) => {
  request(`http://api.wunderground.com/api/${WEATHERAPIKEY}/conditions/q/${latitude},${longitude}.json`, (error,response,body) => {
    console.log(body)
  })
})


module.exports = router;