'use strict'

var request = require('supertest')
var server = require('../../../')

describe('controllers', function () {
  describe('get prices for origin and destination', function (done) {
    describe('GET /prices', function (done) {
      it('should not return an error', function (done) {
        request(server)
          .get('/prices')
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

  describe('get prices for trip id', function (done) {
    describe('GET /prices/T1', function (done) {
      it('should not return an error', function (done) {
        request(server)
          .get('/prices/T1')
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
