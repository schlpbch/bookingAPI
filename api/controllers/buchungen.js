'use strict';

module.exports = {
    getBuchungen,
    getBuchungenAnnullieren
};

function getBuchungen(req, res) {
    var buchung = {
        'buchungsId': 'B1',
        'beschreibung': 'Fahrt von Bern nach Thun am 14.01.2017 20:04.',
        'links': [{
                'rel': "Billette zur Buchung holen",
                'href': "http://localhost:10010/billette/B1?typ=pdf"
            },
            {
                'rel': "Buchung annullieren",
                'href': "http://localhost:10010/billette/B1/annullieren"
            }
        ]
    };
    res.json(buchung);
}

function getBuchungenAnnullieren(req, res) {
    // If everything is ok, the canceled booking id is returned.
    var buchungsId = {
        'buchungsId': 'B1'
    };
    res.json(buchungsId);
}
