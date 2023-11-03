import jwt from 'jsonwebtoken';
import RegisterUserModel from '../models/RegisterUserModel.js';

export const AuthController = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(req.body.email)

  try {
    const user = await RegisterUserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const passwordMatch = await user.comparePassword(password);

    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const secert_key = process.env.SECERT_KEY;
    const token = jwt.sign({ userId: user._id, email: user.email }, secert_key  );
      
   

    // Return the token as a response
    res.status(200).json({ token });
    console.log(token);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
