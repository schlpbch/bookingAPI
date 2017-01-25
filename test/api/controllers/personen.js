'use strict';

var should = require('should');
var request = require('supertest');
var server = require('../../../');

describe('controllers', function() {
    describe('personen', function() {
        describe('GET /api/personen/', function() {
            it('should not return an error', function(done) {
                request(server)
                    .get('api/personen/')
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
