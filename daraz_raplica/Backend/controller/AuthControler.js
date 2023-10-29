
import RegisterUserModel from '../models/RegisterUserModel.js';
export const AuthControler = async ( req , res) => {

  
  
  const { email, password } = req.body;
  try {
    const user = await RegisterUserModel.findOne({ email });
    

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const passwordMatch = await user.comparePassword(password); // Use `await` to compare the password
    console.log("password checking...");

    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // If the email and password are correct, you can send a success response
    res.status(200).json(user);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }




}
 
