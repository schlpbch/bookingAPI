'use strict'

var dateFormat = require('dateformat')

export default class ReiseWunschService {
  constructor ($http, bookingStore, conversationService, tabService, errorLogService, authService) {
    this.$http = $http
    this.bookingStore = bookingStore
    this.tabService = tabService
    this.errorLogService = errorLogService
    this.authService = authService
    this.conversationService = conversationService;
  }

  getTrips (originId, destinationId, isArrival, date, time) {
    this.conversationService.resetUuid()
    let headers = this.authService.getAuthHeader()

    let now = new Date()
    let isoDate = dateFormat(date === undefined ? now : date, `isoDate`)
    let isoTime = time === undefined ? dateFormat(now, `HH:MM`) : time

    this.$http.get(`../api/trips?originId=${originId.value}&destinationId=${destinationId.value}&date=${isoDate}&time=${isoTime}`, {
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
