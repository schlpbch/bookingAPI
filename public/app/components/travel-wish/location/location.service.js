/**
 * Created by ue69708 on 11.04.2017.
 */

export default class LocationService {
  constructor ($http, authService) {
    this.$http = $http
  }

  getStations (query) {
    return this.$http.get(`../api/locations?name=${query}`)
  }
}
