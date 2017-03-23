/**
 * Created by kevinkreuzer on 17.03.17.
 */
import travelWishController from './travel-wish.controller';
import stationController from './station/station.controller';
import travelWishService from './travel-wish.service';

let moduleName = 'reisewunsch';

angular.module(moduleName, [])
  .component('apiTravelWish', {
    controller: travelWishController,
    templateUrl: 'components/travel-wish/travel-wish.html'
  })
  .component('apiStation', {
    bindings: {
      title: '<'
    },
    controller: stationController,
    templateUrl: 'components/travel-wish/station/station.html'
  })
  .service('travelWishService', travelWishService)

export default moduleName;
