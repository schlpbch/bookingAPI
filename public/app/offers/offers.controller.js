/**
 * Created by kevinkreuzer on 21.03.17.
 */

export default class OffersController {

  constructor(bookingStore){
    this.bookingStore = bookingStore;
    this.offers = this.bookingStore.offers;
  }
}
