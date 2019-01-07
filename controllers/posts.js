const mongoose = require('mongoose');
require('../models/db');

const Post = mongoose.model('Post');

module.exports.postList = function(req, res, cb) {
    Post
        .find()
        .then(function(doc) {
            cb(req, res, doc);
        })
        .catch(function(err) {
            console.log(err)
        })
}