'use strict'

const path = require('path')

module.exports = {
  confirm,
  fulfil,
  cancel
}

function confirm (req, res) {
  var booking = {
    bookingId: '3001',
    description: 'Fahrt von Bern nach Thun am 14.01.2017 20:04.',
    links: [{
      rel: 'Billette zur Buchung als PDF holen',
      href: 'bookings/fulfil/3001?type=pdf'
    }, {
      rel: 'Billette zur Buchung als Screenticket holen',
      href: 'bookings/fulfil/3001?type=screen'
    }, {
      rel: 'Buchung annullieren',
      href: 'bookings/cancel/3001'
    }]
  }

  res.json(booking)
}

function fulfil (req, res) {
  if (req.query.type === 'pdf') {
    var options = {
      root: path.join(__dirname, '/../../public/app')
    }
    res.sendFile('tickets/ticketB1.pdf', options)
  } else {
    res.sendStatus(415)
  }
}

function cancel (req, res) {
  var bookingId = {
    bookingId: '3001'
  }
  res.json(bookingId)
}
