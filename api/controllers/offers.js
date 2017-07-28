'use strict'

module.exports = {
  offers,
  tripOffers
}

function tripOffers (req, res) {
  offers(req, res)
}

function offers (req, res) {
  let q = req.query
  if (!(q.tripId === undefined) || !(q.originId === undefined) || !(q.date === undefined)) {
      let offerDV = {
          offerId: '1001',
          productId: 125,
          description: 'Offer normal fare',
          price: 1660,
          qualityOfService: '2nd',
          links: {
              'self': {
                  href: '../api/offers/1001'
              }
          },
          "actions": [{
              "class": "prebook",
              "href": "../api/prebookings?offerId=1001",
              "method": "PUT",
              "fields": [
                  {"name": "firstname", "type": "string"},
                  {"name": "lastname", "type": "string"}
              ]
          }]
      }
      let offerSparbillett = {
          offerId: '1002',
          productId: 4004,
          description: 'Offer super saver fare',
          price: 840,
          qualityOfService: '2nd',
          links: {
              'self': {
                  href: '../api/offers/1002'
              }
          },
          "actions": [{
              "class": "prebook",
              "href": "../api/prebookings?offerId=1002",
              "method": "PUT",
              "fields": [
                  {"name": "firstname", "type": "string"},
                  {"name": "lastname", "type": "string"}
              ]
          }]
      }
      var offers = [offerDV, offerSparbillett]
      res.json(offers)
  } else {
      let message = 'Either the "tripId" or "originId" and "date" must be defined'
      console.error(message)
      res.status(400).send(message)
  }
}
