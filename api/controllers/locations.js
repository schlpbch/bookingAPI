'use strict'

module.exports = {
  locations
}

function locations (req, res) {
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
  var locationZuerichHB = {
    id: '8503000',
    name: 'Zürich HB',
    lon: 8.540192,
    lat: 47.378176,
    type: 'STATION'
  }
  var locations = [locationBernHB, locationBernRBS, locationThunHB, locationZuerichHB]
  res.json(locations)
}
