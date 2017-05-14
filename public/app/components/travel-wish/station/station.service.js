/**
 * Created by ue69708 on 11.04.2017.
 */

export default class StationService {
  constructor ($http) {
    this.$http = $http
  }

  getStations (query) {
    return this.$http.get(`../redirect_api/locations?q=${query}`)
  }
}
