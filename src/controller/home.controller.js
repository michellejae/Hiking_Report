const HomeCtrl = [`$scope`, `homeService`, function ($scope, homeService){
  homeService.fetchTrails();
  $scope.trails = homeService.getTrails();
  let metric = false;
  let imperial = true;

  $scope.changeMetric = function () {
    metric = true;
    imperial = false;
    return metric;
  }

  $scope.changeImperial = function () {
    metric = false;
    imperial = true;
    return imperial;
  }

  $scope.getImperial = function () {
    return imperial;
  }

  $scope.getMetric = function () {
    return metric;
  }

}]

export default HomeCtrl;