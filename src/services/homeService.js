const homeService = [`$http`, function ($http) {
  const trailsArr = [];

  this.getTrails = function () {
    return trailsArr;
  }

  this.fetchTrails = function () {
    return $http.get('/api/hikeNow/fake')
    .then(data => {
      console.log(data.data)
    })
    .catch(err => {
      console.log(err);
    })
  }



}]

export default homeService;
