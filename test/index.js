
var mongoose = require('mongoose');
var modelLoader = require('./../lib');
modelLoader(__dirname + '/models');
mongoose.model('User');
