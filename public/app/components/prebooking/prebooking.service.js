/**
 * Created by kevinkreuzer on 22.03.17.
 */

export default class PreebookingService {
    constructor(bookingStore, $http, tabService, errorLogService, authService) {
        this.bookingStore = bookingStore
        this.$http = $http
        this.tabService = tabService
        this.errorLogService = errorLogService
        this.authService = authService
    }

    getBooking(item) {
      let preBookingId = item.prebookings[0].preBookingId;
      let payurl = '../api/v2/payments/b2b/sbb/invoice'
      let paydata = {
        prebookingIds: [preBookingId]
      }

      let bookurl = '../api/bookings'
      let bookdata = [
        preBookingId
      ];

      this.$http.post(payurl, paydata)
        .then(payres => {
          this.$http.post(bookurl, bookdata)
            .then(res => {
              this.bookingStore.bookings = res.data
              this.tabService.goToNextTab()
            }, (error) => {
              this.errorLogService.logError(error)
            })
        }, (error) => {
          this.errorLogService.logError(error)
        })
    }
}
