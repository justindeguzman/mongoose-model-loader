
/*
 * Module dependencies.
 */

var mongoose = require('mongoose');
var loader = require('./../lib');
var should = require('should');

describe('mongoose-model-loader', function() {

  /*
   * Setup.
   */

  before(function() {
    loader(__dirname + '/models');
  });

  /*
   * Tests.
   */

  it('should load the User model', function() {
    mongoose.model('User').should.exist;
  });

  it('should load a model with ObjectId', function() {
    mongoose.model('Tweet').should.exist;
  });

  it('should CamelCaps hyphenated model names', function() {
    mongoose.model('BlogPost').should.exist;
  });
});
