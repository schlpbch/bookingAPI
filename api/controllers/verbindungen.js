'use strict';

module.exports = { getVerbindungen };

function getVerbindungen(req, res) {
  var verbindung1 = {
    'verbindungsId': 'RecContext-RC1',
    'zugNummer': 'IC 918',
    'abfahrtsOrt': 'Bern',
    'abfahrtsDatum': '2017-01-14',
    'abfahrtsZeit': "20:04",
    'ankunftsOrt': "Thun",
    'ankunftsDatum': '2017-02-24',
    'ankunftsZeit': '20:22',
    'links': [
      {
        'rel': 'Angebot holen',
        'href': 'http://localhost:10010/angebote/RecContext-RC1'
      }
    ]
  };
  var verbindungen = [verbindung1];
  res.json(verbindungen);
}
