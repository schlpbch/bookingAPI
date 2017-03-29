'use strict'

var request = require('supertest')
var server = require('../../../')

describe('controllers', function () {
    describe('Test book prebook 2001', function (done) {
        describe('GET /bookings/confirm', function (done) {
            it('should not return an error', function (done) {
                request(server)
                .get('/bookings/confirm?preBookingId=2001')
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

    describe('Test issue tickets for Booking 3001', function(done) {
        describe('GET /bookings/fulfil/3001', function(done) {
            it('should not return an error', function(done) {
                request(server)
                .get('/bookings/fulfil/3001?type=pdf')
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
        describe('GET /bookings/cancel/3001', function (done) {
            it('should not return an error', function (done) {
                request(server)
                .get('/bookings/cancel/3001')
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
