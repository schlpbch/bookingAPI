'use strict'

var request = require('supertest')
var server = require('../../../')

describe('controllers', function () {
  describe('buchungen', function(done) {
    describe('GET /buchungen/', function(done) {
      it('should not return an error', function(done) {
        request(server)
          .get('/booking/buchungen/')
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
})
