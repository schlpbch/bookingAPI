'use strict';

// To modell non-functional behavior
//var sleep = require('sleep');

module.exports = {
    getPing
};

function getPing(req, res) {
    console.log('getPing');
    res.json('hello');
}
