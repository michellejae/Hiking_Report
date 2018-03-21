const MAPKEY = require('../../config/config');
const AllTrailsCtrl = ['$scope','allTrailsService', 'NgMap', function ($scope, allTrailsService, NgMap){
  allTrailsService.fetchAllTrails();
  $scope.trails = allTrailsService.getAllTrails();
  $scope.trailHeads = allTrailsService.getTrailHeadCoordinates();
  $scope.googleMapsUrl=`https://maps.googleapis.com/maps/api/js?key=${MAPKEY.map.key}&callback=initMap`;
}];

export default AllTrailsCtrl;