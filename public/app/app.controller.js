/**
 * Created by kevinkreuzer on 15.03.17.
 */

export default class AppController{

  constructor(bookingStore, tabService){
    this.bookingStore = bookingStore;
    this.tabService = tabService;
  }
}

/*

module.exports = ['$scope', '$mdSidenav', '$mdDialog', '$http', function ($scope, $mdSidenav, $mdDialog, $http) {
  $scope.tabs = {
    selectedIndex: 0
  }
  $scope.toggleSidenav = function (menuId) {
    $mdSidenav(menuId).toggle()
  }

  $scope.getTrips = function (event) {
    // ToDo: Load via REST Services
    var url = '../trips/?originId=8507000&destinationId=8508500&date=2017-01-14&time=20%3A22'

    $scope.trips = null
    $scope.offers = null
    $scope.prebooking = null
    $scope.booking = null

    $http.get(url)
      .then(function (res) {
        $scope.trips = res.data
        $scope.tabs.selectedIndex = 1
      })
  }

  $scope.getOffers = function (event, item) {
    $http.get('../' + item.links[0].href)
      .then(function (res) {
        $scope.offers = res.data
        $scope.tabs.selectedIndex = 2
      })
  }

  $scope.getPrebooking = function (event, item) {
    $http.get('../' + item.links[0].href)
      .then(function (res) {
        $scope.prebooking = res.data
        $scope.tabs.selectedIndex = 3
      })
  }

  $scope.getBooking = function (event, item) {
    $http.get('../' + item.links[0].href)
      .then(function (res) {
        $scope.booking = res.data
        $scope.tabs.selectedIndex = 4
      })
  }

  $scope.cancelBooking = function (event, item) {
    $http.get('../' + item.links[2].href)
      .then(function (res) {
        $scope.cancellation = res.data

        $mdDialog.show(
          $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Buchung annulliert: ' + $scope.cancellation.bookingId)
            .textContent('Ihre Buchung wurde erfolgreich annulliert.')
            .ariaLabel('Annullierungs Dialog')
            .ok('Ok')
            .targetEvent(event)
        )
      })
  }

  $scope.printBooking = function (event, bookings) {
    $http.get('../' + bookings.links[0].href)
      .then(function (res) {
        var ticketUrl = res.config.url
        $mdDialog.show({
          controller: DialogController,
          scope: $scope,
          preserveScope: true,
          template: '<md-dialog style="max-width: 100% max-height: 100%; width: 100%; height: 100%; border-radius: 0;">' +
          '  <md-dialog-content style="width: 100%; height: 100%; ">' +
          '    <object data="' + ticketUrl + '" type="application/pdf" style="width: 100%; height: 100%;">' +
          '       <embed ng-src="' + ticketUrl + '" type="application/pdf" />' +
          '    </object>' +
          '  </md-dialog-content>' +
          '</md-dialog>',
          parent: angular.element(document.querySelector('#popupContainer')),
          targetEvent: event,
          clickOutsideToClose: true
        })
      })
  };

}]

function DialogController ($scope, $mdDialog) {
  $scope.hide = function () {
    $mdDialog.hide()
  }
  $scope.cancel = function () {
    $mdDialog.cancel()
  }
  $scope.answer = function (answer) {
    $mdDialog.hide(answer)
  }
};

*/
