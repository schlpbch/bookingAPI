'use strict'

module.exports = {
  prices,
  tripPrices
}

function tripPrices (req, res) {
  prices(req, res)
}

function prices (req, res) {
  var self = {
    href: req.originalUrl
  }

  // TODO: Get offers for Normalpries/Sparpreis right
  var search = require('url').parse(req.originalUrl).search
  var personParameters = '&age=42&reduction=halffare'
  var offer = {
    href: '/offers/' + search + '&productId=125' + personParameters
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
    href: '/offers/' + search + '&productId=4004' + personParameters
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
