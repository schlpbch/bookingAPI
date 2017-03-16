/**
 * Created by kevinkreuzer on 15.03.17.
 */
import angular from 'angular';
import 'angular-route';
import 'angular-animate';
import 'angular-material';
import 'angular-aria';
import 'angular-messages';

//Components
var appController = require('./app.controller');
var stationController = require('./station/station.controller');
import motorradModul from './motorrad/motorrad';

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
