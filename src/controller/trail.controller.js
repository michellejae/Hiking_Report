const MAPKEY = require('../../config/config');
const TrailCtrl = [`$scope`, `trailService`,`googleMap`,
function ($scope, trailService, googleMap) {
  $scope.trail = 'TRAIL TAILS'
  
  trailService.getTrailShit();
  $scope.googleMap=`https://maps.googleapis.com/maps/api/js?key=AIzaSyBEgr87u1-3vCotB7dgKNnGv9Q5qusIBt8&callback=initMap`;
}]

export default TrailCtrl

