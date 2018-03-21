const trailService = ['$http', function ($http) {

  let finalTrail = {}

this.getSingleTrail = function (name) {
  return $http.get(`/api/hikeNow/trail/fake/${name}`)
  .then(singleTrail => {
    let newSingleTrail = singleTrail.data
    console.log(newSingleTrail)
    finalTrail.name = newSingleTrail.trailname,
    finalTrail.length = newSingleTrail.length_m,
    finalTrail.elev = newSingleTrail.elev_range,
    finalTrail.coordinates = newSingleTrail.coordinates,
    finalTrail.standard = newSingleTrail.standard
    finalTrail.icon = newSingleTrail.weather.icon_url
    return newSingleTrail.weather
  }).then(result =>{
    this.setStatus(result)
    return finalTrail
  })
}

this.setStatus = function(trail) {
  if (trail.wind_mph < 24.9999) {
    finalTrail.status = 'GOOD'
  } 
  if (trail.wind_mph > 25 && trail.wind_mph < 45.999) {
    finalTrail.status = 'CAUTION'
  }
  if (trail.wind_mph > 46) {
    finalTrail.status = 'DANGER'
  }
  return true;
}

}]

export default trailService