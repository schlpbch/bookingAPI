'use strict'

var request = require('supertest')
var server = require('../../../')

describe('verbindungen', function () {
  describe('GET /verbindungen/', function (done) {
    it('should not return an error', function (done) {
      request(server)
        .get('/booking/verbindungen/')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json')
        .expect(200)
        .end(function (err, res) {
          if (err) throw err
        })
      done()
    })
  })
})
