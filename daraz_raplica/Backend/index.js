import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js"; // Import your user routes
import connectDB from "./DatabaseConnection/Config.js"; // Database connection
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mounting routes
app.use("/", userRoutes); // Use user routes for registration, login, and verification

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Other middleware and routes can be added here
