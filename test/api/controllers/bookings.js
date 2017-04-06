'use strict'

var request = require('supertest')
var server = require('../../../')

describe('controllers', function () {
  describe('Test book prebook 2001', function (done) {
    describe('GET /api/prebookings/2001/confirm', function (done) {
      it('should not return an error', function (done) {
        request(server)
                .get('/api/prebookings/2001/confirm')
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

  describe('Test issue tickets for Booking 3001', function (done) {
    describe('GET /bookings/3001/fulfil', function (done) {
      it('should not return an error', function (done) {
        request(server)
                .get('/api/bookings/3001/fulfil?type=pdf')
                .set('Accept', 'application/json')
                .expect('Content-Type', 'application/pdf')
                .expect(200)
                .end(function (err, res) {
                  if (err) throw err
                  else done()
                })
      })
    })
  })

  describe('Test cancel Booking B1', function (done) {
    describe('GET /bookings/3001/cancel', function (done) {
      it('should not return an error', function (done) {
        request(server)
                .get('/api/bookings/3001/cancel')
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
