/**
 * Created by kevinkreuzer on 21.03.17.
 */

export default class ConnectionDetailController {
  constructor(bookingStore, connectionService) {
    this.bookingStore = bookingStore
    this.connectionService = connectionService
    this.prices = [];
    this.readonly = true;
    this.removable = false;
    this.loadingPrices = true;

    this.$onChanges = function (changes) {
      if (angular.isDefined(changes.trip.currentValue)) {
        this.getPrices()
      }
    }
    
  }

  getPrices() {
    let headers = this.connectionService.authService.getAuthHeader()
    this.connectionService.$http.get('../redirect_' + this.trip._links.prices.href, { headers })
      .then((res) => {

        for (var index = 0; index < res.data.length; index++) {
          this.prices.push(res.data[index].description + " CHF " + res.data[index].price)
        }

        this.loadingPrices = false
      }, (error) => {
        this.connectionService.errorLogService.logError(error)
      })
  }
}
