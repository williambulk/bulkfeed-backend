import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  oauthProvider: {
    type: String,
    required: true,
    unique: true,
  },
  oauthId: {
    type: String,
    required: true,
    unique: true,
  },
  preferences: {
    categories: {
      type: [String],
      default: [],
    },
    theme: {
      type: String,
      enum: ["light", "dark"],
      default: "dark",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
