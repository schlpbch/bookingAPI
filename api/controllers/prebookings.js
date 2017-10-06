'use strict'

module.exports = {
    putPrebookingUsingPUT
}

function putPrebookingUsingPUT (req, res) {
  var prebooking = [{
    preBookingId: '2001',
    "_links": {
        "book": {
            "method": "PUT",
            "href": "../api/bookings?preBookingId=2001"
        }
    }
  }]
  res.json(prebooking)
}
