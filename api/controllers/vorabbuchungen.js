'use strict';

module.exports = { getVorabbuchungen };

function getVorabbuchungen(req, res) {
  var vorabbuchungsId = {
    'vorabbuchungsId': 'V9',
    'links': [
        {
          'rel': "Vorabbuchung V9 buchen",
          'href': "http://localhost:10010/buchungen/V9"
        }
      ]
  }
  res.json(vorabbuchungsId);
}
