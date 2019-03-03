'use strict'

GLOBAL._ = require('underscore');
const request = require('request')
const path = require('path')

module.exports = {
  postBookingUsingPOST, createB2bSbbInvoiceUsingPOST_1, putBookingUsingPUT, getTicketUsingGET, putCancellationUsingPUT
}

function createB2bSbbInvoiceUsingPOST_1 (req, res) {
  if(GLOBAL.MOCKED) {
    createB2bSbbInvoiceUsingPOST_1Mock(req, res);
  } else {
    let invoiceBody = '';
    req.on('data', chunk => {
      invoiceBody += chunk.toString();
    });
    req.on('end', () => {
      request({
        headers: {
          'Authorization': 'Bearer ' + GLOBAL.getToken(),
          'X-Conversation-Id': GLOBAL.CONVERSATION_ID,
          'X-Contract-Id': GLOBAL.CONTRACT_ID,
          'Content-Type': 'application/json',
          'Content-Length': invoiceBody.length
        },
        uri: 'https://b2p-int.api.sbb.ch/api/v2/payments/b2b/sbb/invoice',
        method: 'POST',
        body: invoiceBody
      }, function (err, response, body) {
        if (!!err) {
          console.log(err)
        }
        res.json(JSON.parse(body))
      });
    });
  }
}

function createB2bSbbInvoiceUsingPOST_1Mock (req, res) {
  res.json({})
}

function putBookingUsingPUT (req, res) {
  postBookingUsingPOST(req, res);
}

function postBookingUsingPOST (req, res) {
  if(GLOBAL.MOCKED) {
    postBookingUsingPOSTMock(req, res);
  } else {
    let bookingBody = '';
    req.on('data', chunk => {
      bookingBody += chunk.toString();
    });
    req.on('end', () => {
      request({
        headers: {
          'Authorization': 'Bearer ' + GLOBAL.getToken(),
          'X-Conversation-Id': GLOBAL.CONVERSATION_ID,
          'X-Contract-Id': GLOBAL.CONTRACT_ID,
          'Content-Type': 'application/json',
          'Accept-Language': 'en',
          'Content-Length': bookingBody.length
        },
        uri: 'https://b2p-int.api.sbb.ch/api/bookings',
        method: 'POST',
        body: bookingBody
      }, function (err, response, body) {
        if (!!err) {
          console.log(err)
        }
        res.json(JSON.parse(body))
      });
    });
  }
}

function postBookingUsingPOSTMock (req, res) {
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
  if(GLOBAL.MOCKED) {
    getTicketUsingGETMock(req, res);
  } else {
    request({
      headers: {
        'Authorization': 'Bearer ' + GLOBAL.getToken(),
        'X-Conversation-Id': GLOBAL.CONVERSATION_ID,
        'X-Contract-Id': GLOBAL.CONTRACT_ID,
        'Accept': req.query.contentType
      },
      uri: 'https://b2p-int.api.sbb.ch/' + req.path
    }, function (err, response, body) {
      if (!!err) {
        console.log(err)
      }
      res.set('Content-Type', req.query.contentType)
      res.send(body)
    });
  }
}

function getTicketUsingGETMock(req, res) {
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
