const homeService = [`$http`, function ($http) {
  const trailNames = []


  this.getTrailShit = function () {
    $http.get(`/api/hikeNow/fake`)
    .then(data => {
      let test = data.data
      for (var key in test) {
        if(key !== 'length' && key !== 'weatherConditions' && key !== 'elev'){
          trailNames.push(key)
        }
      }
    })
  }


this.getTrailNames = function(){
  return trailNames
}
}]




export default homeService