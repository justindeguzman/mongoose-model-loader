
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = {
    message: String,
    userId: [{ type: Schema.Types.ObjectId, ref: 'User' }]
};
