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
exports.changePassword = exports.otpGenerate = exports.signIn = exports.signUp = exports.secretKey = void 0;
const models_1 = require("../models");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const otpGenerator = require("otp-generator");
exports.secretKey = "food delivery application secret key";
// SIGN UP
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, address, email, password, phoneNumber } = req.body;
    const userExist = yield models_1.UserModel.findOne({ email: email });
    if (userExist) {
        return res.status(401).json({
            message: "This email already registered",
        });
    }
    try {
        const user = yield models_1.UserModel.create({
            name,
            address,
            phoneNumber,
            email,
            password,
            role: "user",
        });
        return res.json({ message: "Account successfully created", user: user });
    }
    catch (error) {
        return res
            .status(401)
            .json({ error: error, message: "could not create user" });
    }
});
exports.signUp = signUp;
// SIGN IN
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield models_1.UserModel.findOne({ email: email, password: password });
    if (!user) {
        return res
            .status(401)
            .json({ message: "Email or Password does not match" });
    }
    const id = user._id;
    const role = user.role;
    const token = jsonwebtoken_1.default.sign({
        id: id,
        role: role,
    }, exports.secretKey, { expiresIn: "1h" });
    res.json({ token });
});
exports.signIn = signIn;
// OTP GENERATE
const otpGenerate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const user = yield models_1.UserModel.findOne({ email: email });
    if (!user) {
        res.status(401).json({
            message: "user not found",
        });
        return;
    }
    const otp = otpGenerator.generate(4, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
    });
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    const expirationTime = currentTime + 300; // Expires in 5 minutes (300 seconds)
    try {
        yield models_1.UserModel.findOneAndUpdate({ email: email }, { OneTimePass: { otp: otp, expiresIn: expirationTime } });
    }
    catch (error) {
        return res.status(500).json({ error, messeage: "Could not generate otp" });
    }
    try {
        const transporter = nodemailer_1.default.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "amjpodcast2021@gmail.com",
                pass: "kktopivkjuembwin",
            },
        });
        const mailOptions = {
            from: "amjpodcast2021@gmail.com",
            to: email,
            subject: "Your OTP code",
            text: `This is your code: ${otp}`,
        };
        yield transporter.sendMail(mailOptions);
        return res.json({ message: "OTP code is sent by email" });
    }
    catch (error) {
        return res
            .status(500)
            .json({ error: error, message: "could not send otp by email" });
    }
});
exports.otpGenerate = otpGenerate;
// CHANGE PASSWORD
const changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const { otp, email, newPassword } = req.body;
    const user = yield models_1.UserModel.findOne({ email: email });
    if (!user) {
        res.status(401).json({
            message: "user not found",
        });
        return;
    }
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    // const expirationTime = currentTime + 300; // Expires in 5 minutes (300 seconds)
    if ((_a = user.OneTimePass) === null || _a === void 0 ? void 0 : _a.expiresIn) {
        if (currentTime > ((_b = user.OneTimePass) === null || _b === void 0 ? void 0 : _b.expiresIn))
            return res.status(401).json({
                message: "otp expired",
            });
    }
    if (!((_c = user.OneTimePass) === null || _c === void 0 ? void 0 : _c.otp)) {
        res.status(401).json({
            message: "otp did not generated",
        });
        return;
    }
    if (((_d = user.OneTimePass) === null || _d === void 0 ? void 0 : _d.otp) !== otp) {
        return res.status(401).json({ message: "OTP does not match try again" });
    }
    if (((_e = user.OneTimePass) === null || _e === void 0 ? void 0 : _e.otp) === otp) {
        try {
            const updatedUser = yield models_1.UserModel.updateOne({ email: email }, { password: newPassword });
            return res.json({ message: "password updated" });
        }
        catch (error) {
            return res
                .status(401)
                .json({ error: error, message: "could not update password" });
        }
    }
});
exports.changePassword = changePassword;
