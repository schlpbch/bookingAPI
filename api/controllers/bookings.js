'use strict'

const path = require('path')

module.exports = {
    putBookingUsingPUT, getTicketUsingGET, putCancellationUsingPUT
}

function putBookingUsingPUT (req, res) {
  var bookings = [{
    bookingId: '3001',
    "_links": {
      'fulfil-pdf': {
          "method": "GET",
        href: '../api/bookings/3001/tickets?type=pdf'
      },
      'fulfil-png': {
          "method": "GET",
          href: '../api/bookings/3001/tickets?type=png'
      },
      'fulfil-pkpass': {
          "method": "GET",
          href: '../api/bookings/3001/tickets?type=pkpass'
      }
    }
  }]

  res.json(bookings)
}

function getTicketUsingGET (req, res) {
  if (req.query.type === 'pdf') {
    var options = {
      root: path.join(__dirname, '/../../public/app/components')
    }
    res.sendFile('tickets/ticketB1.pdf', options)
  } else {
    res.sendStatus(415)
  }
}

function putCancellationUsingPUT (req, res) {
  var bookingId = {
    bookingId: '3001'
  }
  res.json(bookingId)
}
