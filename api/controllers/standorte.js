'use strict';

module.exports = {
  getStandorte: getStandorte
};

function getStandorte(req, res) {
  //console.log(req);
  var standortBern = {'name': 'Bern HB', 'code': '8507000'};
  var standorte = [standortBern];
  res.json(standorte);
}
