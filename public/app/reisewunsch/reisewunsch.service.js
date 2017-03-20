/**
 * Created by kevinkreuzer on 20.03.17.
 */

export default class ReiseWunschService {

  constructor($http, bookingStore, tabService) {
    this.$http = $http;
    this.bookingStore = bookingStore;
    this.tabService = tabService;
  }

  getTrips() {
    let url = '../trips/?originId=8507000&destinationId=8508500&date=2017-01-14&time=20%3A22'
    return this.$http.get(url).then(res => {
      this.bookingStore.trips = res.data;
      this.tabService.selectedTab = 1;
    });
  }
}
