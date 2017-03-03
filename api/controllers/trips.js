'use strict'

module.exports = {
    trips
}

function trips(req, res) {
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
        links: [{
            rel: 'Request offers for a trip.',
            href: 'offers/trip-rec-context1'
        }, {
            rel: 'Request the cheapest price for a trip.',
            href: 'prices/trip-rec-context1'
        }]
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
        links: [{
            rel: 'Request offers for a trip.',
            href: 'offers/trip-rec-context2'
        }, {
            rel: 'Request the cheapest price for a trip.',
            href: 'prices/trip-rec-context2'
        }]
    }

    var trips = [trip1, trip2]
    res.json(trips)
}