const allTrailService = ['$http', function ($http) {
  const trailHeads = [];
  const allTrails = [];

  this.getAllTrails = function () {
    return allTrails;
  }

  this.fetchAllTrails = function () {
    return $http.get('/api/hikeNow/FUCK')
    .then(data => {
      data.data.map(element => {
        trailHeads.push(element.coordinates);
        allTrails.push(element);
      })
      this.setTrailStatus(allTrails);
    })
    .catch(err => {
      console.log(err)
    })
  }

  this.setTrailStatus = function (allTrails) {
    allTrails.map(element => {
      if(element.weather){
        if(element.weather.wind_mph < 25) {
          element.status = 'GOOD';
        }
        if(element.weather.wind_mph >= 25 && element.weather.wind_mph <= 46) {
          element.status = 'CAUTION';
        }
        if(element.weather.wind_mph > 46) {
          element.status = 'DANGER';
        }
      }else{
        element.status = 'UNKNOWN';
      }
    })
    console.log(allTrails)
  }

  this.getTrailHeadCoordinates = function () {
    return trailHeads;
  }





}];

export default allTrailService;