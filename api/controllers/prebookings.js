'use strict'

module.exports = {
  prebook
}

function prebook (req, res) {
  var prebooking = [{
    prebookingId: '2001',
    description: 'Trip from Bern to Thun at 14.06.2017 20:04 for 22 CHF',
    _links: {
      'self': {
        href: 'prebookings/2001'
      },
      'confirm': {
        title: 'Confirm prebooking',
        href: 'api/prebookings/2001/confirm'
      }
    }
  }]
  res.json(prebooking)
}
