'use strict'

var request = require('supertest')
var server = require('../../../')

describe('controllers', function () {
    describe('Test book prebook P1', function (done) {
        describe('GET /bookings/confirm', function (done) {
            it('should not return an error', function (done) {
                request(server)
                .get('/bookings/confirm?preBookingId=P1')
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

    describe('Test issue tickets for Booking B1', function(done) {
        describe('GET /bookings/fulfil/B1', function(done) {
            it('should not return an error', function(done) {
                request(server)
                .get('/bookings/fulfil/B1?type=pdf')
                .set('Accept', 'application/json')
                .expect('Content-Type', 'application/pdf')
                .expect(200)
                .end(function(err, res) {
                    if (err) throw err
                    else done()
                })
            })
        })
    })

    describe('Test cancel Booking B1', function (done) {
        describe('GET /bookings/cancel/B1', function (done) {
            it('should not return an error', function (done) {
                request(server)
                .get('/bookings/cancel/B1')
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
