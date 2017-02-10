'use strict'

// To modell non-functional behavior
// var sleep = require('sleep');

module.exports = {
  getTrips
}

function getTrips (req, res) {
  // console.log('getVerbindungen')

  // sleep.msleep(200); //average response time

  var leg1 = {
    originName: 'Bern',
    originDate: '2017-01-14',
    originTime: '20:04',
    destinationName: 'Thun',
    destinationDate: '2017-02-24',
    destinationTime: '20:22',
    links: [{
      rel: 'Angebot holen',
      href: '/booking/angebote/RecContext-RC1'
    }]
  }

  var leg2 = {
    originName: 'Bern',
    originDate: '2017-01-14',
    originTime: '20:34',
    destinationName: 'Thun',
    destinationDate: '2017-02-24',
    destinationTime: '20:52'
  }

  var trip1 = {
    leg1,
    leg2,
    links: [{
      rel: 'Angebot holen',
      href: '/booking/angebote/RecContext-RC1'
    }]
  }

  var trip2 = trip1

  var verbindungen = [trip1, trip2]
  res.json(verbindungen)
}
