"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routes_1 = require("./routes");
require("./database");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes_1.router);
app.use((err, request, response, next) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error",
    });
});
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "..", "views"));
app.listen(3000, () => {
    console.log("Server is running at port 3000");
});
