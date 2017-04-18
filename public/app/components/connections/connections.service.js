/**
 * Created by kevinkreuzer on 22.03.17.
 */

export default class ConnectionService {
    constructor(bookingStore, tabService, $http, errorLogService) {
        this.bookingStore = bookingStore
        this.tabService = tabService
        this.$http = $http
        this.errorLogService = errorLogService
    }

    getOffers(item) {
        this.$http.get('../redirect_' + item._links.offers.href + '&age=42&reduction=none')
            .then((res) => {
                this.bookingStore.offers = res.data
                this.tabService.goToNextTab()
            }, (error) => {
                this.errorLogService.logError(error)
            })
    }
}
