'use strict'

// To modell non-functional behavior
// var sleep = require('sleep');

module.exports = {
  getCancel,
  getRefund
}

function getCancel (req, res) {
    // If everything is ok, the canceled booking id is returned.
    var bookingId = {
        bookingId: 'B1'
    }
    res.json(bookingId)
}

function getRefund (req, res) {
    // If everything is ok, the canceled booking id is returned.
    var bookingId = {
        bookingId: 'B1'
    }
    res.json(bookingId)
}