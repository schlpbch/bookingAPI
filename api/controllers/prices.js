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
    let message = 'Either the "tripId" or "originId", "destinationId", "date" and "time" must be defined'
    res.status(400).send(message)
  } else {
    var self = {
      href: req.originalUrl
    }

    var prices = {
      normalPrices: [830, 1660, 1460, 2920],
      superSaverPrices: [420, 840, 740, 1460],
      _links: {
        self
      }
    }

    res.json(prices)
  }
}
