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

let authProvider;
angular.module('app', ['ngMaterial', 'ngRoute', 'satellizer', 'angular-jwt', toolbarModule, sideNavModule, travelWishModule, commonModule,
    connectionsModule, offersModule, preebookingModule, bookingModule, securityModule])
    .config(function ($mdThemingProvider, $authProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('orange')
        authProvider = $authProvider;

    })
    .run((authService) => {
       authService.getClientId()
            .then(res => {
                console.log('Response', res);
                let clientId = res.data.clientID;
                authProvider.github({
                    clientId,
                    url: 'api/auth/github',
                    popupOptions: {width: 1020, height: 618}
                });
            })
    })
    .component('app', {
        controller: appController,
        templateUrl: 'components/app.html'
    })
    .controller('AppCtrl', appController)
