'use strict'

module.exports = {
  trips
}

function trips (req, res) {
  // TODO: trip with multiple segments

  var trip1 = {
    tripId: 'reccon1',
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
    'self': {
      href: constructSelfUrl(trip1)
    },
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
    tripId: 'reccon2',
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
    'self': {
      href: constructSelfUrl(trip2)
    },
    'prices': {
      title: 'Request the cheapest prices for a trip.',
      href: constructPricesUrl(trip2)
    },
    'offers': {
      title: 'Request offers for a trip.',
      href: constructOffersUrl(trip2)
    },
    'offers-online': {
      title: 'Link into web shop B2C.',
      href: 'https://www.sbb.ch/en/buying/pages/fahrplan/fahrplan.xhtml?suche=true&ab=true&language=en&vias=%5B%22%22%5D&webshopPreviewMode=active&von=Bern&nach=Thun&datum=Sun%2C+14.06.2017&zeit=20%3A34'
    },
    'offers-mobile': {
      title: 'Link into mobile app B2C.',
      href: 'https://apptest.sbbmobile.ch/offer?recon=T$A=1@O=Genève@L=8501008@a=128@$A=1@O=Bern@L=8507000@a=128@$201605161012$201605161156$IR 2517$&date=2017-06-14'
    }
  }

  trip2['_links'] = links2

  var trips = [trip1, trip2]
  res.json(trips)
}

// TODO: Refactor into helper class
function constructSelfUrl (trip) {
  let url = '../api/trips?'
  url += 'originId=' + encodeURI(trip.segments[0].origin.id)
  url += '&destinationId=' + encodeURI(trip.segments[0].destination.id)
  url += '&date=' + encodeURI(trip.segments[0].origin.date)
  url += '&time=' + encodeURIComponent(trip.segments[0].origin.time)
  return url
}

function constructPricesUrl (trip) {
  let url = '../api/prices?'
  url += 'originId=' + encodeURI(trip.segments[0].origin.id)
  url += '&destinationId=' + encodeURI(trip.segments[0].destination.id)
  url += '&date=' + encodeURI(trip.segments[0].origin.date)
  url += '&time=' + encodeURIComponent(trip.segments[0].origin.time)
  return url
}

function constructOffersUrl (trip) {
  let url = '../api/offers?'
  url += 'originId=' + encodeURI(trip.segments[0].origin.id)
  url += '&destinationId=' + encodeURI(trip.segments[0].destination.id)
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
  url += 'suche=true&ab=true&language=en&vias=%5B%22%22%5D&webshopPreviewMode=active'
  url += '&von=' + encodeURI(trip.segments[0].origin.name)
  url += '&nach=' + encodeURI(trip.segments[0].destination.name)
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
  url += 'recon=T$A=1@O=Bern@L=8507000@a=128@$A=1@O=Thun@L=8507100@a=128@$201706142004$201706142156$'
  url += '&date=' + encodeURI(trip.segments[0].origin.date)
  return url
}
