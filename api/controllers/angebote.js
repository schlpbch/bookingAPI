'use strict';

module.exports = { getAngebote, postAngebote };

function getAngebote(req, res) {
  //console.log(req);
  var angebotDV = {
    'angebotsId': 'A1',
    'beschreibung': 'Angebot direkter Verkehr',
    'preis': 22,
    'links': [
      {
        'rel': "Angebot 1 buchen",
        'href': '"http://localhost:10010/vorabbuchungen/A1'
      }
    ]
  };
  var angebotSparbillett = {
    'angebotsId': 'A2',
    'beschreibung': 'Angebot Sparbillett',
    'preis': 12,
    'links': [
      {
        'rel': "Angebot 2 buchen",
        'href': "http://localhost:10010/vorabbuchungen/A2"
      }
    ]
  };
  var angebote = [angebotDV, angebotSparbillett];
  res.json(angebote);
}


function postAngebote(req, res) {
  //console.log(req);
  var angebotDV = {
    'angebotsId': 'A1',
    'beschreibung': 'Angebot direkter Verkehr',
    'preis': 22,
    'links': [
      {
        'rel': "Angebot 1 buchen",
        'href': '"http://localhost:10010/vorabbuchungen/A1'
      }
    ]
  };
  var angebotSparbillett = {
    'angebotsId': 'A2',
    'beschreibung': 'Angebot Sparbillett',
    'preis': 12,
    'links': [
      {
        'rel': "Angebot 2 buchen",
        'href': "http://localhost:10010/vorabbuchungen/A2"
      }
    ]
  };
  var angebote = [angebotDV, angebotSparbillett];
  res.json(angebote);
}
