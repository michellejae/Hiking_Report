
const TrailCtrl = [`$scope`, `trailService`, `$routeParams`,  function ($scope, trailService, $routeParams) {
  $scope.trail = 'TRAIL TAILS'

  let nameParams = $routeParams.name
  trailService.getSingleTrail(nameParams)
  
}]

export default TrailCtrl