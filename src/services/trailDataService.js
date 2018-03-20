const trailService = ['$http', function ($http) {

  let finalTrail = {}

this.getSingleTrail = function (name) {
  return $http.get(`/api/hikeNow/trail/fake/${name}`)
  .then(singleTrail => {
    finalTrail.name = name,
    finalTrail.details = singleTrail.data
    return singleTrail.data.weatherConditions
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