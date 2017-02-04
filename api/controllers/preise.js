'use strict'

// To modell non-functional behavior
// var sleep = require('sleep');

module.exports = {
  getPreise
}

function getPreise (req, res) {
  // console.log('getPreise')

  // sleep.msleep(300); //average response time

  var preisNormal = {
    beschreibung: 'Normalpreis',
    preis: 22
  }
  var preisSparbillett = {
    beschreibung: 'Sparpreis',
    preis: 12
  }
  var preise = [preisNormal, preisSparbillett]
  res.json(preise)
}
