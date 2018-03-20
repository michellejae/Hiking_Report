
const TrailCtrl = [`$scope`, `trailService`, `$routeParams`,  function ($scope, trailService, $routeParams) {
  $scope.trail = 'TRAIL TAILS'

  let params = $routeParams
  console.log(params)
  
}]

export default TrailCtrl