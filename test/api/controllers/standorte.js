'use strict'

var request = require('supertest')
var server = require('../../../')

describe('controllers', function () {
  describe('standorte', function (done) {
    describe('GET /standorte/', function (done) {
      it('should not return an error', function (done) {
        request(server)
          .get('/booking/standorte/')
          .set('Accept', 'application/json')
          .expect('Content-Type', 'application/json')
          .expect(200)
          .end(function (err, res) {
            if (err) throw err
          })
        done()
      })
    })
  })
})
