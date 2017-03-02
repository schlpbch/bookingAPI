'use strict'

var request = require('supertest')
var server = require('../../../')

// todo test failing, rest method not implemented
describe('controllers', function() {
  describe('Test issue tickets for Booking B1', function(done) {
    describe('GET /bookings/B1/print', function(done) {
      it('should not return an error', function(done) {
        request(server)
          .get('/bookings/B1/print/?type=pdf')
          .set('Accept', 'application/json')
          .expect('Content-Type', 'application/pdf')
          .expect(200)
          .end(function(err, res) {
            if (err) throw err
            else done()
          })
      })
    })
  })
})