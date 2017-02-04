'use strict'

const path = require('path')

module.exports = {
  getBillette
}

function getBillette (req, res) {
  if (req.query.typ === 'pdf') {
    var options = {
      root: path.join(__dirname, '/../../public/app')
    }
    res.sendFile('billette/billettB1.pdf', options)
  } else {
    res.sendStatus(415)
  }
}
