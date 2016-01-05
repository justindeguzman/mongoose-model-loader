
/*
 * Module dependencies.
 */

var debug = require('debug')('mongoose-model-loader')
var fs = require('fs')
var mongoose = require('mongoose')
var Schema = mongoose.Schema

/*
 * Model loader.
 */

function loader (path) {
  fs.readdirSync(path).forEach(function (fileName) {
    if (isValidFileName(fileName)) {
      var modelName = getModelName(fileName)
      var model = require(path + '/' + fileName)
      debug('loading model %s', modelName)

      if (!(model instanceof Schema)) {
        model = new Schema(model)
      }

      if (model.name !== 'model') {
        mongoose.model(modelName, model)
      }
    }
  })
}

/*
 * Utility methods.
 */

/*
 * Parses the model name from the file name.
 * @param {string} fileName - The file name to parse
 * @api private
 * @return {string}
 */
function getModelName (fileName) {
  var words = fileName.replace('.js', '').split('-').map(function (word) {
    return upperCaseFirstChar(word)
  })

  return words.join('')
}

/*
 * Upper cases the first character of the word.
 * @param {string} word - The word to uppercase
 * @api private
 * @return {string}
 */
function upperCaseFirstChar (word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

/*
 * Ensures that the file name is valid.
 * @param {string} fileName - The name of the file to check
 * @api private
 * @return {boolean}
 */
function isValidFileName (fileName) {
  // Make sure file name starts with a letter
  var firstChar = fileName.charAt(0)
  if (firstChar.length !== 1 && !firstChar.match(/[a-z]/i)) {
    return false
  }

  // Make sure file name has .js extension
  if (fileName.indexOf('.js') === -1) {
    return false
  }

  return true
}

/*
 * Module exports.
 */

module.exports = loader
