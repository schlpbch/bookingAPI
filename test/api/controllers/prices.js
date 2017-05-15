'use strict'

var request = require('supertest')
var server = require('../../../')

describe('controllers', function () {
  describe('get prices for originId, destinationId, date, and time', function (done) {
    describe('GET /api/prices', function (done) {
      it('should not return an error', function (done) {
        request(server)
          .get('/api/prices/?originId=8507000&destinationId=8508500&date=2017-01-14&time=20%3A04')
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

describe('controllers', function () {
  describe('get prices for tripId', function (done) {
    describe('GET /api/prices', function (done) {
      it('should not return an error', function (done) {
        request(server)
          .get('/api/prices/?tripId=T1')
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
