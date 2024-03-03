import mongoose, { Schema, models } from "mongoose";

// Define schema
const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
 
  review: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  }
});

// Create model
const Review =models.Review || mongoose.model('Review', reviewSchema);

module.exports = Review;
