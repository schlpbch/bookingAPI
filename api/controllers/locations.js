'use strict'

module.exports = {
  locations
}

function locations (req, res) {
  var locationZuerichHB = {
      id: '8503000',
      name: 'Zürich HB',
      lon: 7.439122,
      lat: 46.948825,
      type: 'STATION'
  }
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
  var locations = [locationZuerichHB, locationBernHB, locationBernRBS]
  res.json(locations)
}
