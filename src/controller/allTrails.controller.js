const AllTrailsCtrl = ['$scope','allTrailsService', function ($scope,allTrailsService){
  allTrailsService.fetchAllTrails()
}]

export default AllTrailsCtrl;