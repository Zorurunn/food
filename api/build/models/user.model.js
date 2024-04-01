"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
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
    avatar_url: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        required: true,
    },
    OneTimePass: {
        otp: String,
        expiresIn: Number,
        // required: false,
    },
});
exports.UserModel = (0, mongoose_1.model)("user", userSchema);
