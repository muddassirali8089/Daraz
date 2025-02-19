import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import RegisterUserModel from '../models/RegisterUserModel.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    // Log email and password for debugging purposes
    console.log(email, password);
    console.log('login...');

    // Check if user exists in the database
    const user = await RegisterUserModel.findOne({ email });
    console.log('User from DB:', user); // Log the user object

    if (!user) {
      return res.status(400).json({ message: 'invalid email or password' });
    }

    // Check if user is verified
    if (!user.isVerified) {
      console.log('User not verified:', user.email);
      return res.status(400).json({
        message: 'Please verify your email before logging in.',
      });
    }

    // Check if the password matches
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log('Password Match:', passwordMatch); // Log password match result

    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid password.' });
    }

    // Log the JWT secret key for debugging purposes
    console.log('JWT Secret Key:', process.env.SECRET_KEY);

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    );

    // Successful login, send back the token and user info
    return res.status(200).json({
      token,
      user: { fullName: user.fullName, email: user.email, message: 'Login successful' },
    });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};
