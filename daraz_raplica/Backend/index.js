import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import RegisterUser from "./routes/RegisterUser.js";
import connectDB from "./DatabaseConnection/Config.js";
import dotenv from 'dotenv'; // Import dotenv to load environment variables

dotenv.config(); // Load environment variables from .env file

const app = express();

const port = process.env.PORT || 5000; // Use the PORT environment variable or default to 5000

// Connect to the database
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/Registration", RegisterUser);
