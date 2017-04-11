'use strict'

module.exports = {
  trips
}

function trips (req, res) {
  var trip1 = {
    tripId: 'trip-rec-context1',
    segments: [{
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
    }],
    _links: {
        'self': {
            href: 'trips/trip-rec-context1'
        }, 'prices': {
            title: 'Request the cheapest price for a trip.', href: 'api/prices/trip-rec-context1'
        }, 'offers': {
            title: 'Request offers for a trip.', href: 'api/offers?originId=8507000&destinationId=8503000&date=2017-05-01'
        }
    }
  }

    // first leg of second trip

  var trip2 = {
    tripId: 'trip-rec-context2',
    segments: [{
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
    }],
    _links: {
        'self': {
            href: 'trips/trip-rec-context2'
        }, 'prices': {
            title: 'Request the cheapest price for a trip.', href: 'api/prices/trip-rec-context2'
        }, 'offers': {
            title: 'Request offers for a trip.', href: 'api/offers?originId=8507000&destinationId=8503000&date=2017-05-02'
        }
    }
  }

  var trips = [trip1, trip2]
  res.json(trips)
}
