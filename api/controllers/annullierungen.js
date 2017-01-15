'use strict';

module.exports = { getAnnullierungen };

function getAnnullierungen(req, res) {
  res.status(200).send('Buchung annulliert');
}
