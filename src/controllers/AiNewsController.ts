import { Request, Response } from "express";
import AiNewsCache from "../models/AiNewsCache.js";

// Getting all the AI News
export const getAiNews = async (req: Request, res: Response): Promise<any> => {
  try {
    const news = await AiNewsCache.find();
    return res.status(200).json(news);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch AI News" });
  }
};

// Getting a single AI News item by ID
export const getAiNewsById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const news = await AiNewsCache.findById(req.params.id);

    if (news) {
      return res.status(200).json(news);
    } else {
      return res.status(404).json({
        error: "News not found",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch AI News item" });
  }
};

// Saving AI News
export const saveAiNews = async (req: Request, res: Response): Promise<any> => {
  try {
    const newAiNews = new AiNewsCache(req.body);
    await newAiNews.save();
    return res.status(201).json(newAiNews);
  } catch (error) {
    console.error("Error saving AI News:", error);
    return res.status(500).json({
      error: "Failed to save AI News",
      details: error,
    });
  }
};

// Delete AI News Item
export const deleteAiNews = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const deletedNews = await AiNewsCache.findByIdAndDelete(req.params.id);

    if (deletedNews) {
      return res.status(200).json({ message: "AI News deleted sucessfully" });
    } else {
      return res.status(404).json({
        error: "News not found",
      });
    }
  } catch (error) {
    console.error("Error deleting AI news", error);
    return res.status(500).json({
      error: "Failed to delete AI news",
      details: error,
    });
  }
};
