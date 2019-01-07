var express = require('express');
var router = express.Router();
const ctrlPosts = require('../controllers/posts')

/* GET home page. */
function _sendPostsList(req, res, postsList) {
  res
    .status(200)
    .json(postsList)
}

router.get('/', function(req, res, next) {
  ctrlPosts.postList(req, res, _sendPostsList);
});

module.exports = router;
