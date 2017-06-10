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
    let url = '../redirect_' + this.trip._links.prices.href
    this.connectionService.$http.get(url, {
      headers
    })
      .then((res) => {
        if (res.data.superSaverPrices === undefined) {
          this.price = res.data.normalPrices[0]
        } else {
          this.price = res.data.superSaverPrices[0]
        }
        this.loadingPrices = false
      }, (error) => {
        this.connectionService.errorLogService.logError(error)
      })
  }
}
