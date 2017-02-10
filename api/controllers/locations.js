'use strict'

module.exports = {
  getLocations
}

function getLocations (req, res) {
  var locationBernHB = {
    extId: '8507000',
    name: 'Bern HB',
    lon: 7.439122,
    lat: 46.948825
  }
  var locationBernRBS = {
    extId: '8508050',
    name: 'Bern RBS',
    lat: 7.439122,
    lon: 46.948825
  }
  var locations = [locationBernHB, locationBernRBS]
  res.json(locations)
}
