/**
 * Created by kevinkreuzer on 15.03.17.
 */
var angular = require('angular');
require('angular-route');
require('angular-animate');
require('angular-material');
require('angular-aria');
require('angular-messages');

//Components
var appController = require('./app.controller');
var stationController = require('./station/station.controller');
var motorradModul = require('./motorrad/motorrad');

//Style imports


angular.module('app', ['ngMaterial', 'ngRoute', motorradModul])
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('orange')
  })
  .component('app', {
    controller: appController,
    templateUrl: './app/app.html'
  })
  .controller('AppCtrl', appController)
  .controller('StationCtrl', stationController);
