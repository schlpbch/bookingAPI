'use strict'

var request = require('supertest')
var server = require('../../../')

describe('controllers', function () {

    describe('Test cancel Booking B1', function(done) {
        describe('GET /booking/B1/cancel/', function(done) {
            it('should not return an error', function(done) {
                request(server)
                    .get('/booking/B1/cancel')
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

    describe('Test refund Booking B1', function(done) {
        describe('GET /booking/B1/refund/', function(done) {
            it('should not return an error', function(done) {
                request(server)
                    .get('/booking/B1/refund')
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
