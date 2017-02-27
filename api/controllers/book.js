'use strict'

// To modell non-functional behavior
// var sleep = require('sleep');

module.exports = {
  getBook
}

function getBook (req, res) {
  // console.log('getBook')

  // sleep.msleep(200); //average response time

  var booking = {
    bookingId: 'B1',
    description: 'Fahrt von Bern nach Thun am 14.01.2017 20:04.',
    links: [
      {
        rel: 'Billette zur Buchung als PDF holen',
        href: 'booking/B1/tickets/?typ=pdf'
      }, {
        rel: 'Billette zur Buchung als Screenticket holen',
        href: 'booking/B1/tickets/?typ=screen'
      }, {
        rel: 'Buchung annullieren',
        href: 'booking/B1/cancel'
      }, {
        rel: 'Buchung stornieren',
        href: 'booking/B1/refund'
      }
    ]
  }
  res.json(booking)
}
