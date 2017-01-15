'use strict';

module.exports = { getAngebote, postAngebote };

function getAngebote(req, res) {
  var angebotDV = {
    'angebotsId': 'A1',
    'beschreibung': 'Angebot direkter Verkehr',
    'preis': 22
  };
  var angebotSparbillett = {
    'angebotsId': 'A2',
    'beschreibung': 'Angebot Sparbillett',
    'preis': 12
  };
  var angebote = [angebotDV, angebotSparbillett];
  res.json(angebote);
}


function postAngebote(req, res) {
  var vorabbuchung = {
    'vorabbuchungsId': 'V1'
  };
  res.json(vorabbuchung);
}
