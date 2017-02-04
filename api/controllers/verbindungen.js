'use strict'

// To modell non-functional behavior
// var sleep = require('sleep');

module.exports = {
  getVerbindungen
}

function getVerbindungen (req, res) {
  // console.log('getVerbindungen')

  // sleep.msleep(200); //average response time

  var verbindung1 = {
    verbindungsId: 'RecContext-RC1',
    zugNummer: 'IC 918',
    abfahrtsOrt: 'Bern',
    abfahrtsDatum: '2017-01-14',
    abfahrtsZeit: '20:04',
    ankunftsOrt: 'Thun',
    ankunftsDatum: '2017-02-24',
    ankunftsZeit: '20:22',
    links: [{
      rel: 'Angebot holen',
      href: '/booking/angebote/RecContext-RC1'
    }]
  }
  var verbindung2 = {
    verbindungsId: 'RecContext-RC2',
    zugNummer: 'IC 918',
    abfahrtsOrt: 'Bern',
    abfahrtsDatum: '2017-01-14',
    abfahrtsZeit: '20:34',
    ankunftsOrt: 'Thun',
    ankunftsDatum: '2017-02-24',
    ankunftsZeit: '20:52',
    links: [{
      rel: 'Angebot holen',
      href: '/booking/angebote/RecContext-RC2'
    }]
  }
  var verbindungen = [verbindung1, verbindung2]
  res.json(verbindungen)
}
