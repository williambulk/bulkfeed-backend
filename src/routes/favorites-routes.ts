import express from "express";
import {
  addFavorite,
  getFavoritesByUser,
  updateFavoriteNote,
  deleteFavorite,
} from "../controllers/favoritesController.js";

const favoriteRouter = express.Router();

// Getting all favorites
favoriteRouter.post("/", addFavorite);

// Getting favorites by the user
favoriteRouter.get("/:userId", getFavoritesByUser);

// Updating the favorite
favoriteRouter.put("/:id", updateFavoriteNote);

// Delete a favorite entry
favoriteRouter.delete("/:id", deleteFavorite);

export default favoriteRouter;
