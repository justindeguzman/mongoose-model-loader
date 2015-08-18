
/*
 * Module dependencies.
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema

/*
 * Module exports.
 */

module.exports = new Schema({
  message: String,
  userId: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})
