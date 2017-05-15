'use strict'

module.exports = {
  prices,
  tripPrices
}

function tripPrices (req, res) {
  prices(req, res)
}

function prices (req, res) {
  let q = req.query
  if ((q.tripId === undefined) && (q.originId === undefined || q.destinationId === undefined || q.date === undefined)) {
    let message = 'Either the "tripId" or "originId", "destinationId" and "date" must be defined'
    console.error(message)
    res.status(400).send(message)
  } else {
    var self = {
      href: req.originalUrl
    }

    // TODO: Get offers for Normalpries/Sparpreis right
    var search = require('url').parse(req.originalUrl).search
    var personParameters = '&age=42&reduction=half-fare-2nd'
    var offer = {
      href: 'offers/' + search + '&productId=125' + personParameters
    }

    var normalpreis = {
      description: 'Normalpreis',
      price: 22,
      _links: {
        self,
        offer
      }
    }

    offer = {
      href: 'offers/' + search + '&productId=4004' + personParameters
    }

    var sparpreis = {
      description: 'Sparpreis',
      price: 12,
      _links: {
        self,
        offer
      }
    }

    var prices = [normalpreis, sparpreis]
    res.json(prices)
  }
}
