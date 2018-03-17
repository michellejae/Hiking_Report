const trailService = ['$http', function ($http) {

  this.getTrailShit = function () {

    $http.get(`api/hikeNow/fake`)
    .then(data => {
      console.log(data.data)
    })
  }
}]

export default trailService