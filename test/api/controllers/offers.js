'use strict'

var request = require('supertest')
var server = require('../../../')

describe('controllers', function () {
    describe('get offers for origin and destination', function (done) {
        describe('GET /offers/', function (done) {
            it('should not return an error', function (done) {
                request(server)
                    .get('/offers/')
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
    describe('get offers for trip ID', function (done) {
        describe('GET /offers/T1', function (done) {
            it('should not return an error', function (done) {
                request(server)
                    .get('/offers/T1')
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

