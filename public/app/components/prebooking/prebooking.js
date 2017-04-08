/**
 * Created by kevinkreuzer on 22.03.17.
 */
import prebookingController from './prebooking.controller'
import prebookingDetailController from './prebooking-detail/prebooking-detail.controller'
import prebookingService from './prebooking.service'

let moduleName = 'preBookingModule'

angular.module(moduleName, [])
  .component('apiPrebooking', {
    controller: prebookingController,
    templateUrl: 'components/prebooking/prebooking.html'
  })
  .component('apiPrebookingDetail', {
    bindings: {
      prebooking: '<'
    },
    controller: prebookingDetailController,
    templateUrl: 'components/prebooking/prebooking-detail/prebooking-detail.html'
  })
  .service('prebookingService', prebookingService)

export default moduleName
