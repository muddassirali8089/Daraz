import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import RegisterUser from "./routes/RegisterUser.js";
import connectDB from "./DatabaseConnection/Config.js";
import dotenv from 'dotenv';
// import authenticateToken from '../Middlewares/authenticateToken.js';
import AuthRoute from './routes/AuthRoute.js'
import authenticateToken from './Middlewares/authenticateToken.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/Registration", RegisterUser);
console.log("index...");

// Login route
app.use("/Signin", authenticateToken, AuthRoute);




// Other middleware and routes can be added here
