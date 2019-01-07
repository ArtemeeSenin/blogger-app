const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    categories: [String],
    content: String
}, {
    versionKey: false // You should be aware of the outcome after set to false
})

mongoose.model('Post', postSchema);