/**
 * Created by kevinkreuzer on 22.03.17.
 */
import bookingController from './booking.controller';
import bookingActionsController from './booking-actions/booking-actions.controller';
import bookingService from './booking.service';

let moduleName = 'bookingModule';

angular.module(moduleName, [])
  .component('apiBooking', {
    controller: bookingController,
    templateUrl: 'app/booking/booking.html'
  })
  .component('apiBookingDetail', {
    bindings: {
      booking: '<'
    },
    templateUrl: 'app/booking/booking-detail/booking-detail.html'
  })
  .component('apiBookingActions', {
    bindings: {
      booking: '<'
    },
    controller: bookingActionsController,
    templateUrl: 'app/booking/booking-actions/booking-actions.html'
  })
  .service('bookingService', bookingService)

export default moduleName;
