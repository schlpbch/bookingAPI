'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
var app = angular.module('app', ['ngMaterial', 'ngRoute']);
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange')
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', '$mdDialog', function($scope, $mdSidenav, $mdDialog) {
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  $scope.sucheVerbindung = function(event) {
    // ToDo: Load via REST Services
    //GET http://localhost:8080/api/verbindungen/?vonUICode=8507000&nachUICode=8508500&datum=2017-01-14&zeit=20%3A22
    console.log(event);
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
    }];
  };

  $scope.holeAngebot = function(event) {
    // ToDo: Load via REST Services
    //GET http://localhost:8080/api/angebote/?recContext=RecContext-RC1&vonUICode=8507000&nachUICode=8508500&datum=2017-01-14&zeit=20%3A22&alter=42&ermaessigung=halbtax
    $scope.angebote = [{
      'angebotsId': 'A1',
      'beschreibung': 'DV Artikel    Bern - Thun',
      'preis': 22
    }, {
      'angebotsId': 'A2',
      'beschreibung': 'Sparartikel    Bern - Thun',
      'preis': 12
    }];
  };

  //GET http://localhost:8080/api/buchungen/B1
  $scope.holeBuchung = function(event) {
    $scope.buchungen = [{
      'buchungsId': 'B1',
      'beschreibung': 'Fahrt von Bern nach Thun am 14.01.2017 20:04.'
    }];
  };
}]);

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
};
