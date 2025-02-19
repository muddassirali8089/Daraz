import RegisterUserModel from '../models/RegisterUserModel.js';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

// Nodemailer configuration for sending verification emails
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
    connectionTimeout: 10000, // Increase timeout to 10 seconds
  });
  
  

// Resend verification email function
export const resendVerificationEmail = async (req, res) => {
  const { email } = req.body;

  console.log(email);
  console.log("i am in email controler..");

  try {
    const user = await RegisterUserModel.findOne({ email });
    if (!user) {
      console.log("i am in email controler.. 2");
      return res.status(400).json({ message: 'User not registered.' });
    }
  
    if (user.isVerified) {
      return res.status(400).json({ message: 'User is already verified.' });
    }
  
    const emailToken = crypto.randomBytes(32).toString('hex');
    user.emailToken = emailToken;
    await user.save();
  
    const verificationLink = `http://localhost:5000/verify-email/${emailToken}`;
    await transporter.sendMail({
      to: email,
      subject: 'Resend Email Verification',
      html: `<p>Please verify your email:</p><a href="${verificationLink}">Verify Email</a>`,
    });
  
    res.status(200).json({ message: 'Verification email resent.' });
  } catch (error) {
    console.error('Error sending email:', error); // Log the actual error
    res.status(500).json({ message: 'Error resending verification email.' });
  }
  
};
