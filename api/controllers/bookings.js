'use strict'

const path = require('path')

module.exports = {
    putBookingUsingPUT, getTicketUsingGET, putCancellationUsingPUT
}

function putBookingUsingPUT (req, res) {
  var bookings = {
      "bookingId":305218974,
      "tickets":[
          {
              "ticketId":"5491473",
              "_links":{
                  "fulfil":{
                      "href":"../api/bookings/305218974/tickets/5491473",
                      "method":"GET",
                      "contentType":"application/pdf,text/html,application/pkpass,image/png",
                      "body":null
                  }
              }
          }
      ]
  }

  res.json(bookings)
}

function getTicketUsingGET(req, res) {

    if (req.query.contentType === 'application/pdf') {
        var options = {
            root: path.join(__dirname, '/../../public/app/components')
        }
        res.sendFile('tickets/ticketB1.pdf', options)
    } else {
        console.log("Unsupported content type in mock mode " + req.query)
        res.send("Only PDF ticket is supported")
    }
}

function putCancellationUsingPUT (req, res) {
  var bookingId = {
    bookingId: '3001'
  }
  res.json(bookingId)
}
