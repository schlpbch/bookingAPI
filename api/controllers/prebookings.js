'use strict'

const path = require('path')

module.exports = {
  prebook
}

function prebook (req, res) {
  var prebooking = {
    preBookId: '2001',
    description: 'Fahrt von Bern nach Thun am 14.01.2017 20:04 für 22 CHF',
    links: [
      {
        rel: 'Billette zur Buchung holen',
        href: 'bookings/confirm?preBookingId=2001'
      }
    ]
  }
  res.json(prebooking)
}
