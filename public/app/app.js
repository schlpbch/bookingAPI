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
import toolbarModul from './toolbar/toolbar';

angular.module('app', ['ngMaterial', 'ngRoute', toolbarModul])
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
