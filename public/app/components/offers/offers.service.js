export default class OffersService {
  constructor (bookingStore, tabService, $http, errorLogService, authService, conversationService) {
    this.bookingStore = bookingStore
    this.tabService = tabService
    this.$http = $http
    this.errorLogService = errorLogService
    this.authService = authService
    this.conversationService = conversationService
  }

  getPrebooking (item) {
    this.conversationService.resetUuid();

    let url = '../api/v2/prebookings'
    let data = [
      {
        "offerPrebookings": [
          {
            "offerId": item.offers[0].offerId
          }
        ],
        "passenger": {
          "dateOfBirth": "1980-01-01",
          "firstname": "The",
          "id": item.offers[0].passengerId,
          "lastname": "Trasier"
        }
      }
    ];
    this.$http.post(url, data, { headers: { 'X-Conversation-Id': this.conversationService.getUuid() }})
      .then(res => {
        this.bookingStore.prebookings = res.data
        this.tabService.goToNextTab()
      }, (error) => {
        this.errorLogService.logError(error)
      })
  }
}
