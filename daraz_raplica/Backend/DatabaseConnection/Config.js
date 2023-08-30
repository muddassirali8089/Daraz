// db.js
import mongoose from "mongoose";

mongoose.set('strictQuery', true);

const url = "mongodb+srv://muddassirali8089:123@daraz.hda2o0g.mongodb.net/";

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to the database.");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

export default connectDB;
