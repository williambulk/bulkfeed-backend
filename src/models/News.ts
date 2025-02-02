import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  source: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  publishedAt: {
    type: String,
    required: true,
  },
  cachedAt: {
    type: Date,
    default: Date.now,
  },
});

const News = mongoose.model("News", NewsSchema);

export default News;
