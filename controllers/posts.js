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

module.exports.addPost = function(req, res, postData, cb) {
    const newPost = new Post(postData)
    newPost.save()
        .then(function (doc) {
            cb(req, res, doc);
        })
        .catch(function (err) {
            console.log(err)
        })

}

module.exports.postSingle = function(req, res, postId, cb) {
    Post
        .findById(postId)
        .then(function(doc){
            cb(req, res, doc)
        })
        .catch(function(err){
            console.log(err)
        })
}

module.exports.removePost = function(req, res, postId, cb) {
    Post
        .findByIdAndDelete(postId)
        .then(function (doc) {
            cb(req, res, doc)
        })
        .catch(function (err) {
            console.log(err)
        })
}