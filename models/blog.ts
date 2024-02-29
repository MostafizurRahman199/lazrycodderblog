
import mongoose, { Schema, models } from "mongoose";


// Define schema for blog posts
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

// Create a model from the schema
const Blog =  models.Blog || mongoose.model('Blog', blogSchema);

module.exports = Blog;
