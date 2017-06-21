/**
 * Created by kevinkreuzer on 22.03.17.
 */

export default class PreebookingService {
    constructor(bookingStore, $http, tabService, errorLogService, authService) {
        this.bookingStore = bookingStore
        this.$http = $http
        this.tabService = tabService
        this.errorLogService = errorLogService
        this.authService = authService
    }

    getBooking(item) {
        let headers = this.authService.getAuthHeader()
        this.$http.get(item._links.confirm.href, {headers})
            .then(res => {
                this.bookingStore.bookings = res.data
                this.tabService.goToNextTab()
            }, (error) => {
                this.errorLogService.logError(error)
            })
    }
}
