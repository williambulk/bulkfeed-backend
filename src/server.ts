import "dotenv/config";
import express from "express";

const app = express();

// Setting up the port
const PORT = process.env.PORT;

// Setting up the JSON middleware
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
    res.send("Testing the BulkFeed API");
});

// Starting server, listening to the port set in the .env file
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});