'use strict';

module.exports = {
    postVorabbuchungen
};

function postVorabbuchungen(req, res) {
    var buchung = {
        buchungsId: 'B1',
        links: [{
                rel: "Buchungsinformation holen",
                href: "http://localhost:8080/api/buchungen/B1"
            },
            {
                rel: "Billette holen",
                href: "http://localhost:8080/api/billette/B1"
            }
        ]
    }
    res.json(buchung);
}
