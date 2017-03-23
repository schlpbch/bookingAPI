'use strict'

module.exports = {
    offers,
    tripOffers,
    prebook
}

function tripOffers(req, res) {
    offers(req, res)
}

function offers(req, res) {
    var offerDV = {
        offerId: 'A1',
        description: 'Angebot direkter Verkehr',
        price: 22,
        links: [
            {
                rel: 'Angebot A1 vorabbuchen',
                href: 'offers/A1/prebook'
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
                href: 'offers/A2/prebook'
            }
        ]
    }
    var offers = [offerDV, offerSparbillett]
    res.json(offers)
}

function prebook(req, res) {
    var prebooking = {
        preBookId: 'P1',
        description: 'Fahrt von Bern nach Thun am 14.01.2017 20:04 für 22 CHF',
        links: [
            {
                rel: 'Billette zur Buchung holen',
                href: 'prebookings/P1/book'
            }
        ]
    }
    res.json(prebooking)
}