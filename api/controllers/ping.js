'use strict'

module.exports = {
    ping
}

function ping(req, res) {
    var now = new Date()
    res.json('Received ping request on ' + now)
}