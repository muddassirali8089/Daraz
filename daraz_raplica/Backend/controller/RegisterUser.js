import bcrypt from 'bcrypt';
import RegisterUserModel from '../models/RegisterUserModel.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


// Load environment variables
dotenv.config();

// Nodemailer configuration for sending verification emails


// Registration function
export const setRegisterUser = async (req, res) => {
  console.log("i am in registration..");
  
  const { fullName, email, password, birthdate, gender } = req.body;

  console.log(fullName, email, password, birthdate, gender);

  try {
    const existingUser = await RegisterUserModel.findOne({ email });
    if (existingUser) {
      if (!existingUser.isVerified) {
        return res.status(400).json({ message: 'Email already registered, please verify your email.' });
      }
      return res.status(400).json({ message: 'Email already registered. please log in ' });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Generate email verification token
    // const emailToken = crypto.randomBytes(32).toString('hex');

    // Create a new user instance
    const newUser = new RegisterUserModel({
      fullName,
      email,
      password: hashedPassword,
      birthdate,
      gender,
      
      isVerified: false, // Add a new field to track email verification status
    });

    // Save the user in the database
    const savedUser = await newUser.save();

   

    res.status(200).json({ message: 'Registration successful, please verify your email.' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};


