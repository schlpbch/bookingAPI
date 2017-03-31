'use strict'

module.exports = {
  prices,
  tripPrices
}

function tripPrices (req, res) {
  prices(req, res)
}

function prices (req, res) {
  var normal = {
    description: 'Normalpreis',
    price: 22
  }
  var spar = {
    description: 'Sparpreis',
    price: 12
  }
  var prices = [normal, spar]
  res.json(prices)
}
