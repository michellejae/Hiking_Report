const HomeCtrl = [`$scope`, `homeService`, function ($scope, homeService){
  homeService.fetchTrails();
  $scope.trails = homeService.getTrails();
  console.log($scope.trails)

}]

export default HomeCtrl;