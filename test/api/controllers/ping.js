'use strict'

var request = require('supertest')
var server = require('../../../app')

describe('controllers', function () {
  describe('ping', function (done) {
    describe('GET /ping/{message}', function (done) {
      it('should return the message sent', function (done) {
        request(server)
          .get('/booking/ping/:hello')
          .set('Accept', 'application/json')
          .expect('Content-Type', 'application/json')
          .expect('hello')
          .end(function (err, res) {
            if (err) throw err
          })
        done()
      })
    })
  })
})
