'use strict'

module.exports = {
  getBookings
}

function getBookings(req, res) {
  var booking = {
    bookingId: 'B1',
    description: 'Fahrt von Bern nach Thun am 14.01.2017 20:04.',
    links: [{
      rel: 'Billette zur Buchung als PDF holen',
      href: 'bookings/B1/tickets/?type=pdf'
    }, {
      rel: 'Billette zur Buchung als Screenticket holen',
      href: 'bookings/B1/tickets/?type=screen'
    }, {
      rel: 'Buchung annullieren',
      href: 'bookings/B1/cancel'
    }, {
      rel: 'Buchung stornieren',
      href: 'bookings/B1/refund'
    }]
  }

  res.json(booking)
}