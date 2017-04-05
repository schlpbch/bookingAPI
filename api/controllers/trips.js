'use strict'

module.exports = {
  trips
}

function trips (req, res) {
  var trip1 = {
    tripId: 'trip-rec-context1',
    leg1: {
      origin: {
        id: '8507000',
        name: 'Bern',
        date: '2017-01-14',
        time: '20:04'
      },
      destination: {
        id: '8507100',
        name: 'Thun',
        date: '2017-01-14',
        time: '20:22'
      }
    },
    _links: {
        'self': {
            href: 'trips/trip-rec-context1'
        }, 'prices': {
            title: 'Request the cheapest price for a trip.', href: 'prices/trip-rec-context1'
        }, 'offers': {
            title: 'Request offers for a trip.', href: 'offers/?originId=8507000&destinationId=8508500&date=2017-05-02&age=42'
        }
    }
  }

    // first leg of second trip

  var trip2 = {
    tripId: 'trip-rec-context2',
    leg1: {
      origin: {
        id: '8507000',
        name: 'Bern',
        date: '2017-01-14',
        time: '20:34'
      },
      destination: {
        id: '8507100',
        name: 'Thun',
        date: '2017-01-14',
        time: '20:52'
      }
    },
    _links: {
        'self': {
            href: 'trips/trip-rec-context2'
        }, 'prices': {
            title: 'Request the cheapest price for a trip.', href: 'prices/trip-rec-context2'
        }, 'offers': {
            title: 'Request offers for a trip.', href: 'offers/?originId=8508500&destinationId=8507000&date=2017-05-02&age=42&reduction=halffare'
        }
    }
  }

  var trips = [trip1, trip2]
  res.json(trips)
}
