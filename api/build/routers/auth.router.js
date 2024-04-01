"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const authRouter = (0, express_1.Router)();
authRouter
    .post("/signIn", auth_controller_1.signIn)
    .post("/signup", auth_controller_1.signUp)
    .post("/otpGenerate", auth_controller_1.otpGenerate)
    .post("/changePassword", auth_controller_1.changePassword);
exports.default = authRouter;
