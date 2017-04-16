/**
 * Created by kevinkreuzer on 22.03.17.
 */

export default class OffersService {
    constructor(bookingStore, tabService, $http, errorLogService) {
        this.bookingStore = bookingStore
        this.tabService = tabService
        this.$http = $http
        this.errorLogService = errorLogService
    }

    getPrebooking(item) {
        this.$http.get('../redirect_' + item._links.prebook.href + '?firstname=Hans&lastname=Mustermann')
            .then(res => {
                this.bookingStore.prebookings = res.data
                this.tabService.goToNextTab()
            }, (error) => {
                this.errorLogService.logError(error)
            })
    }
}
