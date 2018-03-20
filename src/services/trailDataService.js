const trailService = ['$http', function ($http) {

  this.getTrailShit = function () {
    return $http.get(`/api/hikeNow/`)
      .then(data => {
        return data.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}]

export default trailService