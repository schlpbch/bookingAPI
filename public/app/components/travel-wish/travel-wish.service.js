/**
 * Created by kevinkreuzer on 20.03.17.
 */

export default class ReiseWunschService {
    constructor($http, bookingStore, tabService, errorLogService, authService) {
        this.$http = $http
        this.bookingStore = bookingStore
        this.tabService = tabService
        this.errorLogService = errorLogService
        this.authService = authService
    }

    getTrips(originId, destinationId, isArrival, date, time) {
        let headers = this.authService.getAuthHeader()

        var today = new Date();
        var yyyy = today.getFullYear();
        var dd = today.getDate();
        var mm = today.getMonth()+1;

        if(dd<10) {
          dd='0'+dd;
        }
        if(mm<10){
          mm='0'+mm;
        }
        var today = yyyy + '-' + mm + '-' + dd;

        this.$http.get(`../redirect_api/trips?originId=${originId.value}&destinationId=${destinationId.value}&date=${today}&time=19:00`,
            {headers})
            .then((res) => {
                this.bookingStore.trips = res.data
                this.tabService.goToNextTab()
            }, (error) => {
                this.errorLogService.logError(error)
            })
    }
}
