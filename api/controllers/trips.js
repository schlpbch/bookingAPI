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
    origin: {
      name: 'Bern',
      date: '2017-01-14',
      time: '20:04'
    },
    destination: {
      name: 'Thun',
      date: '2017-01-14',
      time: '20:22'
    }
  }

  var leg2 = {
      origin: {
          name: 'Thun',
          date: '2017-01-14',
          time: '20:34'
      },
      destination: {
          name: 'Interlaken',
          date: '2017-01-14',
          time: '20:52'
      }
  }

  var trip1 = {
    tripId: 'trip-rec-context',
    leg1,
    leg2,
    links: [{
      rel: 'Request prices for a trip.',
      href: 'prices/trip-rec-context'
    }, {
        rel: 'Request offers for a trip.',
        href: 'offers/trip-rec-context'
    }]
  }

  var trip2 = trip1

  var verbindungen = [trip1, trip2]
  res.json(verbindungen)
}
