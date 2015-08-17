
var debug = require('debug')('mongoose-model-loader');
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function(path) {
    fs.readdirSync(path).forEach(function(fileName) {
        if (isValidFileName(fileName)) {
            var modelName = getModelName(fileName);
            var model = require(path + '/' + fileName);
            debug('loading model %s', modelName);
            mongoose.model(modelName, new Schema(model));
        }
    });
}

function getModelName(fileName) {
    var words = fileName.replace('.js', '').split('-').map(function(word) {
        return upperCaseFirstChar(word);
    });

    return words.join('');
}

function upperCaseFirstChar(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function isValidFileName(fileName) {
    // Make sure file name starts with a letter
    var firstChar = fileName.charAt(0);
    if (firstChar.length !== 1 && !firstChar.match(/[a-z]/i)) {
        return false;
    }

    // Make sure file name has .js extension
    if (fileName.indexOf('.js') === -1) {
        return false;
    }

    return true;
}

