'use strict';

module.exports = { getBillette };

function getBillette(req, res) {
  var billette = {
    'links': [
      {
        'rel': "PDF für Buchung B3 holen",
        'href': "http://localhost:10001/billete/billettB3.pdf"
      }
    ]
  }
  res.json(billette);
}
