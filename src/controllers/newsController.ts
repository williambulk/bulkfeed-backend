import { Request, Response } from "express";
import NewsModel from "../models/News.js";
import mongoose from "mongoose";

// Fetching all News
export const getNews = async (req: Request, res: Response): Promise<any> => {
  try {
    const news = await NewsModel.find().sort({ publishedAt: -1 });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching news",
      error,
    });
  }
};

// Fetching single News by ID
export const getNewsById = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: "Invalid news ID",
    });
  }

  try {
    const news = await NewsModel.findById(id);

    if (news) {
      return res.status(200).json(news);
    } else {
      return res.status(404).json({
        message: "News not found",
      });
    }
  } catch (error) {
    console.error("There was a problem fetching the News ID", error);
    return res.status(500).json({
      message: "There was a problem fetching the News ID",
      error,
    });
  }
};

// Searching News by Keyword
export const searchNews = async (req: Request, res: Response): Promise<any> => {
  const { query } = req.query;

  if (!query || typeof query !== "string") {
    return res.status(400).json({
      message: "Query parameter is required",
    });
  }

  try {
    const news = await NewsModel.find({
      title: {
        $regex: query,
        $options: "i",
      },
    });

    res.status(200).json(news);
  } catch (error) {
    console.error("Failed to search the news", error);
    return res.status(500).json({
      message: "Error searching news",
      error,
    });
  }
};

// Fetching News by Category
export const getNewsByCategory = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { category } = req.params;

  if (!category) {
    return res.status(400).json({
      message: "Category is required",
    });
  }

  try {
    const news = await NewsModel.find({ category });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching news by category",
      error,
    });
  }
};

// Saving News Article
export const saveNews = async (req: Request, res: Response): Promise<any> => {
  const { title, description, url, image, source, category, publishedAt } =
    req.body;

  if (!title || !url || !source || !publishedAt) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  try {
    const newArticle = new NewsModel({
      title,
      description,
      url,
      image,
      source,
      category,
      publishedAt,
    });

    await newArticle.save();
    res.status(201).json({
      message: "News article saved",
      news: newArticle,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error saving news article",
      error,
    });
  }
};

// Deleting a News Article
export const deleteNews = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: "Invalid news ID",
    });
  }

  try {
    const deletedNews = await NewsModel.findByIdAndDelete(id);
    if (!deletedNews) {
      return res.status(404).json({
        message: "News not found",
      });
    }

    res.status(200).json({
      message: "News article deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting news article",
      error,
    });
  }
};
