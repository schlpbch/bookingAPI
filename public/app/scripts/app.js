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
    var url = '../booking/trips/?originId=8507000&destinationId=8508500&date=2017-01-14&time=20%3A22'

    if (mockAPICall() === false) {
      $http.get(url)
      .then(function (res) {
        $scope.trips = res.data
        $scope.tabs.selectedIndex = 1
      })
    } else {
      $scope.trips = [{
        'tripId': 'RecContext-RC1',
        "leg1": {
          "origin": {
            "name": "Bern",
            "date": "2017-01-14",
            "time": "20:04"
          },
          "destination": {
            "name": "Thun",
            "date": "2017-01-14",
            "time": "20:22"
          }
        }
      }, {
        'tripId': 'RecContext-RC2',
        "leg1": {
          "origin": {
            "name": "Bern",
            "date": "2017-01-14",
            "time": "21:04"
          },
          "destination": {
            "name": "Thun",
            "date": "2017-01-14",
            "time": "21:22"
          }
        }
      }]
      $scope.tabs.selectedIndex = 1
    }
  }

  $scope.holeAngebot = function (event) {
    // ToDo: Load via REST Services
    var url = '../booking/offers/?tripId=RecContext-RC1&date=2017-01-14&time=20%3A22&alter=42&reduction=halffare'

    if (mockAPICall() === false) {
      $http.get(url)
      .then(function (res) {
        $scope.offers = res.data
        $scope.tabs.selectedIndex = 2
      })
    } else {
      $scope.offers = [{
        'offerId': 'A1',
        'description': 'DV Artikel    Bern - Thun',
        'price': 22
      }, {
        'offerId': 'A2',
        'description': 'Sparartikel    Bern - Thun',
        'price': 12
      }]
      $scope.tabs.selectedIndex = 2
    }
  }

  $scope.holeBuchung = function (event) {
    var url = '../booking/booking/B1/book'
    if (mockAPICall() === false) {
      $http.get(url)
      .then(function (res) {
        $scope.booking = res.data
        $scope.tabs.selectedIndex = 3
      })
    } else {
      $scope.booking = {
        'bookingId': 'B1',
        'description': 'Fahrt von Bern nach Thun am 14.01.2017 20:04.'
      }
      $scope.tabs.selectedIndex = 3
    }
  }

  $scope.annuliereBuchung = function (event) {
    $mdDialog.show(
      $mdDialog.alert()
      .parent(angular.element(document.querySelector('#popupContainer')))
      .clickOutsideToClose(true)
      .title('Buchung annulliert')
      .textContent('Ihre Buchung wurde erfolgreich annulliert.')
      .ariaLabel('Annullierungs Dialog')
      .ok('Ok')
      .targetEvent(event)
    )
  }
}])

app.controller('AbfahrtCtrl', ['$timeout', '$q', '$log', function ($timeout, $q, $log) {
  var self = this

  self.simulateQuery = false
  self.isDisabled = false
  self.states = loadAll()
  self.querySearch = querySearch
  self.selectedItemChange = selectedItemChange
  self.searchTextChange = searchTextChange
  self.newState = newState

  function newState (state) {
    alert("Sorry! You'll need to create a Constitution for " + state + ' first!')
  }

  function querySearch (query) {
    var results = query ? self.states.filter(createFilterFor(query)) : self.states,
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

  function loadAll () {
    var allStates = 'Bern, Thun '
    return allStates.split(/, +/g).map(function (state) {
      return {
        value: state.toLowerCase(),
        display: state
      }
    })
  }

  function createFilterFor (query) {
    var lowercaseQuery = angular.lowercase(query)

    return function filterFn (state) {
      return (state.value.indexOf(lowercaseQuery) === 0)
    }
  }
}])

app.controller('AnkunftCtrl', ['$timeout', '$q', '$log', function ($timeout, $q, $log) {
  var self = this

  self.simulateQuery = false
  self.isDisabled = false
  self.states = loadAll()
  self.querySearch = querySearch
  self.selectedItemChange = selectedItemChange
  self.searchTextChange = searchTextChange
  self.newState = newState

  function newState (state) {
    alert("Sorry! You'll need to create a Constitution for " + state + ' first!')
  }

  function querySearch (query) {
    var results = query ? self.states.filter(createFilterFor(query)) : self.states,
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

  function loadAll () {
    var allStates = 'Bern, Thun '
    return allStates.split(/, +/g).map(function (state) {
      return {
        value: state.toLowerCase(),
        display: state
      }
    })
  }

  function createFilterFor (query) {
    var lowercaseQuery = angular.lowercase(query)

    return function filterFn (state) {
      return (state.value.indexOf(lowercaseQuery) === 0)
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

function mockAPICall () {
  return false
}
