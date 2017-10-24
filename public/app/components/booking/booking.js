/**
 * Created by kevinkreuzer on 22.03.17.
 */
import bookingController from './booking.controller'
import bookingDetailController from './booking-detail/booking-detail.controller'
import bookingService from './booking.service'

let moduleName = 'bookingModule'

angular.module(moduleName, [])
  .component('apiBooking', {
    controller: bookingController,
    templateUrl: 'components/booking/booking.html'
  })
  .component('apiBookingDetail', {
    bindings: {
      booking: '<'
    },
    controller: bookingDetailController,
    templateUrl: 'components/booking/booking-detail/booking-detail.html'
  })
  .service('bookingService', bookingService)

export default moduleName
