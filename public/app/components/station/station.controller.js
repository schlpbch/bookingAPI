/**
 * Created by kevinkreuzer on 15.03.17.
 */

module.exports = ['$http', '$timeout', '$q', '$log', function ($http, $timeout, $q, $log) {
  var self = this

  self.$http = $http;
  self.simulateQuery = false
  self.isDisabled = false
  self.querySearch = querySearch
  self.selectedItemChange = selectedItemChange
  self.searchTextChange = searchTextChange
  self.newStation = newStation

  function newStation (station) {
    alert("Sorry! You'll need to create a Constitution for " + station + ' first!')
  }

  function querySearch (query) {
    console.log('In der Suche');
    var results = []
    self.$http.get('../redirect_api/locations?q=' + query)
      .then((res) => {
        results = res.data
      })
    return results
  }

  function searchTextChange (text) {
    $log.info('Text changed to ' + text)
  }

  function selectedItemChange (item) {
    $log.info('Item changed to ' + JSON.stringify(item))
  }
}]
