# mongoose-model-loader
Load Mongoose models from a directory

## Installation

	$ npm install mongoose-model-loader

## Usage

```js
var loader = require('mongoose-model-loader')
var mongoose = require('mongoose')

// Loads the models from the directory
loader(__dirname + '/models')

// Access models
var MyModel = mongoose.model('MyModel')
var AnotherModel = mongoose.model('AnotherModel')
```