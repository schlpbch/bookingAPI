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
  if (!(q.tripId === undefined) || !(q.originId === undefined && q.destinationId === undefined && q.date === undefined)) {
      var self = {
          href: req.originalUrl
      }

      var prices = [{
          price: 830,
          _links: {
              self
          }
      }]

      res.json(prices)
  } else {
      let message = 'Either the "tripId" or "originId", "destinationId", "date" and "time" must be defined'
      res.status(400).send(message)
  }
}
