import angular from 'angular'
import 'angular-route'
import 'angular-animate'
import 'angular-material'
import 'angular-aria'
import 'angular-messages'
import 'ngclipboard'

// Components
import appController from './app.controller'
import toolbarModule from './toolbar/toolbar'
import sideNavModule from './sidenav/sidenav'
import travelWishModule from './travel-wish/travel-wish'
import connectionsModule from './connections/connections'
import offersModule from './offers/offers'
import preebookingModule from './prebooking/prebooking'
import bookingModule from './booking/booking'
import commonModule from './common/common'
import coreModule from './core/core.module'
import loginModule from './login/login'

angular.module('app', ['ngMaterial', 'ngRoute', 'ngclipboard', coreModule, toolbarModule, sideNavModule, travelWishModule, commonModule, connectionsModule, offersModule, preebookingModule, bookingModule, loginModule]).config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange')
})
    .component('app', {
        controller: appController,
        templateUrl: 'components/app.html'
    })
    .controller('AppCtrl', appController)
