/**
 * Created by kevinkreuzer on 20.03.17.
 */

export default class ReiseWunschService {
  constructor ($http, bookingStore, tabService, errorLogService) {
    this.$http = $http
    this.bookingStore = bookingStore
    this.tabService = tabService
    this.errorLogService = errorLogService
  }

  getTrips (originId, destinationId, isArrival, date, time) {
    this.$http.get(`../redirect_api/trips?originId=${originId}&destinationId=${destinationId}&date=${date}&time=${time}`)
      .then((res) => {
        this.bookingStore.trips = res.data
        this.tabService.goToNextTab()
      }, (error) => {
        this.errorLogService.logError(error)
      })
  }
}
