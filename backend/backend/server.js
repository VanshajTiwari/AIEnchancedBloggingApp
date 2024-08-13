"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const userModel_1 = __importDefault(require("./model/userModel"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const App = (0, express_1.default)();
dotenv_1.default.config();
App.use((0, morgan_1.default)("dev"));
App.use(express_1.default.json());
App.post("/registe", (req, res) => {
    const { username, firstName, familyName, email, password, currentpassword } = req.body;
    const userInstance = new userModel_1.default({ username, firstName, familyName, email, password, currentpassword });
    userInstance.save();
    res.status(201).json({ status: "ok", data: userInstance });
});
const dbString = process.env.LOCAL_CONN || "";
mongoose_1.default.connect(dbString).then(e => console.log("DB connected"));
App.listen(8080, () => {
    console.log("http://localhost:8080");
});
