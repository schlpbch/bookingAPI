'use strict'

GLOBAL._ = require('underscore');
const request = require('request')
const uuid = require('uuid/v4')

module.exports = {
  postPrebookingUsingPOST_1
}

function postPrebookingUsingPOST_1 (req, res) {
  GLOBAL.CONVERSATION_ID = uuid()

  if(GLOBAL.MOCKED) {
    postPrebookingUsingPOST_1Mock(req, res);
  } else {
    let prebookBody = '';
    req.on('data', chunk => {
      prebookBody += chunk.toString();
    });
    req.on('end', () => {
      request({
        headers: {
          'Authorization': 'Bearer ' + GLOBAL.getToken(),
          'X-Conversation-Id': GLOBAL.CONVERSATION_ID,
          'X-Contract-Id': GLOBAL.CONTRACT_ID,
          'Content-Type': 'application/json',
          'Content-Length': prebookBody.length
        },
        uri: 'https://b2p-int.api.sbb.ch/api/v2/prebookings',
        method: 'POST',
        body: prebookBody
      }, function (err, response, body) {
        if (!!err) {
          console.log(err)
        }
        res.json(JSON.parse(body))
      });
    });
  }
}

function postPrebookingUsingPOST_1Mock (req, res) {

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
