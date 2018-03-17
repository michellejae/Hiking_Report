import angular from 'angular';
import ngRoute from 'angular-route';
import TrailCtrl from '../controller/trail.controller';
import trailService from '../services/trailDataService';
import HomeCtrl from '../controller/home.controller'
import homeService from '../services/homeService'


import '../style/app.css';

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ngRoute])
  .controller('AppCtrl', AppCtrl)
  .controller('HomeCtrl', HomeCtrl)
  .controller('TrailCtrl', TrailCtrl)
  .service('homeService', homeService)
  .service('trailService', trailService)

  .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    $routeProvider
      .when(`/`, {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when(`/trail`, {
      templateUrl: `views/trail.html`,
      controller: 'TrailCtrl'
      })
    $locationProvider.html5Mode(true);
  }])

export default MODULE_NAME;