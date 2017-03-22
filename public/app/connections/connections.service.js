/**
 * Created by kevinkreuzer on 22.03.17.
 */

export default class ConnectionService{

  constructor(bookingStore, tabService, $http){
    this.bookingStore = bookingStore;
    this.tabService = tabService;
    this.$http = $http;
  }

  getOffers(item) {
    this.$http.get('../' + item.links[0].href)
      .then((res) => {
        this.bookingStore.offers = res.data;
        this.tabService.goToNextTab();
      })
  }
}
