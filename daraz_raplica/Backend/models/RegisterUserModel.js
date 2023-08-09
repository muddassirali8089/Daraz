const mongoose = require('mongoose');

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
    enum: ['male', 'female', 'other'],
    required: true,
  },
});

const RegisterUser = mongoose.model('RegisterUser', registrationSchema);

module.exports = RegisterUser;
