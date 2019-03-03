/**
 * Created by kevinkreuzer on 22.03.17.
 */

export default class BookingService {
    constructor($http, $mdDialog, bookingStore, errorLogService, authService) {
        this.$http = $http
        this.$mdDialog = $mdDialog
        this.bookingStore = bookingStore
        this.errorLogService = errorLogService
        this.authService = authService
    }

    printBooking(bookingId, item, type) {
        let ticketId = item.ticketId;
        window.open("../api/bookings/" + bookingId + "/tickets/" + ticketId + "?contentType="+type, "_blank");
    }

    cancelBooking(item) {
        let headers = this.authService.getAuthHeader()
        this.$http.get('../' + item._links.cancel.href, {headers})
            .then(res => {
                this.bookingStore.cancellation = res.data
                this.showCancelDialog()
            }, (error) => {
                this.errorLogService.logError(error)
            })
    }

    showCancelDialog() {
        this.$mdDialog.show(
            this.$mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Booking cancelled: ' + this.bookingStore.cancellation.bookingId)
                .textContent('Your booking has been successfully cancelled.')
                .ariaLabel('Cancellation Dialog')
                .ok('Ok')
                .targetEvent(event)
        )
    }

    refundBooking(item) {
        let headers = this.authService.getAuthHeader()
        this.$http.get('../' + item._links.refund.href, {headers})
            .then(res => {
                this.bookingStore.refund = res.data
                this.showRefundDialog()
            }, (error) => {
                this.errorLogService.logError(error)
            })
    }

    showRefundDialog() {
        this.$mdDialog.show(
            this.$mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Booking refunded: ' + this.bookingStore.refund.bookingId)
                .textContent('The amount of xyz CHF has been refunded to your account.\nTODO: Fully specify semantics.')
                .ariaLabel('Refund Dialog')
                .ok('Ok')
                .targetEvent(event)
        )
    }
}
