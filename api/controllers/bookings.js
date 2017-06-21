'use strict'

const path = require('path')

module.exports = {
  confirm,
  fulfil,
  cancel,
  refund
}

function confirm (req, res) {
  var bookings = [{
    bookingId: '3001',
    description: 'Trip from Bern to Thun at 14.01.2017 20:04.',
    _links: {
      'self': {
        href: 'bookings/3001'
      },
      'fulfil': {
        title: 'Get ticket in PDF format',
        href: '../api/bookings/3001/fulfil?type=pdf'
      },
      'cancel': {
        title: 'Cancel the booking',
        href: '../api/bookings/3001/cancel'
      },
      'refund': {
        title: 'Refund the booking',
        href: '../api/bookings/3001/refund'
      }
    }
  }]

  res.json(bookings)
}

function fulfil (req, res) {
  if (req.query.type === 'pdf') {
    var options = {
      root: path.join(__dirname, '/../../public/app/components')
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

function refund (req, res) {
  // TODO: Fully specify behaviour
  var bookingId = {
    bookingId: '3001'
  }
  res.json(bookingId)
}
