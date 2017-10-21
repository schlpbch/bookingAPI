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
    let headers = this.connectionService.authService.getAuthHeader()
    let url = this.trip._links.prices.href
    let urlReplace = url.replace('\$\{passengerInfos\}', "42,7")
    this.connectionService.$http.get(urlReplace, {
      headers
    })
      .then((res) => {
        this.price = res.data[0].price
        this.loadingPrices = false
      }, (error) => {
        this.connectionService.errorLogService.logError(error)
      })
  }
}
