'use strict';

module.exports = { postVorabbuchungen };

function postVorabbuchungen(req, res) {
  var buchung = {
    'buchungsId': 'B1',
    'links': [
        {
          'rel': "Buchungsinformation holen",
          'href': "http://localhost:10010/buchungen/B1"
        },
        {
          'rel': "Billette holen",
          'href': "http://localhost:10010/billette/B1"
        }
      ]
  }
  res.json(buchung);
}
