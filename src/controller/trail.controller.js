const MAPKEY = require('../../config/config');
const TrailCtrl = [`$scope`, `trailService`,`NgMap`,
function ($scope, $http, trailService, NgMap) {

  $scope.trail = 'TRAIL TAILS'
  
  // trailService.getTrailShit();
  $scope.googleMapsUrl=`https://maps.googleapis.com/maps/api/js?key=${MAPKEY.map.key}&callback=initMap`;
}]

export default TrailCtrl

