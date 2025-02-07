import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoConnect from "./config/db.js";
import AiNewsRouter from "./routes/ai-news-routes.js";
import favoriteRouter from "./routes/favorites-routes.js";
import newsRouter from "./routes/news-routes.js";

// Calling dotenv config
dotenv.config();

// Calling MongoDB
mongoConnect();

// Setting up Express
const app = express();

// Setting up CORS
const corsOptions = {
  origin: "http://localhost:2000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Setting up the JSON middleware
app.use(express.json());

// Setting up the routes
app.use("/ai-news", AiNewsRouter);
app.use("/favorites", favoriteRouter);
app.use("/news", newsRouter);

// Check routes
app.get("/", (req, res) => {
  res.send("BulkFeed API is running!");
});

export default app;
