const MAPKEY = require('../../config/config');
const TrailCtrl = [`$scope`,`$routeParams`, `trailService`, `NgMap`, 
function ($scope, $routeParams, trailService, NgMap ) {
  let metric = false;
  let imperial = true;
  let nameParams = $routeParams.name
  
  $scope.changeMetric = function () {
    metric = true;
    imperial = false;
    return metric;
  }

  $scope.changeImperial = function () {
    metric = false;
    imperial = true;
    return imperial;
  }

  $scope.getImperial = function () {
    return imperial;
  }

  $scope.getMetric = function () {
    return metric;
  }

  trailService.getSingleTrail(nameParams)
  .then(updatedTrail => {
    $scope.trail = updatedTrail
    //  console.log('first', updatedTrail)
    //  console.log('icon', updatedTrail.weather.icon_url)
  })

  $scope.googleMapsUrl=`https://maps.googleapis.com/maps/api/js?key=${MAPKEY.map.key}&callback=initMap`;

  
}]

export default TrailCtrl

