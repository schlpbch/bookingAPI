'use strict'

const path = require('path')

module.exports = {
    prebook,
    book,
    print
}

function prebook(req, res) {
    var prebooking = {
        preBookId: 'P1',
        description: 'Fahrt von Bern nach Thun am 14.01.2017 20:04 für 22 CHF',
        links: [
            {
                rel: 'Billette zur Buchung holen',
                href: 'bookings/P1/book'
            }
        ]
    }
    res.json(prebooking)
}

function book(req, res) {
    var booking = {
        bookingId: 'B1',
        description: 'Fahrt von Bern nach Thun am 14.01.2017 20:04.',
        links: [{
            rel: 'Billette zur Buchung als PDF holen',
            href: 'bookings/B1/print/?type=pdf'
        }, {
            rel: 'Billette zur Buchung als Screenticket holen',
            href: 'bookings/B1/print/?type=screen'
        }, {
            rel: 'Buchung annullieren',
            href: 'cancellations/B1/cancel'
        }]
    }

    res.json(booking)
}

function print(req, res) {
    if (req.query.type === 'pdf') {
        var options = {
            root: path.join(__dirname, '/../../public/app/components')
        }
        res.sendFile('tickets/ticketB1.pdf', options)
    } else {
        res.sendStatus(415)
    }
}