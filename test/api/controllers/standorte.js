'use strict';

var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('standorte', function() {

    describe('GET /standorte', function() {

      it('should return an array', function(done) {

        request(server)
          .get('/standorte/Bern')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.be.an.Array();

            done();
          });
      });

    });

  });

});
