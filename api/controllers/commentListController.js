'use strict';


var mongoose = require('mongoose'),
  Comment = mongoose.model('Comments');

exports.list_all_comment = function(req, res) {
    Comment.find({}, function(err, comment) {
    if (err)
      res.send(err);
    res.json(comment);
  });
};




exports.create_a_comment = function(req, res) {
  var new_comment = new Comment(req.body);
  new_comment.save(function(err, comment) {
    if (err)
      res.send(err);
    res.json(comment);
  });
};


exports.read_a_comment = function(req, res) {
    Comment.findById(req.params.id, function(err, comment) {
    if (err)
      res.send(err);
    res.json(comment);
  });
};

exports.update_a_comment = function(req, res) {
    Comment.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, 
        function(err, comment) {
      if (err)
        res.send(err);
      res.json(comment);
    });
  };
  
  
  exports.delete_a_comment = function(req, res) {
    Comment.remove({
      _id: req.params.id
    }, function(err, comment) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };
  
  
  