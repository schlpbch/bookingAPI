'use strict'

const path = require('path')

module.exports = {
    print,
    cancel
}

function print(req, res) {
    if (req.query.type === 'pdf') {
        var options = {
            root: path.join(__dirname, '/../../public/app')
        }
        res.sendFile('tickets/ticketB1.pdf', options)
    } else {
        res.sendStatus(415)
    }
}

function cancel(req, res) {
    var bookingId = {
        bookingId: 'B1'
    }
    res.json(bookingId)
}