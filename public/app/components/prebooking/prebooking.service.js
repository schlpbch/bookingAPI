/**
 * Created by kevinkreuzer on 22.03.17.
 */

export default class PreebookingService {

  constructor(bookingStore, $http, tabService) {
    this.bookingStore = bookingStore;
    this.$http = $http;
    this.tabService = tabService;
  }

  getBooking(item) {
    this.$http.get('../' + item.links[0].href)
      .then(res => {
        this.bookingStore.booking = res.data;
        this.tabService.goToNextTab();
      })
  }
}
