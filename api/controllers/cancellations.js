'use strict'

module.exports = {
    cancel
}

function cancel(req, res) {
    var bookingId = {
        bookingId: 'B1'
    }
    res.json(bookingId)
}