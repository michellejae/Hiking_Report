const HomeCtrl = [`$scope`, `homeService`, function ($scope, homeService){
  $scope.trails = homeService.getTrails()
// will call function in home service that will 
// call front end

}]

export default HomeCtrl