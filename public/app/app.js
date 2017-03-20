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
import appController from './app.controller';
import stationController from './station/station.controller';
import toolbarModule from './toolbar/toolbar';
import sideNavModule from './sidenav/sidenav';
import reisewunschModule from './reisewunsch/reisewunsch';
import commonModule from './common/common';

angular.module('app', ['ngMaterial', 'ngRoute', toolbarModule, sideNavModule, reisewunschModule, commonModule])
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

