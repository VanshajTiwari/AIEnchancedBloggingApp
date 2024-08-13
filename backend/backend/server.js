"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const App = (0, express_1.default)();
dotenv_1.default.config();
App.use((0, morgan_1.default)("dev"));
App.use(express_1.default.json());
const dbString = process.env.LOCAL_CONN || "";
App.use("/", userRoute_1.default);
mongoose_1.default.connect(dbString).then(e => console.log("DB connected"));
App.listen(8080, () => {
    console.log("http://localhost:8080");
});
