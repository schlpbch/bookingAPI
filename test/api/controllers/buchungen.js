'use strict';

var should = require('should');
var request = require('supertest');
var server = require('../../../');

describe('controllers', function() {
    describe('buchungen', function() {
        describe('GET /buchungen/', function() {
            it('should not return an error', function(done) {
                request(server)
                    .get('/buchungen/')
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
