/**
 * Created by kevinkreuzer on 22.03.17.
 */

export default class OffersService {
    constructor(bookingStore, tabService, $http, errorLogService, authService) {
        this.bookingStore = bookingStore
        this.tabService = tabService
        this.$http = $http
        this.errorLogService = errorLogService
        this.authService = authService
    }

    getPrebooking(item) {
        let headers = this.authService.getAuthHeader()
        this.$http.get('../redirect_' + item._links.prebook.href + '?firstname=Hans&lastname=Mustermann', {headers})
            .then(res => {
                this.bookingStore.prebookings = res.data
                this.tabService.goToNextTab()
            }, (error) => {
                this.errorLogService.logError(error)
            })
    }
}
