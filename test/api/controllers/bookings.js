'use strict'

var request = require('supertest')
var server = require('../../../')

describe('controllers', function () {
    /*
  describe('Test book prebook 2001', function (done) {
    describe('PUT /api/bookings', function (done) {
      it('should not return an error', function (done) {
        request(server)
                .put('/api/bookings?preBookingId=2001')
                .set('Accept', 'application/json')
                .set('Accept-Language', 'de')
                .set('X-Conversation-Id', 'aaee8345-966b-49a8-9640-60e0c4354536')
                .set('X-Contract-Id', 'SBB-B2P-1')
                .expect('Content-Type', 'application/json')
                .expect(200)
                .end(function (err, res) {
                  if (err) throw err
                  else done()
                })
      })
    })
  })
    */

  describe('Test issue tickets for booking 3001', function (done) {
    describe('GET /api/bookings/3001/tickets', function (done) {
      it('should not return an error', function (done) {
        request(server)
                .get('/api/bookings/3001/tickets?type=pdf')
                .set('Accept', 'application/json')
                .set('X-Conversation-Id', 'aaee8345-966b-49a8-9640-60e0c4354536')
                .set('X-Contract-Id', 'SBB-B2P-1')
                .expect('Content-Type', 'application/pdf')
                .expect(200)
                .end(function (err, res) {
                  if (err) throw err
                  else done()
                })
      })
    })
  })
})
