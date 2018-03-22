const trailService = ['$http', function ($http) {

  let finalTrail = {}

this.getSingleTrail = function (name) {
  return $http.get(`/api/hikeNow/trail/fake/${name}`)
  .then(singleTrail => {
    let newSingleTrail = singleTrail.data
    finalTrail.name = newSingleTrail.trailname,
    finalTrail.length = newSingleTrail.length_m,
    finalTrail.elev = newSingleTrail.elev_range,
    finalTrail.coordinates = newSingleTrail.coordinates,
    finalTrail.standard = newSingleTrail.standard
    finalTrail.weather = newSingleTrail.weather
    finalTrail.rain = newSingleTrail.rain
    return newSingleTrail
  }).then(result =>{
    this.setStatus(result)
    console.log('final',finalTrail.weather)
    return finalTrail
  })
}

this.setStatus = function(trail) {
  if(trail.weather && trail.rain) {
  if (trail.weather.wind_mph < 24.9999 && trail.rain.rainfall < .4999) {
    finalTrail.status = 'GOOD'
  } 
  if (trail.weather.wind_mph >= 25 && trail.weather.wind_mph <= 46 && trail.rain.rainfall >= .5 && trail.rain.rainfall <= 1) {
    finalTrail.status = 'CAUTION'
  }
  if (trail.weather.wind_mph > 46 && trail.rain.rainfall > 1) {
    finalTrail.status = 'DANGER'
  }
  if(trail.wind_mph > 73) {
    finalTrail.status = 'HURRICANE'
  }
} else {
  finalTrail.status = 'UNKOWN'
}
  return true;
}

}]

export default trailService