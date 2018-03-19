const homeService = [`$http`, function ($http) {
// route to front end to get all trails. 
/// or just top five trails
  const trailsArr = [];

  this.getTrails = function () {
    return $http.get('/api/hikeNow/fake')
    .then(data => {
      let result = data.data
      console.log('faaaaaaaake',result)
      return result
    })
    .catch(err => {
      console.log(err)
    })
  }

}]