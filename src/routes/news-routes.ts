import express from "express";
import {
  getNews,
  getNewsById,
  searchNews,
  getNewsByCategory,
  saveNews,
  deleteNews,
} from "../controllers/newsController.js";

const newsRouter = express.Router();

// Getting all news
newsRouter.get("/", getNews);

// Getting a specific news by its ID
newsRouter.get("/:id", getNewsById);

// Searching for a specific news by a term
newsRouter.get("/search", searchNews);

// Getting news by its category
newsRouter.get("/category/:category", getNewsByCategory);

// Saving news
newsRouter.post("/", saveNews);

// Delete a specific AI news entry
newsRouter.delete("/:id", deleteNews);

export default newsRouter;
