import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const registrationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthdate: { type: Date, required: true },
  gender: { type: String, enum: ['male', 'female'], required: true },
  isVerified: { type: Boolean, default: false }, // New field to track email verification
  emailToken: { type: String }, // Field to store email verification token
});

registrationSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const RegisterUserModel = mongoose.model('RegisterUser', registrationSchema);

export default RegisterUserModel;
