const homeService = [`$http`, function ($http) {
  const trailsArr = [];

  this.getTrails = function () {
    return trailsArr;
  }

  this.fetchTrails = function () {
    return $http.get('/api/hikeNow/fake')
    .then(data => {
      let result = data.data;
      for(var i in result){
        let trail = {};
        trail['trailname'] = i
        trail['weather'] = result[i]
        if(result[i]){
          trailsArr.push(trail)
        }
      }
      return trailsArr;
    })
    .catch(err => {
      console.log(err)
    })
  }

}]

export default homeService;
