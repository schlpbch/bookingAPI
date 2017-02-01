'use strict';

var should = require('should');
var request = require('supertest');
var server = require('../../../');

describe('controllers', function() {
    describe('billette', function() {
        describe('GET /billette/', function() {
            it('should not return an error', function(done) {
                request(server)
                    .get('/billette/')
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
