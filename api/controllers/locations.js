'use strict'

module.exports = {
    getLocationsUsingGET
}

function getLocationsUsingGET (req, res) {
  var locationBernHB = {
    id: '8507000',
    name: 'Bern HB',
    lon: 7.439122,
    lat: 46.948825,
    type: 'STATION'
  }
  var locationBernRBS = {
    id: '8508050',
    name: 'Bern RBS',
    lat: 7.439122,
    lon: 46.948825,
    type: 'STATION'
  }
  var locationThunHB = {
    id: '8507100',
    name: 'Thun HB',
    lat: 7.629594,
    lon: 46.754853,
    type: 'STATION'
  }
  var locations = [locationBernHB, locationBernRBS, locationThunHB]
  res.json(locations)
}
