'use strict'

module.exports = {
    status
}

function status(req, res) {
    var now = new Date()
    res.json("{ status: 'ok', date: '" + now + "'}")
}