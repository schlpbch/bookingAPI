'use strict'

var request = require('supertest')
var server = require('../../../app')

describe('controllers', function () {
  describe('status', function (done) {
    describe('GET /health/status/', function (done) {
      it('should return the message sent', function (done) {
        request(server)
          .get('/health/status/')
          .set('Accept', 'application/json')
          .expect('Content-Type', 'application/json; charset=utf-8')
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
