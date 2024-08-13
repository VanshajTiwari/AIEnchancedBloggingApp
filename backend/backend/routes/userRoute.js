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
const userModel_1 = __importDefault(require("../model/userModel"));
const express_1 = require("express");
function isEmail(username) {
    const arr = username.split("@");
    return arr.length == 2;
}
const Route = (0, express_1.Router)();
Route.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, firstName, familyName, email, password, confirmpassword } = req.body;
        const userInstance = new userModel_1.default({ username, firstName, familyName, email, password, confirmpassword });
        yield userInstance.save();
        res.status(201).json({ status: "ok", data: userInstance });
    }
    catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
}));
Route.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        let userData;
        if (isEmail(username)) {
            console.log(isEmail(username));
            userData = yield userModel_1.default.findOne({ email: username });
        }
        else {
            userData = yield userModel_1.default.findOne({ username });
        }
        console.log(userData);
        if (userData && (yield userData.comparePassword(password))) {
            // Successful login
            res.status(200).json({ status: "ok", data: userData });
        }
        else {
            // Invalid credentials
            res.status(401).json({ status: "error", message: "Invalid username or password" });
        }
    }
    catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
}));
exports.default = Route;
