'use strict'

// To modell non-functional behavior
// var sleep = require('sleep');

module.exports = {
  getOffers,
  getTripOffers
}

function getTripOffers (req, res) {
  getOffers(req, res)
}

function getOffers (req, res) {
  // console.log('getOffers')

  // sleep.msleep(500); //average response time

  var offerDV = {
    offerId: 'A1',
    description: 'Angebot direkter Verkehr',
    price: 22,
    links: [
      {
        rel: 'Angebot A1 vorabbuchen',
        href: 'booking/A1/prebook'
      }
    ]
  }
  var offerSparbillett = {
    offerId: 'A2',
    description: 'Angebot Sparbillett',
    price: 12,
    links: [
      {
        rel: 'Angebot A2 vorabbuchen',
        href: 'booking/A2/prebook'
      }
    ]
  }
  var offers = [offerDV, offerSparbillett]
  res.json(offers)
}