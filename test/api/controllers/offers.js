'use strict'

var request = require('supertest')
var server = require('../../../')

describe('controllers', function () {
  describe('get offers for trip', function (done) {
    describe('GET /api/offers', function (done) {
      it('should not return an error', function (done) {
        request(server)
                .get('/api/offers?tripId=T1')
                .set('Accept', 'application/json')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(200)
                .end(function (err, res) {
                  if (err) {
                    throw err
                  } else {
                    done()
                  }
                })
      })
    })
  })
})

describe('controllers', function () {
  describe('get offers for originId, destinationId, date, and time', function (done) {
    describe('GET /api/offers', function (done) {
      it('should not return an error', function (done) {
        request(server)
                .get('/api/offers?originId=8507000&destinationId=8508500&date=2017-01-14&time=20%3A04')
                .set('Accept', 'application/json')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(200)
                .end(function (err, res) {
                  if (err) {
                    throw err
                  } else {
                    done()
                  }
                })
      })
    })
  })
})
