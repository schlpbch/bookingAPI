/**
 * Created by kevinkreuzer on 21.03.17.
 */
import offersController from './offers.controller';
import offerDetailController from './offer-detail/offer-detail.controller';
import offersService from './offers.service';

let moduleName = 'offersModule';

angular.module(moduleName, [])
  .component('apiOffers', {
    controller: offersController,
    templateUrl: 'app/offers/offers.html'
  })
  .component('apiOfferDetail', {
    bindings: {
      offer: '<'
    },
    controller: offerDetailController,
    templateUrl: 'app/offers/offer-detail/offer-detail.html'
  })
  .service('offersService', offersService);

export default moduleName;
