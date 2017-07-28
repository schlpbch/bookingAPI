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
    links: {
      'self': {
        href: 'bookings/3001'
      },
      'fulfil-pdf': {
        title: 'Get ticket in PDF format',
        href: '../api/bookings/3001/tickets?type=pdf'
      },
      'fulfil-png': {
          title: 'Get ticket in PDF format',
          href: '../api/bookings/3001/tickets?type=png'
      },
      'fulfil-pkpass': {
          title: 'Get ticket in PDF format',
          href: '../api/bookings/3001/tickets?type=pkpass'
      }
    },
    "actions": [{
        "class": "cancel",
        "href": "../api/cancellations?bookingId=3001",
        "method": "PUT"
    },{
        "class": "refund",
        "href": "../api/refundings?bookingId=3001",
        "method": "PUT"
    }]
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
