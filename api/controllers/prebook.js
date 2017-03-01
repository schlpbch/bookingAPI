'use strict'

// To modell non-functional behavior
// var sleep = require('sleep');

module.exports = {
  getPreBook
}

function getPreBook (req, res) {
  // console.log('getPreBook')

  // sleep.msleep(200); //average response time

  var prebooking = {
    preBookId: 'P1',
    description: 'Fahrt von Bern nach Thun am 14.01.2017 20:04 für 22 CHF',
    links: [
      {
        rel: 'Billette zur Buchung holen',
        href: 'booking/P1/book'
      }
    ]
  }
  res.json(prebooking)
}
