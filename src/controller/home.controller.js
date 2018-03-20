const HomeCtrl = [`$scope`, `homeService`, function ($scope, homeService){
 
homeService.getTrailShit()

$scope.trails = homeService.getTrailNames()
}]

export default HomeCtrl