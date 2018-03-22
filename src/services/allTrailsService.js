const allTrailService = ['$http', function ($http) {
  const trailHeads = [];
  const allTrails = [];

  this.getAllTrails = function () {
    return allTrails;
  }

  this.getTrailHeadCoordinates = function () {
    return trailHeads;
  }

  this.fetchAllTrails = function () {
    return $http.get('/api/hikeNow/FUCK')
    .then(data => {
      data.data.map(element => {
        allTrails.push(element);
      })
      this.setTrailStatus(allTrails);
    })
    .catch(err => {
      console.log(err)
    })
  }

  this.setTrailStatus = function (arr) {
    arr.map(element => {
      if(element.weather && element.rain){
        if(element.weather.wind_mph < 25 && element.rain.rainfall < .4999) {
          element.status = 'GOOD';
        }
        if(element.weather.wind_mph >= 25 && element.weather.wind_mph <= 46 && element.rain.rainfall >= .5 && element.rain.rainfall <= 1) {
          element.status = 'CAUTION';
        }
        if(element.weather.wind_mph > 46 && element.rain.rain > 1) {
          element.status = 'DANGER';
        }
      }else{
        element.status = 'UNKNOWN';
      }
    })
    // console.log(allTrails)
  }

  this.setTrailHeads = function (arr) {
    arr.map(element => {
      trailHeads.push({
        id: element.id,
        trailname: element.trailname,
        status: element.status,
        length_m: element.length_m,
        coordinates: element.coordinates
      });
    });
  }

}];

export default allTrailService;