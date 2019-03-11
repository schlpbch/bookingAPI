export default class PreebookingService {
    constructor(bookingStore, $http, tabService, errorLogService, authService, conversationService) {
        this.bookingStore = bookingStore
        this.$http = $http
        this.tabService = tabService
        this.errorLogService = errorLogService
        this.authService = authService
        this.conversationService = conversationService
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

      this.$http.post(payurl, paydata, { headers: { 'X-Conversation-Id': this.conversationService.getUuid() }})
        .then(payres => {
          this.$http.post(bookurl, bookdata, { headers: { 'X-Conversation-Id': this.conversationService.getUuid() }})
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
