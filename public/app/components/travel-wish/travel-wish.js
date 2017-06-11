/**
 * Created by kevinkreuzer on 17.03.17.
 */
import travelWishController from './travel-wish.controller'
import travelWishService from './travel-wish.service'
import locationController from './location/location.controller'
import locationService from './location/location.service';

let moduleName = 'travelWish'

angular.module(moduleName, [])
    .component('apiTravelWish', {
        controller: travelWishController, templateUrl: 'components/travel-wish/travel-wish.html'
    })
    .component('apiLocation', {
        bindings: {
            title: '<',
            selectedItem: '='
        }, controller: locationController, templateUrl: 'components/travel-wish/location/location.html'
    })
    .service('travelWishService', travelWishService)
    .service('stationService', locationService)

export default moduleName
