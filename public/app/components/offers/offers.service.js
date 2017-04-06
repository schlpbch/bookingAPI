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
    this.$http.get('../redirect_' + item._links.prebook.href)
      .then(res => {
        this.bookingStore.prebookings = res.data;
        this.tabService.goToNextTab();
      })
  }
}
