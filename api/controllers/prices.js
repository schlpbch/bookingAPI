'use strict'

module.exports = {
  prices,
  tripPrices
}

function tripPrices (req, res) {
  prices(req, res)
}

function prices (req, res) {
  let q = req.query
    if (!(q.tripId === undefined) || !(q.originId === undefined && q.destinationId === undefined) || !(q.date === undefined)) {
      var self = {
          href: req.originalUrl
      }

      var prices = [{
          //TODO: Supersaver aufnehmen
          price: 830,
          links: {
              self,
              offers: {
                  title: "Request offers for a trip.",
                  href: '../api/offers?tripId=VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89QWFyYXVATD04NTAyMTEzQGE9MTI4QCQyMDE3MDgyNzIwMzQkMjAxNzA4MjcyMTEzJElSIDIxODkgJCQxJMKnVCRBPTFATz1BYXJhdUBMPTg1MDIxMTNAYT0xMjhAJEE9MUBPPVrDvHJpY2ggSEJATD04NTAzMDAwQGE9MTI4QCQyMDE3MDgyNzIxMjQkMjAxNzA4MjcyMTUyJElSIDIyODcgJCQxJA==&date=2017-06-14&time=20%3A04'
              }

          }
      }]

      res.json(prices)
  } else {
      let message = 'Either the "tripId" or "originId", "destinationId" and "date" must be defined'
      res.status(400).send(message)
  }
}