
/*
 * Module dependencies.
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema

/*
 * Module exports.
 */

module.exports = {
  message: String,
  userId: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}
