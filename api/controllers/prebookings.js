'use strict'

module.exports = {
  prebook
}

function prebook (req, res) {
  var prebooking = [{
    prebookingId: '2001',
    description: 'Trip from Bern to Thun at 14.06.2017 20:04 for 16.60 CHF',
    links: {
      'self': {
        href: '../api/prebookings/2001'
      }
    },
    "actions": [{
        "class": "confirm",
        "href": "../api/bookings?prebookingId=2001",
        "method": "PUT"
    }]
  }]
  res.json(prebooking)
}
