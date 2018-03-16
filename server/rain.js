const express = require (`express`);
const router = express.Router();
const bodyParser = require(`body-parser`);
const path = require(`path`);

const rainFallData = require(`./data/rainfallData`)

let rainfall = {}


router.route(`/`) 
.get((req, res) => {
  console.log('req.body')
  res.send('smoking')
})

module.exports = router;