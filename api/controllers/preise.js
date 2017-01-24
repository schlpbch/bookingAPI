'use strict';

// To modell non-functional behavior
//var sleep = require('sleep');

module.exports = {
    getPreise,
    postPreise
};

function getPreise(req, res) {
    console.log('getPreise');

    //sleep.msleep(500); //average response time

    var preiseDV = {
        angebotsId: 'A1',
        beschreibung: 'Angebot direkter Verkehr',
        preis: 22
    };
    var preiseSparbillett = {
        angebotsId: 'A2',
        beschreibung: 'Angebot Sparbillett',
        preis: 12
    };
    var preise = [angebotDV, angebotSparbillett];
    res.json(angebote);
}


function postpreise(req, res) {
    var vorabbuchung = {
        vorabbuchungsId: 'V1'
    };
    res.json(vorabbuchung);
}
