var express = require('express');
var router = express.Router();
const ctrlPosts = require('../controllers/posts')

/* GET users listing. */
function _printPostsList(req, res, postsList) {
  res.render('index', {
    title: 'Blogger-app',
    postsList
  });
}
router.get('/', function(req, res, next) {
  ctrlPosts.postList(req, res, _printPostsList);
});

module.exports = router;
