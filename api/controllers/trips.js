'use strict'

// To modell non-functional behavior
// var sleep = require('sleep');

module.exports = {
  getTrips
}

function getTrips (req, res) {
  // console.log('getVerbindungen')

  // sleep.msleep(200); //average response time

  // first leg of first trip
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

  var trip1 = {
    tripId: 'trip-rec-context1',
    leg1,
    links: [{
      rel: 'Request offers for a trip.',
      href: 'offers/trip-rec-context1'
    }]
  }

  // first leg of second trip
  leg1 = {
    origin: {
      name: 'Bern',
      date: '2017-01-14',
      time: '20:34'
    },
    destination: {
      name: 'Thun',
      date: '2017-01-14',
      time: '20:52'
    }
  }

  var trip2 = {
    tripId: 'trip-rec-context2',
    leg1,
    links: [{
      rel: 'Request offers for a trip.',
      href: 'offers/trip-rec-context2'
    }]
  }

  var verbindungen = [trip1, trip2]
  res.json(verbindungen)
}
