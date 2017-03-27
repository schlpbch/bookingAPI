'use strict'

const path = require('path')

module.exports = {
    book
}

function book(req, res) {
    var booking = {
        bookingId: 'B1',
        description: 'Fahrt von Bern nach Thun am 14.01.2017 20:04.',
        links: [{
            rel: 'Billette zur Buchung als PDF holen',
            href: 'bookings/B1/fulfill/?type=pdf'
        }, {
            rel: 'Billette zur Buchung als Screenticket holen',
            href: 'bookings/B1/fulfill/?type=screen'
        }, {
            rel: 'Buchung annullieren',
            href: 'bookings/B1/cancel'
        }]
    }

    res.json(booking)
}