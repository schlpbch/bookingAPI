export default class OffersService {
  constructor (bookingStore, tabService, $http, errorLogService, authService) {
    this.bookingStore = bookingStore
    this.tabService = tabService
    this.$http = $http
    this.errorLogService = errorLogService
    this.authService = authService
  }

  getPrebooking (item) {
    let url = '../api/v2/prebookings'
    let data = [
      {
        "offerPrebookings": [
          {
            "offerId": item.offers[0].offerId
          }
        ],
        "passenger": {
          "dateOfBirth": "1983-08-23",
          "firstname": "Frank",
          "id": item.offers[0].passengerId,
          "lastname": "Pfleger"
        }
      }
    ];
    this.$http.post(url, data)
      .then(res => {
        this.bookingStore.prebookings = res.data
        this.tabService.goToNextTab()
      }, (error) => {
        this.errorLogService.logError(error)
      })
  }
}
