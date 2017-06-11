/**
 * Created by kevinkreuzer on 20.03.17.
 */
import tripsController from './trips.controller'
import tripsDetailController from './trip-detail/trip-detail.controller'
import tripsService from './trips.service'

let moduleName = 'tripsModule'

angular.module(moduleName, [])
  .component('apiTrips', {
    controller: tripsController,
    templateUrl: 'components/trips/trips.html'
  })
  .component('apiTripDetail', {
    bindings: {
      trip: '<'
    },
    controller: tripsDetailController,
    templateUrl: 'components/trips/trip-detail/trip-detail.html'
  })
  .service('connectionService', tripsService)

export default moduleName
