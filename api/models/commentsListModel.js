'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CommentSchema = new Schema({
  body: {
    type: String,
    required: 'Kindly enter the name of the post'
  },
  postId: {
    type: String,
    required: 'Kindly enter the name of the post'
  },

});

module.exports = mongoose.model('Comments', CommentSchema);