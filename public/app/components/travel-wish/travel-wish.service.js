'use strict'

var dateFormat = require('dateformat')

export default class ReiseWunschService {
  constructor ($http, bookingStore, tabService, errorLogService, authService) {
    this.$http = $http
    this.bookingStore = bookingStore
    this.tabService = tabService
    this.errorLogService = errorLogService
    this.authService = authService
  }

  getTrips (originId, destinationId, isArrival, date, time) {
    let headers = this.authService.getAuthHeader()

    let now = new Date()
    let isoDate = dateFormat(date == null ? now : date, `isoDate`)
    let isoTime = dateFormat(time == null ? now : time, `HH:MM`)

    this.$http.get(`../redirect_api/trips?originId=${originId.value}&destinationId=${destinationId.value}&date=${isoDate}&time=${isoTime}`, {
      headers
    })
      .then((res) => {
        this.bookingStore.trips = res.data
        this.tabService.goToNextTab()
      }, (error) => {
        this.errorLogService.logError(error)
      })
  }
}
