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
                    .expect('Content-Type', 'application/json; charset=utf-8')
                    .expect(200)
                    .end(function (err, res) {
                        if (err) throw err
                        else done()
                    })
            })
        })
    })

    describe('get trip offers', function (done) {
        describe('GET /offers/T1', function (done) {
            it('should not return an error', function (done) {
                request(server)
                    .get('/offers/T1')
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

