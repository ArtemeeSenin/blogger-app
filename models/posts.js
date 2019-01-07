const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    categories: [String],
    content: String
})

mongoose.model('Post', postSchema);