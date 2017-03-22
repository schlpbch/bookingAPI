/**
 * Created by kevinkreuzer on 22.03.17.
 */

export default class BookingService {

  constructor($http, $mdDialog, bookingStore) {
    this.$http = $http;
    this.$mdDialog = $mdDialog;
    this.bookingStore = bookingStore;
  }

  cancelBooking(item) {
    this.$http.get('../' + item.links[2].href)
      .then(res => {
        this.bookingStore.cancellation = res.data;
        this.showCancelDialog();
      })
  }

  showCancelDialog() {
    this.$mdDialog.show(
      this.$mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Buchung annulliert: ' + this.bookingStore.cancellation.bookingId)
        .textContent('Ihre Buchung wurde erfolgreich annulliert.')
        .ariaLabel('Annullierungs Dialog')
        .ok('Ok')
        .targetEvent(event)
    )
  }
}
