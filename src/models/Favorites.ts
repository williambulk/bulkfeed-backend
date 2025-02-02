import mongoose from "mongoose";

const FavoriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  newsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "News",
    required: true,
  },
  note: {
    type: String,
    default: "",
  },
  savedAt: {
    type: Date,
    default: Date.now,
  },
});

const Favorite = mongoose.model("Favorite", FavoriteSchema);

export default Favorite;
