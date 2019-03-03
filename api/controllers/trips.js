'use strict'

GLOBAL._ = require('underscore');
const dateFormat = require('dateformat')
const request = require('request')
const querystring = require('querystring')

module.exports = {
  getTripsUsingGET_1, getTripsUsingGET
}

function getTripsUsingGET_1 (req, res) {
  if(GLOBAL.MOCKED) {
    getTripsUsingGET_1Mock(req, res);
  } else {
    let query = querystring.stringify(req.query);

    request({
      headers: {
        'Authorization': 'Bearer ' + GLOBAL.getToken(),
        'X-Conversation-Id': GLOBAL.CONVERSATION_ID,
        'X-Contract-Id': GLOBAL.CONTRACT_ID
      },
      uri: 'https://b2p-int.api.sbb.ch/api/trips?' + query
    }, function (err, response, body) {
      res.send(body)
    });
  }
}

function getTripsUsingGET_1Mock (req, res) {
  // TODO: trip with multiple segments

  var trip1 = {
    tripId: 'VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89QWFyYXVATD04NTAyMTEzQGE9MTI4QCQyMDE3MDgyNzIwMzQkMjAxNzA4MjcyMTEzJElSIDIxODkgJCQxJMKnVCRBPTFATz1BYXJhdUBMPTg1MDIxMTNAYT0xMjhAJEE9MUBPPVrDvHJpY2ggSEJATD04NTAzMDAwQGE9MTI4QCQyMDE3MDgyNzIxMjQkMjAxNzA4MjcyMTUyJElSIDIyODcgJCQxJA==',
    segments: [{
      origin: {
        id: '8507000',
        name: 'Bern',
        platform: '6',
        date: '2017-06-14',
        time: '20:04'
      },
      destination: {
        id: '8507100',
        name: 'Thun',
        platform: '1',
        date: '2017-06-14',
        time: '20:22'
      }
    }]
  }

  var links1 = {
    'prices': {
      "method": 'GET',
      "contentType": "application/json",
      href: constructPricesUrl(trip1)
    },
    'offers': {
      "method": 'GET',
      "contentType": "application/json",
      href: constructOffersUrl(trip1)
    },
    'offers-online': {
      "method": 'GET',
      "contentType": "text/html",
      href: constructWebshopB2CUrl(trip1)
    },
    'offers-mobile': {
      "method": 'GET',
      "contentType": "text/html",
      href: constructMobileB2CUrl(trip1)
    }
  }

  trip1['_links'] = links1

  var trip2 = {
    tripId: 'VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89QWFyYXVATD04NTAyMTEzQGE9MTI4QCQyMDE3MDgyNzIwMzQkMjAxNzA4MjcyMTEzJElSIDIxODkgJCQxJMKnVCRBPTFATz1BYXJhdUBMPTg1MDIxMTNAYT0xMjhAJEE9MUBPPVrDvHJpY2ggSEJATD04NTAzMDAwQGE9MTI4QCQyMDE3MDgyNzIxMjQkMjAxNzA4MjcyMTUyJElSIDIyODcgJCQxJA==',
    segments: [{
      origin: {
        id: '8507000',
        name: 'Bern',
        platform: '6',
        date: '2017-06-14',
        time: '20:34'
      },
      destination: {
        id: '8507100',
        name: 'Thun',
        platform: '1',
        date: '2017-06-14',
        time: '20:52'
      }
    }]
  }

    var links2 = {
        "prices": {
            "method": "GET",
            "contentType": "application/json",
            "href": constructPricesUrl(trip2)
        },
        "offers": {
            "method": "GET",
            "contentType": "application/json",
            "href": constructOffersUrl(trip2)
        },
        "offers-online": {
            "method": "GET",
            "contentType": "text/html",
            "href": constructWebshopB2CUrl(trip2)
        },
        "offers-mobile": {
            "method": "GET",
            "contentType": "text/html",
            "href": constructMobileB2CUrl(trip2)
        }
    }

  trip2['_links'] = links2

  var trips = [trip1, trip2]
  res.json(trips)
}

function getTripsUsingGET (req, res) {
    // TODO: trip with multiple segments

    var trip1 = {
        tripId: 'VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89QWFyYXVATD04NTAyMTEzQGE9MTI4QCQyMDE3MDgyNzIwMzQkMjAxNzA4MjcyMTEzJElSIDIxODkgJCQxJMKnVCRBPTFATz1BYXJhdUBMPTg1MDIxMTNAYT0xMjhAJEE9MUBPPVrDvHJpY2ggSEJATD04NTAzMDAwQGE9MTI4QCQyMDE3MDgyNzIxMjQkMjAxNzA4MjcyMTUyJElSIDIyODcgJCQxJA==',
        segments: [{
            origin: {
                id: '8507000',
                name: 'Bern',
                platform: '6',
                date: '2017-06-14',
                time: '20:04'
            },
            destination: {
                id: '8507100',
                name: 'Thun',
                platform: '1',
                date: '2017-06-14',
                time: '20:22'
            }
        }]
    }

    var links1 = {
        "prices": {
            "method": "GET",
            "contentType": "application/json",
            "href": constructPricesUrl(trip1)
        },
        "offers": {
            "method": "GET",
            "contentType": "application/json",
            "href": constructOffersUrl(trip1)
        },
        "offers-online": {
            "method": "GET",
            "contentType": "text/html",
            "href": constructWebshopB2CUrl(trip1)
        },
        "offers-mobile": {
            "method": "GET",
            "contentType": "text/html",
            "href": constructMobileB2CUrl(trip1)
        }
    }

    trip1['_links'] = links1

    res.json(trip1)
}

function constructPricesUrl (trip) {
  let url = '../api/prices?'
  url += 'tripId=VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89QWFyYXVATD04NTAyMTEzQGE9MTI4QCQyMDE3MDgyNzIwMzQkMjAxNzA4MjcyMTEzJElSIDIxODkgJCQxJMKnVCRBPTFATz1BYXJhdUBMPTg1MDIxMTNAYT0xMjhAJEE9MUBPPVrDvHJpY2ggSEJATD04NTAzMDAwQGE9MTI4QCQyMDE3MDgyNzIxMjQkMjAxNzA4MjcyMTUyJElSIDIyODcgJCQxJA=='
  return url
}

function constructOffersUrl (trip) {
  let url = '../api/offers?'
  url += 'tripId=VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89QWFyYXVATD04NTAyMTEzQGE9MTI4QCQyMDE3MDgyNzIwMzQkMjAxNzA4MjcyMTEzJElSIDIxODkgJCQxJMKnVCRBPTFATz1BYXJhdUBMPTg1MDIxMTNAYT0xMjhAJEE9MUBPPVrDvHJpY2ggSEJATD04NTAzMDAwQGE9MTI4QCQyMDE3MDgyNzIxMjQkMjAxNzA4MjcyMTUyJElSIDIyODcgJCQxJA=='
  url += '&passengers=${passengerInfos}"'
  return url
}

function constructWebshopB2CUrl (trip) {
  // TODO: Get the link concept of webshopB2C fixed
  // - use UIC Codes instead of station names!
  // - strange mix of English and German
  // - use a proper date encoding!
  // - use a proper time encoding!
  // - add referrerId and app tags

  let url = 'https://www.sbb.ch/en/buying/pages/fahrplan/fahrplan.xhtml?'
  url += 'webshopPreviewMode=active'
  url += '&recon=VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89QWFyYXVATD04NTAyMTEzQGE9MTI4QCQyMDE3MDgyNzIwMzQkMjAxNzA4MjcyMTEzJElSIDIxODkgJCQxJMKnVCRBPTFATz1BYXJhdUBMPTg1MDIxMTNAYT0xMjhAJEE9MUBPPVrDvHJpY2ggSEJATD04NTAzMDAwQGE9MTI4QCQyMDE3MDgyNzIxMjQkMjAxNzA4MjcyMTUyJElSIDIyODcgJCQxJA=='
  url += '&datum=' + encodeURIComponent(dateFormat(trip.segments[0].origin.date, 'dd.mm.yyyy'))
  url += '&zeit=' + encodeURIComponent(trip.segments[0].origin.time)
  return url
}

function constructMobileB2CUrl (trip) {
  // TODO: Get the link concept of Mobile fixed
  // - don't use the hafas reconstruction context, makes us stick to Hafas sessions
  // - Add time to query
  // - change fare to reduction concept

  let url = 'https://apptest.sbbmobile.ch/offer?'
  // TODO: Figure out how to construct a reconstruction context
  url += 'recon=VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89QWFyYXVATD04NTAyMTEzQGE9MTI4QCQyMDE3MDgyNzIwMzQkMjAxNzA4MjcyMTEzJElSIDIxODkgJCQxJMKnVCRBPTFATz1BYXJhdUBMPTg1MDIxMTNAYT0xMjhAJEE9MUBPPVrDvHJpY2ggSEJATD04NTAzMDAwQGE9MTI4QCQyMDE3MDgyNzIxMjQkMjAxNzA4MjcyMTUyJElSIDIyODcgJCQxJA=='
  url += '&date=' + encodeURI(trip.segments[0].origin.date)
  return url
}
