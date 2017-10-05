'use strict'

module.exports = {
    getTripsUsingGET_1, getTripsUsingGET
}

function getTripsUsingGET_1 (req, res) {
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
      title: 'Request the cheapest prices for a trip.',
      href: constructPricesUrl(trip1)
    },
    'offers': {
      title: 'Request offers for a trip.',
      href: constructOffersUrl(trip1)
    },
    'offers-online': {
      title: 'Link into web shop B2C.',
      href: constructWebshopB2CUrl(trip1)
    },
    'offers-mobile': {
      title: 'Link into mobile app B2C.',
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
            "href": constructPricesUrl(trip2)
        },
        "offers": {
            "method": "GET",
            "href": constructOffersUrl(trip2)
        },
        "offers-online": {
            "method": "GET",
            "href": constructWebshopB2CUrl(trip2)
        },
        "offers-mobile": {
            "method": "GET",
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
            "href": constructPricesUrl(trip1)
        },
        "offers": {
            "method": "GET",
            "href": constructOffersUrl(trip1)
        },
        "offers-online": {
            "method": "GET",
            "href": constructWebshopB2CUrl(trip1)
        },
        "offers-mobile": {
            "method": "GET",
            "href": constructMobileB2CUrl(trip1)
        }
    }

    trip1['_links'] = links1

    res.json(trip1)
}

function constructPricesUrl (trip) {
  let url = '../api/prices?'
  url += 'tripId=VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89QWFyYXVATD04NTAyMTEzQGE9MTI4QCQyMDE3MDgyNzIwMzQkMjAxNzA4MjcyMTEzJElSIDIxODkgJCQxJMKnVCRBPTFATz1BYXJhdUBMPTg1MDIxMTNAYT0xMjhAJEE9MUBPPVrDvHJpY2ggSEJATD04NTAzMDAwQGE9MTI4QCQyMDE3MDgyNzIxMjQkMjAxNzA4MjcyMTUyJElSIDIyODcgJCQxJA=='
  url += '&date=' + encodeURI(trip.segments[0].origin.date)
  url += '&time=' + encodeURIComponent(trip.segments[0].origin.time)
  return url
}

function constructOffersUrl (trip) {
  let url = '../api/offers?'
  url += 'tripId=VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89QWFyYXVATD04NTAyMTEzQGE9MTI4QCQyMDE3MDgyNzIwMzQkMjAxNzA4MjcyMTEzJElSIDIxODkgJCQxJMKnVCRBPTFATz1BYXJhdUBMPTg1MDIxMTNAYT0xMjhAJEE9MUBPPVrDvHJpY2ggSEJATD04NTAzMDAwQGE9MTI4QCQyMDE3MDgyNzIxMjQkMjAxNzA4MjcyMTUyJElSIDIyODcgJCQxJA=='
  url += '&date=' + encodeURI(trip.segments[0].origin.date)
  url += '&time=' + encodeURIComponent(trip.segments[0].origin.time)
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
  url += '&von=' + encodeURI(trip.segments[0].origin.name)
  url += '&recon=VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89QWFyYXVATD04NTAyMTEzQGE9MTI4QCQyMDE3MDgyNzIwMzQkMjAxNzA4MjcyMTEzJElSIDIxODkgJCQxJMKnVCRBPTFATz1BYXJhdUBMPTg1MDIxMTNAYT0xMjhAJEE9MUBPPVrDvHJpY2ggSEJATD04NTAzMDAwQGE9MTI4QCQyMDE3MDgyNzIxMjQkMjAxNzA4MjcyMTUyJElSIDIyODcgJCQxJA=='
  url += '&datum=' + 'Sun%2C+14.06.2017' // Aargh what a messed up date encoding
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
