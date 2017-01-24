'use strict';

module.exports = {
    postVorabbuchungen
};

function postVorabbuchungen(req, res) {
    var buchung = {
        buchungsId: 'B1',
        links: [{
                rel: "Buchungsinformation holen",
                href: "api/buchungen/B1"
            },
            {
                rel: "Billette holen",
                href: "api/billette/B1"
            }
        ]
    }
    res.json(buchung);
}
