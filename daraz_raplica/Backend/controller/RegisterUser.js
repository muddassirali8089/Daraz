import bcrypt from 'bcrypt';
import RegisterUserModel from '../models/RegisterUserModel.js';
import  jwt  from 'jsonwebtoken';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();


export const setRegisterUser = async   (req, res) => {
  
  const { fullName, email, password, birthdate, gender } = req.body;
  

  try {
    // Check if user with the same email already exists
    const existingUser = await RegisterUserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash and salt the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user instance with hashed password
    const newUser = new RegisterUserModel({
      fullName,
      email,
      password: hashedPassword,
      birthdate,
      gender,
    });

    // Save the user to the database
    const savedUser = await newUser.save();


    const secert_key = process.env.SECERT_KEY;
    const token = jwt.sign({ userId: savedUser._id, email: savedUser.email }, secert_key  );
      
  
    res.status(200).json({ token, user: savedUser });
    console.log(token, "mytoken");
    console.log("response from backend...");
    
    

  } catch (error) {
    console.log("error");
     res.status(500).send({ error });
  }
};
