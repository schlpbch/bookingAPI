/**
 * Created by kevinkreuzer on 21.03.17.
 */

export default class ConnectionDetailController {
  constructor (bookingStore, connectionService) {
    this.bookingStore = bookingStore
    this.connectionService = connectionService
    this.prices = []
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
        let price = 0
        if (res.data.superSaverPrices === undefined) {
          price = res.data.normalPrices[0]
        } else {
          price = res.data.superSaverPrices[0]
        }
        this.prices.push(price / 100 + ' CHF')
        this.loadingPrices = false
      }, (error) => {
        this.connectionService.errorLogService.logError(error)
      })
  }
}
