const trailService = ['$http', function ($http) {

  let finalTrail = {}

this.getSingleTrail = function (name) {
  return $http.get(`/api/hikeNow/trail/${name}`)
  .then(singleTrail => {
    let newSingleTrail = singleTrail.data;
    
    let kph = (newSingleTrail.weather.wind_mph * 1.60934).toFixed(2);
    let km = (newSingleTrail.length_m * 1.60934).toFixed(2);
    let elev_range_m = (newSingleTrail.elev_range * 0.3048).toFixed(2);
    finalTrail.name = newSingleTrail.trailname,
    finalTrail.length_m = newSingleTrail.length_m,
    finalTrail.elev = newSingleTrail.elev_range,
    finalTrail.coordinates = newSingleTrail.coordinates,
    finalTrail.standard = newSingleTrail.standard,
    finalTrail.weather = newSingleTrail.weather,
    finalTrail.rain = newSingleTrail.rain,
    finalTrail.weather.wind_kph = kph,
    finalTrail.length_km = km,
    finalTrail.elev_range_m = elev_range_m
    return newSingleTrail;
  }).then(result =>{
    this.setStatus(result);
    return finalTrail;
  })
}

this.setStatus = function(trail) {
  if(trail.weather && trail.rain) {
  if (trail.weather.wind_mph < 24.9999 && trail.rain.rainfall < .4999) {
    finalTrail.status = 'GOOD'
  } 
  if (trail.weather.wind_mph >= 25 && trail.weather.wind_mph <= 46 || trail.rain.rainfall >= .5 && trail.rain.rainfall <= 1) {
    finalTrail.status = 'CAUTION'
  }
  if (trail.weather.wind_mph > 46 && trail.rain.rainfall > 1) {
    finalTrail.status = 'DANGER'
  }
  if(trail.wind_mph > 73) {
    finalTrail.status = 'HURRICANE'

  } if(trail.weather.wind_mph < 25 && trail.rain.rainfall >1){
    finalTrail.status = 'CAUTION'
  }
  if(trail.weather.wind_mph > 46 && trail.rain.rainfall <.4999){
    finalTrail.status = 'DANGER'
  }
} else {
  finalTrail.status = 'UNKNOWN'
}
  return true;
}

}]

export default trailService