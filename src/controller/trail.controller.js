
const TrailCtrl = [`$scope`, `trailService`, `$routeParams`,  function ($scope, trailService, $routeParams) {
  $scope.trail = 'TRAIL TAILS'

  let nameParams = $routeParams.name
  trailService.getSingleTrail(nameParams)
  .then(updatedTrail => {
    $scope.trail = updatedTrail
    console.log($scope.trail)
  })
  
}]

export default TrailCtrl