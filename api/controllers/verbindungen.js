'use strict';

// To modell non-functional behavior
//var sleep = require('sleep');

module.exports = {
    getVerbindungen
};

function getVerbindungen(req, res) {
    console.log('getVerbindungen');

    //sleep.msleep(200); //average response time

    var verbindung1 = {
        verbindungsId: 'RecContext-RC1',
        zugNummer: 'IC 918',
        abfahrtsOrt: 'Bern',
        abfahrtsDatum: '2017-01-14',
        abfahrtsZeit: "20:04",
        ankunftsOrt: "Thun",
        ankunftsDatum: '2017-01-14',
        ankunftsZeit: '20:22',
        links: [{
            rel: 'Angebot holen',
            href: 'http://localhost:8080/api/angebote/RecContext-RC1'
        }]
    };
    var verbindung2 = {
        verbindungsId: 'RecContext-RC1',
        zugNummer: 'IC 918',
        abfahrtsOrt: 'Bern',
        abfahrtsDatum: '2017-01-14',
        abfahrtsZeit: "20:34",
        ankunftsOrt: "Thun",
        ankunftsDatum: '2017-01-14',
        ankunftsZeit: '20:52',
        links: [{
            rel: 'Angebot holen',
            href: 'http://localhost:8080/api/angebote/RecContext-RC1'
        }]
    };
    var verbindung3 = {
        verbindungsId: 'RecContext-RC1',
        zugNummer: 'IC 918',
        abfahrtsOrt: 'Bern',
        abfahrtsDatum: '2017-01-14',
        abfahrtsZeit: "20:02",
        ankunftsOrt: "Zurich",
        ankunftsDatum: '2017-01-14',
        ankunftsZeit: '20:56',
        links: [{
            rel: 'Angebot holen',
            href: 'http://localhost:8080/api/angebote/RecContext-RC1'
        }]
    };
    var verbindungen = [verbindung1, verbindung2, verbindung3];
    res.json(verbindungen);
}
