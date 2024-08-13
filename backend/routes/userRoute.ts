import User from "../model/userModel";
import { Router } from "express";

function isEmail(username: string): boolean {
    const arr = username.split("@");
    return arr.length == 2;
}

const Route = Router();

Route.post("/register", async (req, res) => {
    try {
        const { username, firstName, familyName, email, password, confirmpassword } = req.body;
        const userInstance = new User({ username, firstName, familyName, email, password, confirmpassword });
        await userInstance.save();
        res.status(201).json({ status: "ok", data: userInstance });
    } catch (error:any) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

Route.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        let userData;

        if (isEmail(username)) {
            console.log(isEmail(username));
            userData = await User.findOne({ email: username });
        } else {
            userData = await User.findOne({ username });
        }
        console.log(userData);
        if (userData && await userData.comparePassword(password)) {
            // Successful login
            res.status(200).json({ status: "ok", data: userData });
        } else {
            // Invalid credentials
            res.status(401).json({ status: "error", message: "Invalid username or password" });
        }
    } catch (error:any) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

export default Route;
