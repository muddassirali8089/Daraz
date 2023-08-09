import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import RegisterUser from "./routes/RegisterUser.js"

const app = express();

mongoose.set('strictQuery', true);

const url = "mongodb+srv://muddassirali8089:123@daraz.hda2o0g.mongodb.net/";

mongoose.connect(url)
  .then(() => console.log("connected."))
  .catch(() => console.log("not... connected"))
console.log("after....")

app.listen(5000);

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/Registration" , RegisterUser);