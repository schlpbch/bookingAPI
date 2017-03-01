'use strict'

// To modell non-functional behavior
// var sleep = require('sleep');

module.exports = {
  getPrices,
  getTripPrices
}

function getTripPrices (req, res) {
  getPrices(req, res)
}

function getPrices (req, res) {
  // console.log('getPrices')

  // sleep.msleep(300); //average response time

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
