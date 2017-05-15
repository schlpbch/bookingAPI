'use strict'

module.exports = {
  trips
}

function trips (req, res) {
  // TODO: Get the link concept of webshopB2C fixed
  // - use UIC Codes instead of station names!
  // - strange mix of English and German
  // - add referrerId an app tags

  let webshopB2Curl = 'https://www.sbb.ch/en/buying/pages/fahrplan/fahrplan.xhtml?'

  // TODO: Get the link concept of Mobile fixed
  // - don't use the hafas reconstruction context, makes us stick to Hafas sessions
  // - Add time to query
  // - change fare to reduction concept

  let mobileB2Curl = 'https://apptest.sbbmobile.ch/tripoffer?'

  var trip1 = {
    tripId: 'trip-rec-context1',
    segments: [{
      origin: {
        id: '8507000',
        name: 'Bern',
        date: '2017-06-14',
        time: '20:04'
      },
      destination: {
        id: '8507100',
        name: 'Thun',
        date: '2017-06-14',
        time: '20:22'
      }
    }],
    _links: {
      'self': {
        href: 'trips/trip-rec-context1'
      },
      'prices': {
        title: 'Request the cheapest prices for a trip.',
        href: 'api/prices/trip-rec-context1'
      },
      'offers': {
        title: 'Request offers for a trip.',
        href: 'api/offers?originId=8507000&destinationId=8503000&date=2017-05-01'
      },
      'link2WebshopB2C': {
        title: 'Deep link into Webshop B2C.',
        href: webshopB2Curl + 'suche=true&ab=true&language=en&vias=%5B%22%22%5D&webshopPreviewMode=active&von=Thun&nach=Bern&datum=Sun%2C+14.06.2017&zeit=20%3A04'
      },
      'link2MobileB2C': {
        title: 'Deep link into Mobile App B2C.',
        href: mobileB2Curl + 'recon=T$A=1@O=Bern@L=8507000@a=128@$A=1@O=Thun@L=8507100@a=128@$201706142004$201706142156$&date=2017-06-14'
      }
    }
  }

  // first leg of second trip

  var trip2 = {
    tripId: 'trip-rec-context2',
    segments: [{
      origin: {
        id: '8507000',
        name: 'Bern',
        date: '2017-06-14',
        time: '20:34'
      },
      destination: {
        id: '8507100',
        name: 'Thun',
        date: '2017-06-14',
        time: '20:52'
      }
    }],
    _links: {
      'self': {
        href: 'trips/trip-rec-context2'
      },
      'prices': {
        title: 'Request the cheapest prices for a trip.',
        href: 'api/prices/trip-rec-context2'
      },
      'offers': {
        title: 'Request offers for a trip.',
        href: 'api/offers?originId=8507000&destinationId=8503000&date=2017-05-02'
      },
      'deeplinkWebshopB2C': {
        title: 'Deep link into Webshop B2C.',
        href: webshopB2Curl + 'suche=true&ab=true&language=en&vias=%5B%22%22%5D&webshopPreviewMode=active&von=Thun&nach=Bern&datum=Sun%2C+14.06.2017&zeit=20%3A34'
      },
      'deeplinkMobileB2C': {
        title: 'Deep link into Mobile App B2C.',
        href: mobileB2Curl + 'recon=T$A=1@O=Genève@L=8501008@a=128@$A=1@O=Bern@L=8507000@a=128@$201605161012$201605161156$IR 2517$&date=2017-06-14'
      }
    }
  }

  var trips = [trip1, trip2]
  res.json(trips)
}
