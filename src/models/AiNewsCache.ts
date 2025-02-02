import mongoose from "mongoose";

const AiNewsCacheSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
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
    required: true,
  },
  publishedAt: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const AiNewsCache = mongoose.model("AiNewsCache", AiNewsCacheSchema);

export default AiNewsCache;
