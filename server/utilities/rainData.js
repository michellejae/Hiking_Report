const express = require (`express`);
// const router = express.Router();
const bodyParser = require(`body-parser`);
const path = require(`path`);
const rp = require(`request-promise`);

module.exports = {
  getRainData,
  getRainTotalData
};

// URL for multiple readings (3hr, 6hr, 12hr, 24hr):
const rainTotalUrl = `http://www.prh.noaa.gov/data/HFO/RRAHFO`;
const rainHourlyUrl = `http://www.prh.noaa.gov/data/HFO/RR5HFO`;
const oahuRainGauges = [
  `POAH1`,
  `KTAH1`,
  `PACH1`,
  `OFRH1`,
  `PNSH1`,
  `KNRH1`,
  `MOAH1`,
  `PFSH1`,
  `MAUH1`,
  `NIUH1`,
  `WMLH1`,
  `KMHH1`,
  `MNLH1`
]

global.hikeNow.rain = {
  station_id:'',
  rainfall: ''
};


function getRainData () {
  return rp(rainHourlyUrl)
    .then(result => {
      console.log('rain api fired')
      result = result.split("\n")
      newResult = result.slice(53)      
      newestResult = newResult.slice(0, 58)
      newestResult = newestResult.map(element => {
        element = element.replace(/:*:/g, "")
        element = element.replace(/\//g, "")
        element = element.replace(/[" "]+/g, " ")
        element = element.split(" ")
        return element;  
      }).filter(element => {
        return oahuRainGauges.includes(element[0])
      })
      .map(element => {
        let key = element.shift()
        let value = element.pop()
        let result = {}
        result["station_id"] = key
        result["rainfall"] = value
        global.hikeNow.rain[result.station_id] = {
          station_id: result.station_id,
          rainfall: result.rainfall
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
    
} //closing getRainData

function getRainTotalData () {
  let key;
  let value;
  return rp(rainTotalUrl)
    .then(result => {
      result = result.split("\n")
      newResult = result.slice(53)     
      newestResult = newResult.slice(0, 58)
      newestResult = newestResult.map(element => {
        element = element.replace(/:*:/g, "")
        element = element.replace(/\//g, "")
        element = element.replace(/[" "]+/g, " ")
        element = element.split(" ")
        return element;  
       }).filter(element => {
         return oahuRainGauges.includes(element[0])
      }) .map(element => {
            key = element.shift()
            value = element.pop()
            global.hikeNow.rain[key] = {
              station_id: key,
              rainfall: value
          }
      })
    })
    .catch(err => {
      console.log(err)
    })
    
} //closing getRainData