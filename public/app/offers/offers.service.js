/**
 * Created by kevinkreuzer on 22.03.17.
 */

export default class OffersService {

  constructor(bookingStore, tabService, $http) {
    this.bookingStore = bookingStore;
    this.tabService = tabService;
    this.$http = $http;
  }

  getPrebooking(item) {
    this.$http.get('../' + item.links[0].href)
      .then(res => {
        this.bookingStore.prebooking = res.data;
        this.tabService.goToNextTab();
      })
  }
}
