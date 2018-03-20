const HomeCtrl = [`$scope`, `homeService`, function ($scope, homeService){
  homeService.fetchTrails();
  $scope.trails = homeService.getTrails();
  homeService.goodTrails();
}]

export default HomeCtrl;