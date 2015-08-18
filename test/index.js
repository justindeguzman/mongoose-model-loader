
/* global describe before it */

/*
 * Module dependencies.
 */

var mongoose = require('mongoose')
var loader = require('./../lib')

require('should')

describe('mongoose-model-loader', function () {

  /*
   * Setup.
   */

  before(function () {
    loader(__dirname + '/fixtures/models')
  })

  /*
   * Tests.
   */

  it('should load the User model', function () {
    mongoose.model('User').should.exist
  })

  it('should load a model with ObjectId', function () {
    mongoose.model('Tweet').should.exist
  })

  it('should CamelCaps hyphenated model names', function () {
    mongoose.model('BlogPost').should.exist
  })

  it('should load a model that is of type Schema', function () {
    mongoose.model('Account').should.exist
  })
})
