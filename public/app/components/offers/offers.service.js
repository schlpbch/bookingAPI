/**
 * Created by kevinkreuzer on 22.03.17.
 */

export default class OffersService {
  constructor (bookingStore, tabService, $http, errorLogService, authService) {
    this.bookingStore = bookingStore
    this.tabService = tabService
    this.$http = $http
    this.errorLogService = errorLogService
    this.authService = authService
  }

  getPrebooking (item) {
    let headers = this.authService.getAuthHeader()
    let url = item._links.prebook.href
    var data = item._links.prebook.body
    data = data.replace('\$\{firstname\}', "john")
    data = data.replace('\$\{lastname\}', "big")
    data = data.replace('1970\-01\-01', "1975-01-01")
    data = data.replace('\$\{firstname\}', "john")
    data = data.replace('\$\{lastname\}', "little")
    data = data.replace('1970\-01\-01', "1975-01-02")
    this.$http.put(url, data, {
      headers
    })
      .then(res => {
        this.bookingStore.prebookings = res.data
        this.tabService.goToNextTab()
      }, (error) => {
        this.errorLogService.logError(error)
      })
  }
}
