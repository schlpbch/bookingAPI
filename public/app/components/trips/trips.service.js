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
        let url = item._links.offers.href
        // cooler ist https://github.com/bennadel/httpi
        let urlReplace = url.replace('\$\{passengerInfos\}', "paxa;42;none,paxb;17;none")
        this.$http.get(urlReplace, {headers})
            .then((res) => {
                this.bookingStore.offercontainers = res.data
                this.tabService.goToNextTab()
            }, (error) => {
                this.errorLogService.logError(error)
            })
    }
}
