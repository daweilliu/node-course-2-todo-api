var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://daweilliu:test123@ds163826.mlab.com:63826/todoapp');

module.exports ={mongoose}