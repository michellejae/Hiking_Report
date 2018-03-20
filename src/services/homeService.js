const homeService = [`$http`, function ($http) {
  const trailsArr = [];
  const goodWindTrails = [];

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
      this.goodTrails()
      return trailsArr;
    })
    .catch(err => {
      console.log(err)
    })
  }

  this.goodTrails = function () {
    trailsArr.map(element => {
      let wind = element.weather.weatherConditions.wind_mph;
      if(wind > 46){
        console.log('caution')
      }else{
        console.log('safe')
      }
    })
  }

}]

export default homeService;