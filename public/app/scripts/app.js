'use strict'

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */

// const angular = require('angular')

var app = angular.module('app', ['ngMaterial', 'ngRoute'])
app.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange')
})

app.controller('AppCtrl', ['$scope', '$mdSidenav', '$mdDialog', '$http', function ($scope, $mdSidenav, $mdDialog, $http) {
  $scope.tabs = {
    selectedIndex: 0
  }
  $scope.toggleSidenav = function (menuId) {
    $mdSidenav(menuId).toggle()
  }

  $scope.sucheVerbindung = function (event) {
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

  $scope.holeAngebot = function (event, item) {
    $http.get('../' + item.links[1].href)
    .then(function (res) {
      $scope.offers = res.data
      $scope.tabs.selectedIndex = 2
    })
  }

  $scope.holeVorabbuchung = function (event, item) {
    $http.get('../' + item.links[0].href)
      .then(function (res) {
        $scope.prebooking = res.data
        $scope.tabs.selectedIndex = 3
      })
  }

  $scope.holeBuchung = function (event, item) {
    $http.get('../' + item.links[0].href)
      .then(function (res) {
        $scope.booking = res.data
        $scope.tabs.selectedIndex = 4
      })
  }

  $scope.annuliereBuchung = function (event, item) {
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
}])

app.controller('StationCtrl', ['$timeout', '$q', '$log', function ($timeout, $q, $log) {
  var self = this

  self.simulateQuery = false
  self.isDisabled = false
  self.stations = loadStations()
  self.querySearch = querySearch
  self.selectedItemChange = selectedItemChange
  self.searchTextChange = searchTextChange
  self.newStation = newStation

  function newStation (station) {
    alert("Sorry! You'll need to create a Constitution for " + station + ' first!')
  }

  function querySearch (query) {
    var results = query ? self.stations.filter(createFilterFor(query)) : self.stations,
      deferred
    if (self.simulateQuery) {
      deferred = $q.defer()
      $timeout(function () {
        deferred.resolve(results)
      }, Math.random() * 1000, false)
      return deferred.promise
    } else {
      return results
    }
  }

  function searchTextChange (text) {
    $log.info('Text changed to ' + text)
  }

  function selectedItemChange (item) {
    $log.info('Item changed to ' + JSON.stringify(item))
  }

  function loadStations () {
    var allStations = 'Bern, Thun '
    return allStations.split(/, +/g).map(function (station) {
      return {
        value: station.toLowerCase(),
        display: station
      }
    })
  }

  function createFilterFor (query) {
    var lowercaseQuery = angular.lowercase(query)

    return function filterFn (station) {
      return (station.value.indexOf(lowercaseQuery) === 0)
    }
  }
}])

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
