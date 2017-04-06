/**
 * Created by kevinkreuzer on 17.03.17.
 */
export default class StationController{

  constructor($timeout, $q, $log){
    this.$timeout = $timeout;
    this.$q = $q;
    this.$log = $log;
    this.stations = this.loadStations();
    this.simulateQuery = false;
    this.isDisabled = false;
  }

  newStation(station) {
    alert("Sorry! You'll need to create a Constitution for " + station + ' first!')
  }

  querySearch(query) {
    let results = query ? this.stations.filter(this.createFilterFor(query)) : this.stations,
      deferred
    if (this.simulateQuery) {
      deferred = this.$q.defer()
      $timeout(function () {
        deferred.resolve(results)
      }, Math.random() * 1000, false)
      return deferred.promise
    } else {
      return results
    }
  }

  searchTextChange(text) {
    this.$log.info('Text changed to ' + text)
  }

  selectedItemChange(item) {
    this.$log.info('Item changed to ' + JSON.stringify(item))
  }

  loadStations() {
    let allStations = 'Bern, Thun '
    return allStations.split(/, +/g).map(function (station) {
      return {
        value: station.toLowerCase(),
        display: station
      }
    })
  }

  createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query)
    return function filterFn(station) {
      return (station.value.indexOf(lowercaseQuery) === 0)
    }
  }
}
