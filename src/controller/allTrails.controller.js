const AllTrailsCtrl = ['$scope','allTrailsService', function ($scope,allTrailsService){
  allTrailsService.fetchAllTrails();
  $scope.trails = allTrailsService.getAllTrails();
  console.log($scope.trails)
}]

export default AllTrailsCtrl;