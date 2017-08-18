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
    links: {
      'fulfil-pdf': {
        href: '../api/bookings/3001/tickets?type=pdf'
      },
      'fulfil-png': {
          href: '../api/bookings/3001/tickets?type=png'
      },
      'fulfil-pkpass': {
          href: '../api/bookings/3001/tickets?type=pkpass'
      }
    },
    "actions": []
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
