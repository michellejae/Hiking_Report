const MAPKEY = require('../../config/config');
const TrailCtrl = [`$scope`,`$routeParams`, `trailService`, `NgMap`, 
function ($scope, $routeParams, trailService, NgMap ) {
  let metric = false;
  let imperial = true;
  let nameParams = $routeParams.name;
  let navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
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

  $scope.burgerDrop = function () {
    let navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if(navbarBurgers.length > 0) {
      navbarBurgers.forEach(element => {
        element.addEventListener('click', function() {
          let target = element.dataset.target;
          let $target = document.getElementById(target);
          element.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        })
      });
    }
  }

  trailService.getSingleTrail(nameParams)
  .then(updatedTrail => {
    $scope.trail = updatedTrail
  })

  $scope.googleMapsUrl=`https://maps.googleapis.com/maps/api/js?key=${MAPKEY.map.key}&callback=initMap`;

  
}]

export default TrailCtrl

