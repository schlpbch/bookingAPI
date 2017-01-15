'use strict';

module.exports = { getBuchungen };

function getBuchungen(req, res) {
  var buchungsId = {
    'buchungsId': 'B3',
    'links': [
      {
        'rel': "Billette für Buchung B3 holen",
        'href': "http://localhost:10010/billette/B3"
      },
      {
        'rel': "Buchung B3 annullieren",
        'href': "http://localhost:10010/annullierungen/B3"
      }
    ]
  }
  res.json(buchungsId);
}
