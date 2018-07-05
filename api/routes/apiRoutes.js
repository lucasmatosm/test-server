'use strict';
module.exports = function(app) {
  var posts = require('../controllers/postListController');
  var comments = require('../controllers/commentListController');

  // todoList Routes
  app.route('/posts')
    .get(posts.list_all_posts)
    .post(posts.create_a_post);


  app.route('/posts/:id')
    .get(posts.read_a_post)
    .put(posts.update_a_post)
    .delete(posts.delete_a_post);

  app.route('/comments')
    .get(comments.list_all_comment)
    .post(comments.create_a_comment);


  app.route('/comments/:id')
    .get(comments.read_a_comment)
    .put(comments.update_a_comment)
    .delete(comments.delete_a_comment);
};