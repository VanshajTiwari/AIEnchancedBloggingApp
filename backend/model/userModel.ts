import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";

// Define an interface representing a document in MongoDB
export interface IUser extends Document {
  username: string;
  firstName: string;
  familyName: string;
  avatar:string;
  email: string;
  password: string;
  confirmpassword?: string;
  resetToken?: string;
  resettokenexpire?: Date;
  lastpassword: string[];
  comparePassword(candidatePassword: string): Promise<boolean>;
  setPasswordResetToken(token: string, expiryTime: Date): void;
  isResetTokenValid(): boolean;
}

// Define the User Schema
const userSchema: Schema<IUser> = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  familyName: {
    type: String,
    required: true,
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
  confirmpassword: {
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
  },
});

// Pre-save hook to hash the password
userSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.confirmpassword = ''
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error:any) {
    next(error);
  }
});

// Method to compare the entered password with the hashed password
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Method to handle resetting the password
userSchema.methods.setPasswordResetToken = function (token: string, expiryTime: Date): void {
  this.resetToken = token;
  this.resettokenexpire = expiryTime;
};

// Method to check if the reset token is still valid
userSchema.methods.isResetTokenValid = function (): boolean {
  return this.resettokenexpire! > new Date();
};

// Create and export the User model
const User = mongoose.model<IUser>('User', userSchema);

export default User;
