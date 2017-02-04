'use strict'

module.exports = {
  getPersonen,
  postPersonen
}

// TODO: Think about sensible links

function getPersonen (req, res) {
  var person = {
    vorname: 'Elon',
    name: 'Musk',
    geburtsdatum: '1971-06-28',
    ermaessigung: 'halbtax'
  }
  res.json(person)
}

function postPersonen (req, res) {
  var personsId = {
    personsId: 'P1'
  }
  res.json(personsId)
}
