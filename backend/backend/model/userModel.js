"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// Define the User Schema
const userModel = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true
    },
    familyName: {
        type: String,
        required: true
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
userModel.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = this;
            // Only hash the password if it has been modified (or is new)
            if (!user.isModified('password')) {
                return next();
            }
            // Generate a salt
            const salt = yield bcrypt_1.default.genSalt(10);
            // Hash the password with the salt
            const hash = yield bcrypt_1.default.hash(user.password, salt);
            // Replace the plain text password with the hashed password
            user.password = hash;
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
// Method to compare the entered password with the hashed password
userModel.methods.comparePassword = function (candidatePassword) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield bcrypt_1.default.compare(candidatePassword, this.password);
        }
        catch (error) {
            throw error;
        }
    });
};
// Method to handle resetting the password
userModel.methods.setPasswordResetToken = function (token, expiryTime) {
    this.resetToken = token;
    this.resettokenexpire = expiryTime;
};
// Method to check if the reset token is still valid
userModel.methods.isResetTokenValid = function () {
    return this.resettokenexpire > Date.now();
};
const User = mongoose_1.default.model('User', userModel);
exports.default = User;
