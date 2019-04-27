const weatherApiKey = require('../../config/config');
const rp = require('request-promise');


let newWeatherKey = weatherApiKey.weather.apiKey;
const newWeatherAPIEndpoint = `https://api.openweathermap.org/data/2.5/weather?id=5856194&units=imperial&APPID=${newWeatherKey}`

module.exports = {
  newWeatherData
}


function newWeatherData() {
  return rp(`${newWeatherAPIEndpoint}`)
  .then(json => {
    console.log('DO I COME HERE')
    console.log(json)
  }).catch(err => {
    console.log('err', err)
  })
}

// api_url = 'http://api.openweathermap.org/data/2.5/weather'
// appid = ...    
// r = requests.get(url=api_url, params=dict(q='Anderson', APPID=appid))



