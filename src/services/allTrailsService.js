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
        trailHeads.push({id:element.id, trailname:element.trailname, coordinates:element.coordinates});
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
  }

  this.displayInfo = function (event,name) {
    console.log(event)
    console.log(name)
  }






}];

export default allTrailService;