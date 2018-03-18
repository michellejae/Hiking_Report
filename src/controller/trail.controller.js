const MAPKEY = require('../../config/config');
const TrailCtrl = [`$scope`, `trailService`,`googleMap`,
function ($scope, trailService, googleMap) {
  $scope.trail = 'TRAIL TAILS'
  
  trailService.getTrailShit();
  $scope.googleMap=`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyBVGDEMV8YdofiqyfodxHRVYg9UQZjzbvo
  `
}]

export default TrailCtrl