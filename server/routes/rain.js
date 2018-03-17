const express = require (`express`);
const router = express.Router();
const bodyParser = require(`body-parser`);
const path = require(`path`);
const http = require(`http`);
const fs = require(`fs`);
const rp = require(`request-promise`);

const { rainReport, rainGaugeStations, rainStationAndTrail } = require(`../data/rainfallData`)

// URL for multiple readings (3hr, 6hr, 12hr, 24hr):
// http://www.prh.noaa.gov/data/HFO/RRAHFO

const rainUrl = `http://www.prh.noaa.gov/data/HFO/RR5HFO`;
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
  `MNLH1`]

router.get('/', (req, res) => {
  rp(rainUrl)
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
      })
      .map(element => {
        let key = element.shift()
        let value = element.pop()
        let result = {}
        result[key] = value
        return result;
      })
      return res.json(newestResult)
    })
    .catch(err => {
      console.log(err)
      return res.json({message: err.message}) 
    })
  })

module.exports = router;