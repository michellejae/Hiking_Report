const allTrailService = ['$http', function ($http) {
  const allTrails = [];

  this.getAllTrails = function () {
    return allTrails;
  }

  this.fetchAllTrails = function () {
    return $http.get('/api/hikeNow/fake')
    .then(data => {
      let result = data.data;
      for(let i in result){
        if(result[i]){
          let trail = {
            'trailname': i,
            'elevation': result[i].elev,
            'length': result[i].length,
            'weather': result[i].weatherConditions
          }
          allTrails.push(trail);
        }
      }
      console.log(allTrails)
      this.setTrailStatus();
      return allTrails;
    })
    .catch(err => {
      console.log(err)
    })
  }

  this.setTrailStatus = function () {
    allTrails.map(element => {
      let windSpeed = element.weather.wind_mph;
      if(windSpeed < 25) {
        element.status = 'SAFE';
      }
      if(windSpeed >= 25 && windSpeed <= 46) {
        element.status = 'CAUTION';
      }
      if(windSpeed > 46) {
        element.status = 'DANGER';
      }
      return true;
    })
  }








}]

export default allTrailService;