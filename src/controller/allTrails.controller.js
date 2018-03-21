const MAPKEY = require('../../config/config');
const AllTrailsCtrl = ['$scope','$routeParams','allTrailsService', 'NgMap', function ($scope,$routeParams, allTrailsService, NgMap){

  let name = $routeParams.name
  console.log(name)

  allTrailsService.fetchAllTrails();
  $scope.trails = allTrailsService.getAllTrails();
  $scope.trailHeads = allTrailsService.getTrailHeadCoordinates();
  $scope.googleMapsUrl=`https://maps.googleapis.com/maps/api/js?key=${MAPKEY.map.key}&callback=initMap`;

}];

export default AllTrailsCtrl;