
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function(path) {
    fs.readdirSync(path).forEach(function(fileName) {
        if (isValidFileName(fileName)) {
            var modelName = getModelName(fileName);
            var model = require(path + '/' + fileName);

            mongoose.model(modelName, new Schema(model));
        }
    });
}

function getModelName(fileName) {
    fileName = fileName.replace('.js', '');
    return fileName.charAt(0).toUpperCase() + fileName.slice(1);
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

