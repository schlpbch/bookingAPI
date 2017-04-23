import angular from 'angular'
import 'angular-route'
import 'angular-animate'
import 'angular-material'
import 'angular-aria'
import 'angular-messages'
import 'satellizer'
import 'angular-jwt'

// Components
import appController from './app.controller'
import toolbarModule from './toolbar/toolbar'
import sideNavModule from './sidenav/sidenav'
import travelWishModule from './travel-wish/travel-wish'
import connectionsModule from './connections/connections'
import offersModule from './offers/offers'
import preebookingModule from './prebooking/prebooking'
import bookingModule from './booking/booking'
import securityModule from './security/security'
import commonModule from './common/common'

angular.module('app', ['ngMaterial', 'ngRoute', 'satellizer', 'angular-jwt', toolbarModule, sideNavModule, travelWishModule, commonModule,
    connectionsModule, offersModule, preebookingModule, bookingModule, securityModule])
    .config(function ($mdThemingProvider, $authProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('orange')

        $authProvider.github({
            url: 'http://localhost:8080/api/auth/github',
            clientId: '78c57dbf89006d064fcc',
            popupOptions: {width: 1020, height: 618}
        });
    })
    .component('app', {
        controller: appController,
        templateUrl: 'components/app.html'
    })
    .controller('AppCtrl', appController)
