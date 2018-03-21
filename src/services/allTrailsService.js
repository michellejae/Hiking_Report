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
    this.setTrailHeads(arr);
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