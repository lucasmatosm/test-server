'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PostSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the name of the post'
  },
});

module.exports = mongoose.model('Posts', PostSchema);