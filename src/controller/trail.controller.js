const MAPKEY = require('../../config/config');
const TrailCtrl = [`$scope`,`$routeParams`, `trailService`, `NgMap`, 
function ($scope, $routeParams, trailService, NgMap ) {

  let nameParams = $routeParams.name
  
  trailService.getSingleTrail(nameParams)
  .then(updatedTrail => {
    $scope.trail = updatedTrail
  })

  $scope.googleMapsUrl=`https://maps.googleapis.com/maps/api/js?key=${MAPKEY.map.key}&callback=initMap`;

  
}]

export default TrailCtrl

