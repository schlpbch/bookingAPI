'use strict'

var request = require('supertest')
var server = require('../../../')

describe('controllers', function() {
    describe('locations', function(done) {
        describe('GET /locations/', function(done) {
            it('should not return an error', function(done) {
                request(server)
                    .get('/locations/')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', 'application/json')
                    .expect(200)
                    .end(function(err, res) {
                        if (err) throw err
                    })
                done()
            })
        })
    })
})
