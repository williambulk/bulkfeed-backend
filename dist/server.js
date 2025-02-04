import "dotenv/config";
import cors from "cors";
import express from "express";
import AiNewsRouter from "./routes/ai-news-routes.js";
import mongoConnect from "./config/db.js";
const app = express();
// Setting up CORS
const corsOptions = {
    origin: "http://localhost:2000",
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
// Setting up the JSON middleware
app.use(express.json());
// Calling MongoDB
mongoConnect();
// Setting up the routes
app.use("/ai-news", AiNewsRouter);
// Setting up the port
const PORT = process.env.PORT;
// Starting server, listening to the port set in the .env file
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
