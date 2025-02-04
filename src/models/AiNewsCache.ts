import mongoose from "mongoose";

interface AINews {
  title: string;
  excerpt: string;
  url: string;
  image: string;
  source: string;
  category: string;
  publishedAt?: Date;
  createdAt?: Date;
}

const AiNewsCacheSchema = new mongoose.Schema<AINews>({
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
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: false,
  },
});

const AiNewsCache = mongoose.model<AINews>("ai_news_caches", AiNewsCacheSchema);

export default AiNewsCache;
