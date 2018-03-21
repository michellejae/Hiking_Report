const allTrailService = ['$http', function ($http) {
  const tempAllTrails = [];
  const trailHeads = [];

  this.getAllTrails = function () {
    return allTrails;
  }

  this.fetchAllTrails = function () {
    console.log('fyre')
    return tempAllTrails;
    // return $http.get('/api/hikeNow/all')
    // .then(data => {
    //   data.data.map(element => {
    //     console.log(element)
    //     tempAllTrails.push(element)
    //   })
    //   return tempAllTrails;
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  }

  this.setTrailStatus = function (allTrails) {
    console.log(allTrails)
    allTrails.map(element => {
      let windSpeed = element.weather.wind_mph;
      if(windSpeed < 25) {
        element.status = 'GOOD';
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

  this.getTrailHeadCoordinates = function () {
    return trailHeads;
  }





}];

export default allTrailService;