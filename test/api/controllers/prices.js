'use strict'

var request = require('supertest')
var server = require('../../../')


describe('controllers', function () {
  describe('get prices for tripId', function (done) {
    describe('GET /api/prices', function (done) {
      it('should not return an error', function (done) {
        request(server)
          .get('/api/prices/?tripId=T1')
          .set('Accept', 'application/json')
        .set('X-Conversation-Id', 'aaee8345-966b-49a8-9640-60e0c4354536')
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
