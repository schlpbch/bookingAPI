/**
 * Created by kevinkreuzer on 21.03.17.
 */

export default class ConnectionDetailController {
  constructor (bookingStore, connectionService) {
    this.bookingStore = bookingStore
    this.connectionService = connectionService
    this.price = 0
    this.readonly = true
    this.removable = false
    this.loadingPrices = true

    this.$onChanges = function (changes) {
      if (angular.isDefined(changes.trip.currentValue)) {
        this.getPrices()
      }
    }
  }

  getPrices () {
    let tripId = this.trip.tripId;
    let url = 'http://localhost:8080/api/v2/prices?tripIds=' + tripId + "&passengers=paxa;42;half-fare"
    this.connectionService.$http.get(url, {
    })
      .then((res) => {
        this.price = res.data[0].price
        this.loadingPrices = false
      }, (error) => {
        this.connectionService.errorLogService.logError(error)
      })
  }
}
