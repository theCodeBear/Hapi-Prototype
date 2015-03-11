'use strict';

var expect = require('chai').expect;
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
var server = require('../../server/index');

describe('general', function() {
  describe('get /', function() {
    it('should return 200', function(done) {
      var options = {
        method: 'get',
        url: '/'
      };
      server.inject(options, function(response) {
        expect(response.statusCode).to.equal(200);
        expect(response.payload).to.include('Welcome');
        done();
      });
    });
  });
});