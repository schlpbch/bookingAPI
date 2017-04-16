/**
 * Created by kevinkreuzer on 20.03.17.
 */

export default class ReiseWunschService {
    constructor($http, bookingStore, tabService, errorLogService) {
        this.$http = $http
        this.bookingStore = bookingStore
        this.tabService = tabService
        this.errorLogService = errorLogService
    }

    getTrips(origin, destination) {

        let originId = origin.value;
        let destinationId = destination.value;

        this.$http.get(`../redirect_api/trips?originId=${originId}&destinationId=${destinationId}&date=2017-05-05&time=10:00`)
            .then((res) => {
                this.bookingStore.trips = res.data
                this.tabService.goToNextTab()
            }, (error) => {
                this.errorLogService.logError(error)
            })
    }
}
