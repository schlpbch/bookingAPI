/**
 * Created by kevinkreuzer on 21.03.17.
 */

export default class ConnectionDetailController {

  constructor(bookingStore, $http, tabService) {
    this.bookingStore = bookingStore;
    this.tabService = tabService;
    this.$http = $http;
  }

  getOffers(item) {
    this.$http.get('../' + item.links[0].href)
      .then(function (res) {
        this.bookingStore.offers = res.data;
        this.tabService.selectedTab = 2;
      })
  }
}
