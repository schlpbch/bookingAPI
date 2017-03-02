'use strict'

module.exports = {
    cancel,
    refund
}

function cancel(req, res) {
    var bookingId = {
        bookingId: 'B1'
    }
    res.json(bookingId)
}

function refund(req, res) {
    var bookingId = {
        bookingId: 'B1'
    }
    res.json(bookingId)
}