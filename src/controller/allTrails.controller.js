const AllTrailsCtrl = ['$scope','allTrailsService', function ($scope,allTrailsService){
  allTrailsService.fetchAllTrails();
  $scope.trails = allTrailsService.getAllTrails();
}];

export default AllTrailsCtrl;