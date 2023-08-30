import { Request, Response } from 'express';
import RegisterUserModel from '../models/RegisterUserModel.js';
import bcrypt from 'bcrypt';

export const loginUser = async (req,  response) => {
  const { email, password } = req.body;

  try {
    const user = await RegisterUserModel.findOne({ email });

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      res.status(401).json({ message: 'Incorrect password' });
      return;
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
