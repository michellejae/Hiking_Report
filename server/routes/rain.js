const express = require (`express`);
const router = express.Router();
const bodyParser = require(`body-parser`);
const path = require(`path`);
const http = require(`http`);
const fs = require(`fs`);
const rp = require(`request-promise`);

const { rainReport, rainGaugeStations, rainStationAndTrail } = require(`../data/rainfallData`)

const rainUrl = `http://www.prh.noaa.gov/data/HFO/RRAHFO`;
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

rp.get(rainUrl)
  .then(result => {
    result = result.split("\n")
    newResult = result.slice(53)
    newestResult = newResult.slice(0, 58)
    newestResult.map(element => {
      element = element.split(" ")
      // console.log(element)
      if(element.includes(`POAH1`)){
        console.log(element)
      }
      // console.log("wee", element[0])

    })
  })
 
    
    // nextResult = newestResult.splice(23, 1)
    // console.log(newestResult)
  // .then(result => {
  //   for (i = 0; i < result.length; i++) {
  //     if oahuRainGauges 
  //   }
  // })





// router.get(`/`, (req, res) => {
//   console.log('raain', rainReport)
// })




module.exports = router;