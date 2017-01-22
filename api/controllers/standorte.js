'use strict';

module.exports = {
    getStandorte
};

function getStandorte(req, res) {
    var standortBernHB = {
        name: 'Bern HB',
        code: '8507000'
    };
    var standortBernRBS = {
        name: 'Bern RBS',
        code: '8508050'
    };
    var standorte = [standortBernHB, standortBernRBS];
    res.json(standorte);
}
