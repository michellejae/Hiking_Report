const cron = require('node-schedule')
const { getTrailHeads } = require('./helper')
const { getRainData, getRainTotalData } = require ('./rainData.js')

module.exports = {
  timedRain,
  timedWeather
}


function timedWeather(){
  cron.scheduleJob({ rule:' 0 15 6,9,12,15 * * *'})
  getTrailHeads()
}

function timedRain() {
  cron.scheduleJob({ rule: '0 0 6,7,8,9,10,11,12,13,14,15,16,17,18 * * *'})
  getRainTotalData()
}