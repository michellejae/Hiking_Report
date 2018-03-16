
const TrailCtrl = [`$scope`, `trailService`, function ($scope, trailService) {
  $scope.trail = 'TRAIL TAILS'
  
  trailService.getTrailShit()
}]

export default TrailCtrl