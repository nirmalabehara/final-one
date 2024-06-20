// Install dependencies
// npm install express mongoose cors

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const db="review"

// Connect to MongoDB
const mongoConnection=mongoose.connect(`mongodb://${server}/${db}`)

const reviewSchema = new mongoose.Schema({
  movie: String,
  review: String,
  rating: Number
});

const Review = mongoose.model('Review', reviewSchema);

app.use(cors());
app.use(express.json());

app.get('/reviews', async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
});

app.post('/reviews', async (req, res) => {
  const newReview = new Review(req.body);
  await newReview.save();
  res.json(newReview);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});