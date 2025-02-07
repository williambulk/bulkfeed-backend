import app from "./app.js";
// Setting up the port
const PORT = process.env.PORT;
// Starting server, listening to the port set in the .env file
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
