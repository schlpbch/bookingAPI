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
    var headers = this.authService.getAuthHeader()
    let url = item._links.prebook.href
    var body = item._links.prebook.body
    body = body.replace('\$\{firstname\}', "john")
    body = body.replace('\$\{lastname\}', "big")
    body = body.replace('1970\-01\-01', "1975-01-01")
    body = body.replace('\$\{firstname\}', "john")
    body = body.replace('\$\{lastname\}', "little")
    body = body.replace('1970\-01\-01', "2010-01-01")
    headers["body"] = body
    this.$http.put(url, {
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
