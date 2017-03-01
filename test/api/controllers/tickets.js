'use strict'

var request = require('supertest')
var server = require('../../../')

// todo test failing, rest method not implemented
describe('controllers', function() {
  describe('Test issue tickets for Booking B1', function(done) {
    describe('GET /booking/B1/tickets/', function(done) {
      it('should not return an error', function(done) {
        request(server)
          .get('/booking/B1/tickets/?type=pdf')
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