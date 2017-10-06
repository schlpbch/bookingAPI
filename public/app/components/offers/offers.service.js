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
    let url = item._links.prebook.href + '&firstname=Zsakul&lastname=Kaleip'
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
