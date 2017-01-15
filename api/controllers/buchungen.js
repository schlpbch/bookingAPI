'use strict';

module.exports = { getBuchungen, deleteBuchungen };

function getBuchungen(req, res) {
  var buchung = {
    'buchungsId': 'B1',
    'beschreibung': 'Fahrt von Bern nach Thun am 14.01.2017 20:04.',
    'links': [
      {
        'rel': "Billette zur Buchung holen",
        'href': "http://localhost:10010/billette/B1"
      },
      {
        'rel': "Buchung annulieren",
        'href': "http://localhost:10010/billette/B1"
      }
    ]
  };
  res.json(buchung);
}

function deleteBuchungen(req, res) {
  // If everything is ok, the canceled booking id is returned.
  var buchungsId = {
    'buchungsId': 'B1'
  };
  res.json(buchungsId);
}
