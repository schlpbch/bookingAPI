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
import travelWishModule from './travel-wish/travel-wish';
import connectionsModule from './connections/connections';
import personsModule from './persons/persons';
import offersModule from './offers/offers';
import preebookingModule from './prebooking/prebooking';
import bookingModule from './booking/booking';
import commonModule from './common/common';

angular.module('app', ['ngMaterial', 'ngRoute', toolbarModule, sideNavModule,
  travelWishModule, commonModule, connectionsModule, personsModule, offersModule,
  preebookingModule, bookingModule])
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

