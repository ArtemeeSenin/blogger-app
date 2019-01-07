var express = require('express');
var router = express.Router();
const ctrlPosts = require('../controllers/posts')

/* GET users listing. */
function _printPostList(req, res, postsList) {
  res.render('index', {
    title: 'Blogger-app',
    postsList
  });
}
function _printPostSingle(req, res, post) {
  res.render('post', post)
}
router.get('/', function(req, res, next) {
  ctrlPosts.postList(req, res, _printPostList);
});
router.get('/posts/:id', function(req, res, next) {
  const id = req.params.id;
  ctrlPosts.postSingle(req, res, id, _printPostSingle);
});
router.get('/add-post', function(req, res) {
  res.render('add-post');
})

module.exports = router;
