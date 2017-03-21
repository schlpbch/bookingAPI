/**
 * Created by kevinkreuzer on 21.03.17.
 */
let moduleName = 'offersModule';

import offersController from './offers.controller';


angular.module(moduleName, [])
  .component('apiOffers', {
    controller: offersController,
    templateUrl: 'app/offers/offers.html'
  });

export default moduleName;
