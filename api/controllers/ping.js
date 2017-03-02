'use strict'

module.exports = {
    ping
}

function ping(req, res) {
    res.json('hello')
}