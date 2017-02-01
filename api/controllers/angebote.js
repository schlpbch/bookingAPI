'use strict';

// To modell non-functional behavior
//var sleep = require('sleep');

module.exports = {
    getAngebote,
    postAngebote
};

function getAngebote(req, res) {
    console.log('getAngebote');

    //sleep.msleep(500); //average response time

    var angebotDV = {
        angebotsId: 'A1',
        beschreibung: 'Angebot direkter Verkehr',
        preis: 22
    };
    var angebotSparbillett = {
        angebotsId: 'A2',
        beschreibung: 'Angebot Sparbillett',
        preis: 12
    };
    var angebote = [angebotDV, angebotSparbillett];
    res.json(angebote);
}


function postAngebote(req, res) {
    var buchung = {
        buchungsId: 'B1'
    };
    res.json(buchung);
}
