/**
 * Created by kevinkreuzer on 22.03.17.
 */

export default class PreebookingService {
    constructor(bookingStore, $http, tabService, errorLogService) {
        this.bookingStore = bookingStore
        this.$http = $http
        this.tabService = tabService
        this.errorLogService = errorLogService
    }

    getBooking(item) {
        this.$http.get('../redirect_' + item._links.confirm.href)
            .then(res => {
                this.bookingStore.bookings = res.data
                this.tabService.goToNextTab()
            }, (error) => {
                this.errorLogService.logError(error)
            })
    }
}
