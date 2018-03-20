const MAPKEY = require('../../config/config');
const TrailCtrl = [`$scope`, `trailService`,`googleMapsUrl`,
function ($scope, $http, trailService, googleMapsUrl) {
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    })
  $scope.trail = 'TRAIL TAILS'
  
  trailService.getTrailShit();
  $scope.googleMapsUrl=`https://maps.googleapis.com/maps/api/js?key=AIzaSyBEgr87u1-3vCotB7dgKNnGv9Q5qusIBt8&callback=initMap`;
}]

export default TrailCtrl

