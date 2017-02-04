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
  $scope.toggleSidenav = function (menuId) {
    $mdSidenav(menuId).toggle()
  }

  $scope.sucheVerbindung = function (event) {
    // ToDo: Load via REST Services
    var url = '../booking/verbindungen/?vonUICode=8507000&nachUICode=8508500&datum=2017-01-14&zeit=20%3A22'

    if (mockAPICall() === false) {
      $http.get(url)
      .then(function (res) {
        $scope.verbindungen = res.data
      })
    } else {
      $scope.verbindungen = [{
        'verbindungsId': 'RecContext-RC1',
        'zugNummer': 'IC 918',
        'abfahrtsOrt': 'Bern',
        'abfahrtsDatum': '2017-01-14',
        'abfahrtsZeit': '20:04',
        'ankunftsOrt': 'Thun',
        'ankunftsDatum': '2017-02-24',
        'ankunftsZeit': '20:22'
      }, {
        'verbindungsId': 'RecContext-RC2',
        'zugNummer': 'IC 918',
        'abfahrtsOrt': 'Bern',
        'abfahrtsDatum': '2017-01-14',
        'abfahrtsZeit': '20:34',
        'ankunftsOrt': 'Thun',
        'ankunftsDatum': '2017-02-24',
        'ankunftsZeit': '20:52'
      }]
    }
  }

  $scope.holeAngebot = function (event) {
    // ToDo: Load via REST Services
    var url = '../booking/angebote/?recContext=RecContext-RC1&vonUICode=8507000&nachUICode=8508500&datum=2017-01-14&zeit=20%3A22&alter=42&ermaessigung=halbtax'

    if (mockAPICall() === false) {
      $http.get(url)
      .then(function (res) {
        $scope.angebote = res.data
      })
    } else {
      $scope.angebote = [{
        'angebotsId': 'A1',
        'beschreibung': 'DV Artikel    Bern - Thun',
        'preis': 22
      }, {
        'angebotsId': 'A2',
        'beschreibung': 'Sparartikel    Bern - Thun',
        'preis': 12
      }]
    }
  }

  $scope.holeBuchung = function (event) {
    var url = '../booking/buchungen/B1'
    if (mockAPICall() === false) {
      $http.get(url)
      .then(function (res) {
        $scope.buchung = res.data
      })
    } else {
      $scope.buchung = {
        'buchungsId': 'B1',
        'beschreibung': 'Fahrt von Bern nach Thun am 14.01.2017 20:04.'
      }
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
