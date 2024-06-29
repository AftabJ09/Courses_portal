// models/BlogPost.js

const mongoose = require('mongoose');

// Component schema for blog post content
const ComponentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: [ 'image', 'video']
    },
    value: {
        type: mongoose.Schema.Types.Buffer,
        required: true
    }
});

// Blog post schema
const BlogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text:{
        type:String,
        return:true
    },
    url:{
        type:String,
        required:true
    },
    content: [ComponentSchema],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);
