'use strict'

const path = require('path')

module.exports = {
  prebook
}

function prebook (req, res) {
  var prebooking = [{
    prebookingId: '2001',
    description: 'Fahrt von Bern nach Thun am 14.01.2017 20:04 für 22 CHF',
    _links: {
      'self': {
        href: 'prebookings/2001'
      },
      'confirm': {
        title: 'Billette zur Buchung holen', href: 'api/prebookings/2001/confirm'
      }
    }
  }]
  res.json(prebooking)
}
