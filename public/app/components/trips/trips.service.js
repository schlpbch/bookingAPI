export default class TripsService {
    constructor(bookingStore, tabService, $http, errorLogService, authService) {
        this.bookingStore = bookingStore
        this.tabService = tabService
        this.$http = $http
        this.errorLogService = errorLogService
        this.authService = authService
    }

    getOffers(item) {
      let url = '../api/trip-offers?tripId=' + item.tripId + "&passengers=paxa;42;half-fare"
      this.$http.get(url)
          .then((res) => {
              this.bookingStore.offercontainers = res.data
              this.tabService.goToNextTab()
          }, (error) => {
              this.errorLogService.logError(error)
          })
    }
}
