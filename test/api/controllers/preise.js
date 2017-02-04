'use strict'

var request = require('supertest')
var server = require('../../../')

describe('controllers', function () {
  describe('preise', function (done) {
    describe('GET /preise/', function (done) {
      it('should not return an error', function (done) {
        request(server)
          .get('/booking/preise/')
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
