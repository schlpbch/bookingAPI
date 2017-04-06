'use strict'

module.exports = {
  offers,
  tripOffers
}

function tripOffers (req, res) {
  offers(req, res)
}

function offers (req, res) {
  var offerDV = {
    offerId: '1001',
    description: 'Angebot direkter Verkehr',
    price: 22,
    qualityOfService: '2nd',
    _links: {
        'self': {
            href: 'offers/1001'
        }, 'prebook': {
            title: 'Angebot 1001 vorabbuchen', href: 'api/offers/1001/prebook'
        }
    }
  }
  var offerSparbillett = {
    offerId: '1002',
    description: 'Angebot Sparbillett',
    price: 12,
    qualityOfService: '2nd',
    _links: {
        'self': {
            href: 'offers/1002'
        }, 'prebook': {
            title: 'Angebot 1002 vorabbuchen', href: 'api/offers/1002/prebook'
        }
    }
  }
  var offers = [offerDV, offerSparbillett]
  res.json(offers)
}
