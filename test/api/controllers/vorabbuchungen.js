'use strict';

var should = require('should');
var request = require('supertest');
var server = require('../../../');

describe('controllers', function() {
    describe('vorabbuchungen', function() {
        describe('GET /api/vorabbuchungen/', function() {
            it('should not return an error', function(done) {
                request(server)
                    .get('api/vorabbuchungen/')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', 'application/json')
                    .expect(200)
                    .end(function(err, res) {
                        done();
                    });
            });
        });
    });
})
