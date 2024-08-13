import mongoose, { CallbackError } from "mongoose";
import bcrypt from "bcrypt";

// Define the User Schema
const userModel = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstName:{
    type:String,
    required:true
  },
  familyName:{
    type:String,
    required:true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  currentpassword: {
    type: String,
  },
  resetToken: {
    type: String,
  },
  resettokenexpire: {
    type: Date,
  },
  lastpassword: {
    type: [String],
  }
});

// Pre-save hook to hash the password
userModel.pre('save', async function (next) {
  try {
    const user = this;

    // Only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) {
      return next();
    }

    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password with the salt
    const hash = await bcrypt.hash(user.password, salt);

    // Replace the plain text password with the hashed password
    user.password = hash;

    next();
  } catch (error:any) {
    next(error);
  }
});

// Method to compare the entered password with the hashed password
userModel.methods.comparePassword = async function (candidatePassword:any) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw error;
  }
};

// Method to handle resetting the password
userModel.methods.setPasswordResetToken = function (token:unknown, expiryTime:Date) {
  this.resetToken = token;
  this.resettokenexpire = expiryTime;
};

// Method to check if the reset token is still valid
userModel.methods.isResetTokenValid = function () {
  return this.resettokenexpire > Date.now();
};

const User = mongoose.model('User', userModel);

export default User;
