import bcrypt from 'bcrypt';
import RegisterUserModel from '../models/RegisterUserModel.js';

export const setRegisterUser = async (req, res) => {
  console.log("......");
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

    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};
