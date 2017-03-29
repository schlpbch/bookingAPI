'use strict'

module.exports = {
    offers,
    tripOffers
}

function tripOffers(req, res) {
    offers(req, res)
}

function offers(req, res) {
    var offerDV = {
        offerId: 1001,
        description: 'Angebot direkter Verkehr',
        price: 22,
        qualityOfService: '2nd',
        links: [
            {
                rel: 'Angebot 1001 vorabbuchen',
                href: 'prebookings/prebook?offerId=1001'
            }
        ]
    }
    var offerSparbillett = {
        offerId: 'A2',
        description: 'Angebot Sparbillett',
        price: 12,
        qualityOfService: '2nd',
        links: [
            {
                rel: 'Angebot 1002 vorabbuchen',
                href: 'prebookings/prebook?offerId=1002'
            }
        ]
    }
    var offers = [offerDV, offerSparbillett]
    res.json(offers)
}