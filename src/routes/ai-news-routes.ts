import express from "express";
import {
  getAiNews,
  getAiNewsById,
  saveAiNews,
  deleteAiNews,
} from "../controller/AiNewsController.js";

const AiNewsRouter = express.Router();

// Getting all AI news
AiNewsRouter.get("/", getAiNews);

// Getting a specific AI news by ID
AiNewsRouter.get("/:id", getAiNewsById);

// Saving AI news to cache
AiNewsRouter.post("/", saveAiNews);

// Delete a specific AI news entry
AiNewsRouter.delete("/:id", deleteAiNews);

export default AiNewsRouter;
