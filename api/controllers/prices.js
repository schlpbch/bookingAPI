'use strict'

GLOBAL._ = require('underscore');
const request = require('request')
const querystring = require('querystring')

module.exports = {
    getPricesUsingGET
}

function getPricesUsingGET (req, res) {
  if(GLOBAL.MOCKED) {
    getPricesUsingGETMock(req, res);
  } else {
    let query = querystring.stringify(req.query);

    request({
      headers: {
        'Authorization': 'Bearer ' + GLOBAL.getToken(),
        'X-Conversation-Id': GLOBAL.CONVERSATION_ID,
        'X-Contract-Id': GLOBAL.CONTRACT_ID
      },
      uri: 'https://b2p-int.api.sbb.ch/api/v2/prices?' + query
    }, function (err, response, body) {
      if (!!err) {
        console.log(err)
      }
      res.json(JSON.parse(body))
    });
  }
}

function getPricesUsingGETMock (req, res) {
  let q = req.query
    if (!(q.tripIds === undefined)) {
      var self = {
          href: req.originalUrl
      }

      var prices = [{
          "tripId": "VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89QWFyYXVATD04NTAyMTEzQGE9MTI4QCQyMDE3MDgyNzIwMzQkMjAxNzA4MjcyMTEzJElSIDIxODkgJCQxJMKnVCRBPTFATz1BYXJhdUBMPTg1MDIxMTNAYT0xMjhAJEE9MUBPPVrDvHJpY2ggSEJATD04NTAzMDAwQGE9MTI4QCQyMDE3MDgyNzIxMjQkMjAxNzA4MjcyMTUyJElSIDIyODcgJCQxJA==",
          "qualityOfService": 2,
          "superSaver": false,
          price: 620,
          "_links": {
              "offers": {
                  "method": "GET",
                  "contentType": "application/json",
                  "href": "../api/offers?tripId=VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89QWFyYXVATD04NTAyMTEzQGE9MTI4QCQyMDE3MDgyNzIwMzQkMjAxNzA4MjcyMTEzJElSIDIxODkgJCQxJMKnVCRBPTFATz1BYXJhdUBMPTg1MDIxMTNAYT0xMjhAJEE9MUBPPVrDvHJpY2ggSEJATD04NTAzMDAwQGE9MTI4QCQyMDE3MDgyNzIxMjQkMjAxNzA4MjcyMTUyJElSIDIyODcgJCQxJA==&passengers=${passengerInfos}"
              },
              "offers-mobile": {
                  "method": "GET",
                  "contentType": "text/html",
                  "href": "https://app.sbbmobile.ch/tripoffer?appid=bookingAPI&recon=VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89UGFwaWVybcO8aGxlQEw9ODUwNzA5NkBhPTEyOEAkMjAxNzA4MjcyMDMwJDIwMTcwODI3MjAzNyRTIDcgICAgICQkMSQ=&date=2017-08-27"
              },
              "offers-online": {
                  "method": "GET",
                  "contentType": "text/html",
                  "href": "https://www.sbb.ch/de/kaufen/pages/fahrplan/fahrplan.xhtml?webshopPreviewMode=active&recon=VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89UGFwaWVybcO8aGxlQEw9ODUwNzA5NkBhPTEyOEAkMjAxNzA4MjcyMDMwJDIwMTcwODI3MjAzNyRTIDcgICAgICQkMSQ=&datum=2017-08-27&zeit=2030"
              }
          }
      }, {
          "tripId": "VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89QWFyYXVATD04NTAyMTEzQGE9MTI4QCQyMDE3MDgyNzIwMzQkMjAxNzA4MjcyMTEzJElSIDIxODkgJCQxJMKnVCRBPTFATz1BYXJhdUBMPTg1MDIxMTNAYT0xMjhAJEE9MUBPPVrDvHJpY2ggSEJATD04NTAzMDAwQGE9MTI4QCQyMDE3MDgyNzIxMjQkMjAxNzA4MjcyMTUyJElSIDIyODcgJCQxJA==",
          "qualityOfService": 2,
          "superSaver": true,
          price: 310,
          "_links": {
              "offers": {
                  "method": "GET",
                  "contentType": "application/json",
                  "href": "../api/offers?tripId=VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89QWFyYXVATD04NTAyMTEzQGE9MTI4QCQyMDE3MDgyNzIwMzQkMjAxNzA4MjcyMTEzJElSIDIxODkgJCQxJMKnVCRBPTFATz1BYXJhdUBMPTg1MDIxMTNAYT0xMjhAJEE9MUBPPVrDvHJpY2ggSEJATD04NTAzMDAwQGE9MTI4QCQyMDE3MDgyNzIxMjQkMjAxNzA4MjcyMTUyJElSIDIyODcgJCQxJA==&passengers=${passengerInfos}"
              },
              "offers-mobile": {
                  "method": "GET",
                  "contentType": "text/html",
                  "href": "https://app.sbbmobile.ch/tripoffer?appid=bookingAPI&recon=VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89UGFwaWVybcO8aGxlQEw9ODUwNzA5NkBhPTEyOEAkMjAxNzA4MjcyMDMwJDIwMTcwODI3MjAzNyRTIDcgICAgICQkMSQ=&date=2017-08-27"
              },
              "offers-online": {
                  "method": "GET",
                  "contentType": "text/html",
                  "href": "https://www.sbb.ch/de/kaufen/pages/fahrplan/fahrplan.xhtml?webshopPreviewMode=active&recon=VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89UGFwaWVybcO8aGxlQEw9ODUwNzA5NkBhPTEyOEAkMjAxNzA4MjcyMDMwJDIwMTcwODI3MjAzNyRTIDcgICAgICQkMSQ=&datum=2017-08-27&zeit=2030"
              }
          }
      }]

      res.json(prices)
  } else {
      let message = 'The "tripId" must be defined'
      res.status(400).send(message)
  }
}
