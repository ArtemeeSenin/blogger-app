var express = require('express');
var router = express.Router();
const ctrlPosts = require('../controllers/posts')

/* GET home page. */
function _sendPostsList(req, res, postsList) {
  res
    .status(200)
    .json(postsList)
}

function _sendPost(req, res, post){
  res
    .status(200)
    .json(post)
}

router.get('/posts', function(req, res, next) {
  ctrlPosts.postList(req, res, _sendPostsList);
});

router.post('/posts', function(req, res, next) {
  const postData = {
    title: req.body.title,
    categories: req.body.categories,
    content: req.body.content
  }
  ctrlPosts.addPost(req, res, postData, _sendPost);
})
router.get('/posts/:id', function(req, res, next) {
  const id = req.params.id;
  ctrlPosts.postSingle(req, res, id, _sendPost);
})
router.delete('/posts/:id', function(req, res, next) {
  const id = req.params.id;
  ctrlPosts.removePost(req, res, id, _sendPost);
})
module.exports = router;
