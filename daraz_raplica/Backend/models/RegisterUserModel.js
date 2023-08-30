import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // Add email validation if needed
  },
  password: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
});

const RegisterUserModel = mongoose.model('RegisterUser', registrationSchema);

export default RegisterUserModel;
