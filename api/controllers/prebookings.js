'use strict'

global._ = require('underscore');
const request = require('request')
const uuid = require('uuid/v4')

module.exports = {
  postPrebookingUsingPOST_1
}

function postPrebookingUsingPOST_1 (req, res) {
  global.CONVERSATION_ID = uuid()

  if(global.MOCKED) {
    postPrebookingUsingPOST_1Mock(req, res);
  } else {
    let conversationId = req.headers['x-conversation-id']
    let prebookBody = ''
    req.on('data', chunk => {
      prebookBody += chunk.toString()
    })
    req.on('end', () => {
      request({
        headers: {
          'Authorization': 'Bearer ' + global.getToken(),
          'X-Conversation-Id': conversationId,
          'X-Contract-Id': global.CONTRACT_ID,
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
      })
    })
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
