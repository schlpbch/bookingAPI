'use strict'

var request = require('supertest')
var server = require('../../../')

describe('controllers', function () {
  describe('Test cancel Booking B1', function (done) {
    describe('GET /cancellations/B1/cancel', function (done) {
      it('should not return an error', function (done) {
        request(server)
          .get('/cancellations/B1/cancel')
          .set('Accept', 'application/json')
          .expect('Content-Type', 'application/json; charset=utf-8')
          .expect(200)
          .end(function (err, res) {
            if (err) throw err
            else done()
          })
      })
    })
  })
})
