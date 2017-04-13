/**
 * Created by kevinkreuzer on 17.03.17.
 */
export default class StationController {
  constructor ($timeout, $q, $log, stationService) {
    this.$timeout = $timeout
    this.$q = $q
    this.$log = $log
    this.stationService = stationService;
    this.stations = []
    this.isDisabled = false
  }

  newStation (station) {
    alert("Sorry! You'll need to create a Constitution for " + station + ' first!')
  }

  querySearch (query) {
    this.stationService.getStations(query)
      .then(res => {
        this.stations = res.data.map(location => ({
          display: location.name,
          value: location.id
        }));
      })
    return this.stations
  }

  searchTextChange (text) {
    this.$log.info('Text changed to ' + text)
  }

  selectedItemChange (item) {
    this.$log.info('Item changed to ' + JSON.stringify(item))
  }
}
