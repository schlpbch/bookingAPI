'use strict'

module.exports = {
    putPrebookingUsingPUT
}

function putPrebookingUsingPUT (req, res) {

  var prebooking = {
      "prebookings":[
          {
              "preBookingId":436127127
          }
      ],
      "_links":{
          "book":{
              "href": "../api/bookings?preBookingId=436127127",
              "method":"PUT",
              "contentType":"application/json",
              "body":null
          }
      }
  }

  res.json(prebooking)
}
