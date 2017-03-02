'use strict'

var request = require('supertest')
var server = require('../../../')

describe('controllers', function () {
  describe('Test book prebook P1', function (done) {
    describe('GET /bookings/P1/book', function (done) {
      it('should not return an error', function (done) {
        request(server)
          .get('/bookings/P1/book')
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
