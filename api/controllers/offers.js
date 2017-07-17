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
  if (!(q.tripId === undefined) || !(q.originId === undefined && q.destinationId === undefined && q.date === undefined)) {
      let offerDV = {
          offerId: '1001',
          description: 'Offer normal fare',
          price: 1660,
          qualityOfService: '2nd',
          _links: {
              'self': {
                  href: '../api/offers/1001'
              },
              'prebook': {
                  title: 'Book offer',
                  href: '../api/offers/1001/prebook'
              }
          }
      }
      let offerSparbillett = {
          offerId: '1002',
          description: 'Offer super saver fare',
          price: 840,
          qualityOfService: '2nd',
          _links: {
              'self': {
                  href: '../api/offers/1002'
              },
              'prebook': {
                  title: 'Book offer',
                  href: '../api/offers/1002/prebook'
              }
          }
      }
      var offers = [offerDV, offerSparbillett]
      res.json(offers)
  } else {
      let message = 'Either the "tripId" or "originId", "destinationId", "date", and "time" must be defined'
      console.error(message)
      res.status(400).send(message)
  }
}
