'use strict'

module.exports = {
    getOffersUsingGET
}

function getOffersUsingGET (req, res) {
  let q = req.query
  if (!(q.tripId === undefined) || !(q.originId === undefined) || !(q.date === undefined)) {
      let offerDV = {
          "totalPrice":1660,
          "qualityOfService":2,
          "offers":[{
              offerId: '1001',
              productId: 125,
              "title": "Individual Ticket: Bern-Papiermühle",
              "description": ".\tIn addition to the journey between the selected place of departure and the destination, the City-Ticket also includes a Day Pass for local traffic (tram, bus, S-Bahn) at the place of departure and/or the destination.\n\n.\tPeriod of validity: 1 calendar day until 05:00 a.m. the following day.\n\n.\tReduced fare with Half-Fare travelcard, children from their 6th to their 16th birthday, dogs (always in 2nd class).",
              price: 1660,
              "passengerId": "paxa",
              "qualityOfService": 2,
              "validityArea": null
          }],
          _links: {
              "prebook": {
                  "method": "PUT",
                  "contentType": "application/json",
                  "href": "../api/prebookings",
                  "body":"[{\"offerId\":1001,\"passenger\":{\"id\":\"paxa\",\"firstname\":\"${firstname}\",\"lastname\":\"${lastname}\",\"dateOfBirth\":\"1970-01-01\"}}]"
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

      }

      let offerCity = {
          "totalPrice":1660,
          "qualityOfService":2,
          "offers":[{
              offerId: '1002',
              productId: 4092,
              "title": "City-Ticket: Bern-Papiermühle",
              "description": ".\tIn addition to the journey between the selected place of departure and the destination, the City-Ticket also includes a Day Pass for local traffic (tram, bus, S-Bahn) at the place of departure and/or the destination.\n\n.\tPeriod of validity: 1 calendar day until 05:00 a.m. the following day.\n\n.\tReduced fare with Half-Fare travelcard, children from their 6th to their 16th birthday, dogs (always in 2nd class).",
              price: 2040,
              "passengerId": "paxa",
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
              }
          }],
          _links: {
              "prebook": {
                  "method": "PUT",
                  "contentType": "application/json",
                  "href": "../api/prebookings",
                  "body":"[{\"offerId\":1002,\"passenger\":{\"id\":\"paxa\",\"firstname\":\"${firstname}\",\"lastname\":\"${lastname}\",\"dateOfBirth\":\"1970-01-01\"}}]"
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

      }

      var offers = [offerDV, offerCity]
      res.json(offers)
  } else {
      let message = 'Either the "tripId" or "originId" and "date" must be defined'
      console.error(message)
      res.status(400).send(message)
  }
}
