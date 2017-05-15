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
  if ((q.tripId === undefined) && (q.originId === undefined || q.destinationId === undefined || q.date === undefined)) {
    let message = 'Either the "tripId" or "originId", "destinationId" and "date" must be defined'
    console.error(message)
    res.status(400).send(message)
  } else {
    let offerDV = {
      offerId: '1001',
      description: 'Offer normal fare',
      price: 22,
      qualityOfService: '2nd',
      _links: {
        'self': {
          href: 'offers/1001'
        },
        'prebook': {
          title: 'Book offer',
          href: 'api/offers/1001/prebook'
        }
      }
    }
    let offerSparbillett = {
      offerId: '1002',
      description: 'Offer super saver fare',
      price: 12,
      qualityOfService: '2nd',
      _links: {
        'self': {
          href: 'offers/1002'
        },
        'prebook': {
          title: 'Book offer',
          href: 'api/offers/1002/prebook'
        }
      }
    }
    var offers = [offerDV, offerSparbillett]
    res.json(offers)
  }
}
