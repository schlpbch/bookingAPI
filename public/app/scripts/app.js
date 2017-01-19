'use strict';

/**
 * @ngdoc overview
 * @name tmpApp
 * @description
 * # tmpApp
 *
 * Main module of the application.
 */
angular
  .module('app', ['ngMaterial', 'ngRoute'] )
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('grey')
    })
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
