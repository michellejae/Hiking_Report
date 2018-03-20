
const TrailCtrl = [`$scope`, `trailService`, function ($scope, trailService) {
  $scope.records = trailService.getTrailShit();
}]

export default TrailCtrl