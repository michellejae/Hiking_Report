const MAPKEY = require('../../config/config');
const AllTrailsCtrl = ['$scope','allTrailsService', 'NgMap', function ($scope, allTrailsService, NgMap){
  allTrailsService.fetchAllTrails();
  $scope.trails = allTrailsService.getAllTrails();
  $scope.trailHeads = allTrailsService.getTrailHeadCoordinates();

  $scope.showInfo = function (event,name) {
    console.log('fire name ',name)
    $scope.selectedHike = $scope.trailHeads.filter(function(c){
      return c.trailname === name;
    })[0];
  };



  $scope.googleMapsUrl=`https://maps.googleapis.com/maps/api/js?key=${MAPKEY.map.key}&callback=initMap`;

}];

export default AllTrailsCtrl;