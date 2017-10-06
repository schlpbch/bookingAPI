/**
 * Created by kevinkreuzer on 22.03.17.
 */
export default class TripsService {
    constructor(bookingStore, tabService, $http, errorLogService, authService) {
        this.bookingStore = bookingStore
        this.tabService = tabService
        this.$http = $http
        this.errorLogService = errorLogService
        this.authService = authService
    }

    getOffers(item) {
        let headers = this.authService.getAuthHeader()
        this.$http.get(item._links.offers.href + '&firstname=Zsakul&lastname=Kaleip&age=42&reduction=none', {headers})
            .then((res) => {
                this.bookingStore.offers = res.data
                this.tabService.goToNextTab()
            }, (error) => {
                this.errorLogService.logError(error)
            })
    }
}
