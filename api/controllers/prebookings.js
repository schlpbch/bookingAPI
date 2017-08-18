'use strict'

module.exports = {
  prebook
}

function prebook (req, res) {
  var prebooking = [{
    prebookingId: '2001',
    links: {
    },
    "actions": [{
        "class": "book",
        "href": "../api/bookings?prebookingId=2001",
        "method": "PUT"
    }]
  }]
  res.json(prebooking)
}
