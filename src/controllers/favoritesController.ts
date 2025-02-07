import { Request, Response } from "express";
import FavoriteModel from "../models/Favorites.js";
import mongoose from "mongoose";

// Adding a new favorite
export const addFavorite = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { userId, newsId, note } = req.body;

  if (!userId || !newsId) {
    return res.status(400).json({
      message: "User ID and News ID are required",
    });

    try {
      const newFavorite = new FavoriteModel({ userId, newsId, note });
      await newFavorite.save();
      res.status(201).json({
        message: "Favorite added successfully",
        favorite: newFavorite,
      });
    } catch (error) {
      console.error("Failed to add the favorite", error);
      res.status(500).json({
        message: "Failed to add the favorite",
        error,
      });
    }
  }
};

// Getting all favorites for a user
export const getFavoritesByUser = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({
      message: "Invalid user ID.",
    });
  }

  try {
    const favorites = await FavoriteModel.find({ userId }).populate("newsId");
    res.status(200).json(favorites);
  } catch (error) {
    console.error("Error fetching favorites", error);
    res.status(500).json({ message: "Error fetching favorites", error });
  }
};

// Updating the notes on a favorite
export const updateFavoriteNote = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;
  const { note } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid favorite ID." });
  }

  try {
    const updatedFavorite = await FavoriteModel.findByIdAndUpdate(
      id,
      { note },
      { new: true }
    );

    if (!updatedFavorite) {
      return res.status(404).json({
        message: "Favorite not found.",
      });
    }

    res.status(200).json({
      message: "Note updated successfully.",
      favorite: updatedFavorite,
    });
  } catch (error) {
    console.error("Error updating note", error);
    res.status(500).json({ message: "Error updating note", error });
  }
};

// Removing a favorite
export const deleteFavorite = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: "Invalid favorite ID.",
    });
  }

  try {
    const deletedFavorite = await FavoriteModel.findByIdAndDelete(id);
    if (!deletedFavorite) {
      return res.status(404).json({
        message: "Favorite not found.",
      });
    }

    res.status(200).json({
      message: "Favorite removed successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: "Error removing favorite.", error });
  }
};
