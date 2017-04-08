/**
 * Created by kevinkreuzer on 15.03.17.
 */

module.exports = ['$timeout', '$q', '$log', function ($timeout, $q, $log) {
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
}]
