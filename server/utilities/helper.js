// const express = require('express');
const rp = require('request-promise');
const cron = require('node-schedule');

const Trail = require('../db/models/Trails');
const weatherKey = require('../../config/config');
// const weatherApiKey = require('../../config/config');

let WEATHERAPIKEY = weatherKey.weather.apiKey2;
const weatherAPI = `https://api.darksky.net/forecast/${WEATHERAPIKEY}/`

// let newWeatherKey = weatherApiKey.weather.apiKey;


// const WEATHER_API_ENDPOINT = `http://api.wunderground.com/api/${WEATHERAPIKEY}/conditions/q/`;
const rule = new cron.RecurrenceRule();


module.exports = {
  randomGoodTrail,
  getTrailHeads,
};

// global.hikeNow = {};
global.hikeNow.weather = {};


  function getTrailHeads() {   
    let trails = [];
    new Trail()
    .fetchAll()
    .then(result => {
      result.map(element => {
          trails.push(element.attributes.coordinates);
      })      
      fireWeatherAPI(trails);
    })
   }


function fireWeatherAPI (arr) {
  let lat;
  let long;
  arr.map(element => {
    lat = element[1];
    long = element[0];
    // getWeatherData(lat,long);
  });
};

function getWeatherData(lat,long){
  const newWeatherAPIEndpoint = `${weatherAPI}${lat},${long}`
  return rp(`${newWeatherAPIEndpoint}`)
  .then(json => {
    console.log('weahter api fired')
    return JSON.parse(json);
  })
  .then(data => {
    if (data.currently.time) {
      global.hikeNow.weather[data.latitude] = {
        observationTime: data.currently.time,
        summary: data.currently.summary,
        weatherIcon: data.currently.icon,
        temp: data.currently.temperature,
        realFeel: data.currently.apparentTemperature,
        humidity: data.currently.humidity,
        windSpeed: data.currently.windSpeed,
        windGust: data.currently.windGust,
        windDirection: data.currently.windBearing
      }
    } else {
      return global.hikeNow.weather;
    }
  }).catch(err => {
    console.log(err)
  });
};

function randomGoodTrail (arr) {
  let randomNumber = Math.floor(Math.random() * arr.length)
  return randomNumber
}

