'use strict';

module.exports = { getBuchungen, deleteBuchungen };

function getBuchungen(req, res) {
  var buchungsId = {
    'buchungsId': 'B3',
    'links': [
      {
        'rel': "Billette für Buchung B3 holen",
        'href': "http://localhost:10010/billette/B3"
      }
    ]
  };
  res.json(buchungsId);
}

function deleteBuchungen(req, res) {
  // If everything is ok, the canceled booking id is returned.
  var buchungsId = {
    'buchungsId': 'B3'
  };
  res.json(buchungsId);
}
