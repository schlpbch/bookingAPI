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
      let payurl = 'http://localhost:8080/api/v2/payments/b2b/sbb/invoice'
      let paydata = {
        prebookingIds: [preBookingId]
      }

      let bookurl = 'http://localhost:8080/api/bookings'
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
