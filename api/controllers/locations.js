'use strict'

GLOBAL._ = require('underscore')
const request = require('request')
const querystring = require('querystring')

module.exports = {
  getLocationsUsingGET
}

function getLocationsUsingGET (req, res) {
  if (GLOBAL.MOCKED) {
    getLocationsUsingGETMock(req, res)
  } else {
    let query = querystring.stringify(req.query)

    request({
      headers: {
        'Authorization': 'Bearer ' + GLOBAL.getToken(),
        'X-Conversation-Id': GLOBAL.CONVERSATION_ID,
        'X-Contract-Id': GLOBAL.CONTRACT_ID
      },
      uri: 'https://b2p-int.api.sbb.ch/api/locations?' + query
    }, function (err, response, body) {
      if (!!err) {
        console.log(err)
      }
        console.log(body)
      res.json(JSON.parse(body))
    })
  }
}

function getLocationsUsingGETMock (req, res) {
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
