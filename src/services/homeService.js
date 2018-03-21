const homeService = [`$http`, function ($http) {
  const trailsArr = [];

  this.getTrails = function () {
    return trailsArr;
  }

  this.fetchTrails = function () {
    return $http.get('/api/hikeNow/fake')
    .then(data => {
      return data.data
    }).then(goodTrails => {
      goodTrails.map(trail => {
          let finalGoodTrail = {
            name: trail.trailname,
            length: trail.length_m,
            status: 'GOOD'
          }
        trailsArr.push(finalGoodTrail)
      })
    }).catch(err => {
      console.log(err);
    })
  }


}]

export default homeService;
