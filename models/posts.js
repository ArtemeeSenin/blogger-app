const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    categories: [String],
    constent: String
})

mongoose.model('Post', postSchema);