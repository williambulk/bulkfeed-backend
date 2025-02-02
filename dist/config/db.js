import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.STRING_DB);
        console.log("Connection to the database successful.");
    }
    catch (error) {
        console.error("Failed to connect to the database.", error);
        process.exit(1);
    }
};
export default mongoConnect;
