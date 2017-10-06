'use strict'

module.exports = {
    getOffersUsingGET
}

function getOffersUsingGET (req, res) {
  let q = req.query
  if (!(q.tripId === undefined) || !(q.originId === undefined) || !(q.date === undefined)) {
      let offerDV = {
          offerId: '1001',
          productId: 125,
          "title": "City-Ticket: Bern-Papiermühle 2nd",
          "description": ".\tIn addition to the journey between the selected place of departure and the destination, the City-Ticket also includes a Day Pass for local traffic (tram, bus, S-Bahn) at the place of departure and/or the destination.\n\n.\tPeriod of validity: 1 calendar day until 05:00 a.m. the following day.\n\n.\tReduced fare with Half-Fare travelcard, children from their 6th to their 16th birthday, dogs (always in 2nd class).",
          price: 1660,
          "qualityOfService": 2,
          "validityArea": null,
          _links: {
              "prebook": {
                  "method": "PUT",
                  "href": "../api/prebookings?offerId=1001"
              },
              "offers-mobile": {
                  "method": "GET",
                  "href": "https://app.sbbmobile.ch/tripoffer?appid=bookingAPI&recon=VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89UGFwaWVybcO8aGxlQEw9ODUwNzA5NkBhPTEyOEAkMjAxNzA4MjcyMDMwJDIwMTcwODI3MjAzNyRTIDcgICAgICQkMSQ=&date=2017-08-27"
              },
              "offers-online": {
                  "method": "GET",
                  "href": "https://www.sbb.ch/de/kaufen/pages/fahrplan/fahrplan.xhtml?webshopPreviewMode=active&recon=VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89UGFwaWVybcO8aGxlQEw9ODUwNzA5NkBhPTEyOEAkMjAxNzA4MjcyMDMwJDIwMTcwODI3MjAzNyRTIDcgICAgICQkMSQ=&datum=2017-08-27&zeit=2030"
              }
          }
      }
      let offerCity = {
          offerId: '1002',
          productId: 4092,
          "title": "City-Ticket: Bern-Papiermühle 2nd",
          "description": ".\tIn addition to the journey between the selected place of departure and the destination, the City-Ticket also includes a Day Pass for local traffic (tram, bus, S-Bahn) at the place of departure and/or the destination.\n\n.\tPeriod of validity: 1 calendar day until 05:00 a.m. the following day.\n\n.\tReduced fare with Half-Fare travelcard, children from their 6th to their 16th birthday, dogs (always in 2nd class).",
          price: 2040,
          "qualityOfService": 2,
          "validityArea": {
              "leadingArea": {
                  "areaName": "Tarifverbund BE-SO, Libero",
                  "areaCode": 470,
                  "zoneCodes": [
                      "100",
                      "101"
                  ]
              },
              "tailingArea": null
          },
          _links: {
              "prebook": {
                  "method": "PUT",
                  "href": "../api/prebookings?offerId=1002"
              },
              "offers-mobile": {
                  "method": "GET",
                  "href": "https://app.sbbmobile.ch/tripoffer?appid=bookingAPI&recon=VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89UGFwaWVybcO8aGxlQEw9ODUwNzA5NkBhPTEyOEAkMjAxNzA4MjcyMDMwJDIwMTcwODI3MjAzNyRTIDcgICAgICQkMSQ=&date=2017-08-27"
              },
              "offers-online": {
                  "method": "GET",
                  "href": "https://www.sbb.ch/de/kaufen/pages/fahrplan/fahrplan.xhtml?webshopPreviewMode=active&recon=VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89UGFwaWVybcO8aGxlQEw9ODUwNzA5NkBhPTEyOEAkMjAxNzA4MjcyMDMwJDIwMTcwODI3MjAzNyRTIDcgICAgICQkMSQ=&datum=2017-08-27&zeit=2030"
              }
          }
      }
      var offers = [offerDV, offerCity]
      res.json(offers)
  } else {
      let message = 'Either the "tripId" or "originId" and "date" must be defined'
      console.error(message)
      res.status(400).send(message)
  }
}
