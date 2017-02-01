'use strict';

// To modell non-functional behavior
//var sleep = require('sleep');

module.exports = {
    getBuchung,
    getBuchungAnnullieren
};

function getBuchung(req, res) {
    console.log('getBuchung');

    //sleep.msleep(200); //average response time

    var buchung = {
        buchungsId: 'B1',
        beschreibung: 'Fahrt von Bern nach Thun am 14.01.2017 20:04.',
        links: [{
                rel: "Billette zur Buchung holen",
                href: "billette/B1?typ=pdf"
            },
            {
                rel: "Buchung annullieren",
                href: "billette/B1/annullieren"
            }
        ]
    };
    res.json(buchung);
}

function getBuchungAnnullieren(req, res) {
    // If everything is ok, the canceled booking id is returned.
    var buchungsId = {
        buchungsId: 'B1'
    };
    res.json(buchungsId);
}
