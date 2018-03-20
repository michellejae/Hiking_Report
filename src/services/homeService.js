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
        let trail = {
        'trailname': i,
        'weather': result[i]
        }
        if(result[i]){
          trailsArr.push(trail)
        }
      }
      this.setTrailStatus();
      return trailsArr;
    })
    .catch(err => {
      console.log(err);
    })
  }

  this.setTrailStatus = function () {
    trailsArr.map(element => {
      let windSpeed = element.weather.weatherConditions.wind_mph;
      let windGusts = element.weather.weatherConditions.wind_gust_mph;
      if(windSpeed > 46 || windGusts > 46){
        element.weatherStatus = 'danger';
      }else{
        element.weatherStatus = 'safe';
      }
    })
  }

}]

export default homeService;
