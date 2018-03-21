const MAPKEY = require('../../config/config');
const AllTrailsCtrl = ['$scope','allTrailsService', 'NgMap', function ($scope, allTrailsService, NgMap){
  let b = false;

  //Load All Trails
  allTrailsService.fetchAllTrails();

  //Set Trails To Scope
  $scope.trails = allTrailsService.getAllTrails();

  //Set trailHeads to scope var to plot markers
  $scope.trailHeads = allTrailsService.getTrailHeadCoordinates();

  //Display selected trail info or not to display 
  function isSelected () {
    return b = true;
  }

  //Set selectedHike to scope to display selected marker
  $scope.showInfo = function (event,name) {
    isSelected();
    $scope.selectedHike = $scope.trailHeads.filter(function(c){
      return c.trailname === name;
    })[0];
  };

  //Google Map
  $scope.googleMapsUrl=`https://maps.googleapis.com/maps/api/js?key=${MAPKEY.map.key}&callback=initMap`;

}];

export default AllTrailsCtrl;