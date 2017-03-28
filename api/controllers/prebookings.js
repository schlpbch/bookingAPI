'use strict'

const path = require('path')

module.exports = {
    prebook
}

function prebook(req, res) {
    var prebooking = {
        preBookId: 'P1',
        description: 'Fahrt von Bern nach Thun am 14.01.2017 20:04 für 22 CHF',
        links: [
            {
                rel: 'Billette zur Buchung holen',
                href: 'bookings/confirm?preBookingId=P1'
            }
        ]
    }
    res.json(prebooking)
}