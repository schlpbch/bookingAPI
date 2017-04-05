'use strict'

var request = require('supertest')
var server = require('../../../')

describe('controllers', function () {
  describe('trips', function (done) {
    describe('GET /trips', function (done) {
      it('should not return an error', function (done) {
        request(server)
          .get('/trips')
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
