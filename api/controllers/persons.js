'use strict'

module.exports = {
  persons,
  postPersons
}

function persons (req, res) {
  var person = {
    vorname: 'Elon',
    name: 'Musk',
    geburtsdatum: '1971-06-28',
    ermaessigung: 'halbtax'
  }
  res.json(person)
}

// Das posten von Personen macht eigentlich keinen Sinn, da wir keinen State halten werden.
function postPersons (req, res) {
  var personsId = {
    personsId: 'P1'
  }
  res.json(personsId)
}
