import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
const otpGenerator = require("otp-generator");

export const secretKey = "food delivery application secret key";
// SIGN UP
export const signUp: RequestHandler = async (req, res) => {
  const { name, address, email, password, phoneNumber } = req.body;

  const userExist = await UserModel.findOne({ email: email });

  if (userExist) {
    return res.status(401).json({
      message: "This email already registered",
    });
  }

  try {
    const user = await UserModel.create({
      name,
      address,
      phoneNumber,
      email,
      password,
      role: "user",
    });

    return res.json({ message: "Account successfully created", user: user });
  } catch (error) {
    return res
      .status(401)
      .json({ error: error, message: "could not create user" });
  }
};

// SIGN IN
export const signIn: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email: email, password: password });

  if (!user) {
    return res
      .status(401)
      .json({ message: "Email or Password does not match" });
  }

  const id = user._id;
  const role = user.role;

  const token = jwt.sign(
    {
      id: id,
      role: role,
    },
    secretKey,
    { expiresIn: "1h" }
  );
  console.log("token:", token);

  res.json({ token });
};

// OTP GENERATE
export const otpGenerate: RequestHandler = async (req, res) => {
  const { email } = req.body;

  const user = await UserModel.findOne({ email: email });
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
    await UserModel.findOneAndUpdate(
      { email: email },
      { OneTimePass: { otp: otp, expiresIn: expirationTime } }
    );
  } catch (error) {
    return res.status(500).json({ error, messeage: "Could not generate otp" });
  }

  try {
    const transporter = nodemailer.createTransport({
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
    await transporter.sendMail(mailOptions);

    return res.json({ message: "OTP code is sent by email" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error, message: "could not send otp by email" });
  }
};

// CHANGE PASSWORD
export const changePassword: RequestHandler = async (req, res) => {
  const { otp, email, newPassword } = req.body;
  const user = await UserModel.findOne({ email: email });
  if (!user) {
    res.status(401).json({
      message: "user not found",
    });
    return;
  }

  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  // const expirationTime = currentTime + 300; // Expires in 5 minutes (300 seconds)
  if (user.OneTimePass?.expiresIn) {
    if (currentTime > user.OneTimePass?.expiresIn)
      return res.status(401).json({
        message: "otp expired",
      });
  }
  if (!user.OneTimePass?.otp) {
    res.status(401).json({
      message: "otp did not generated",
    });
    return;
  }

  if (user.OneTimePass?.otp !== otp) {
    return res.status(401).json({ message: "OTP does not match try again" });
  }
  if (user.OneTimePass?.otp === otp) {
    try {
      const updatedUser = await UserModel.updateOne(
        { email: email },
        { password: newPassword }
      );
      return res.json({ message: "password updated" });
    } catch (error) {
      return res
        .status(401)
        .json({ error: error, message: "could not update password" });
    }
  }
};
