import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
// SIGN UP
export const signUp: RequestHandler = async (req, res) => {
  console.log("kitaaa");
  console.log("req.body:", req.body);

  const { name, address, email, password, phoneNumber } = req.body;
  const userExist = await UserModel.findOne({ email: email });

  if (!userExist) {
    try {
      const user = await UserModel.create({
        name,
        address,
        phoneNumber,
        email,
        password,
      });
      return res.json({ message: "Амжилттай бүртгэгдлээ" });
    } catch (error) {
      return res
        .status(401)
        .json({ error: error, message: "could not add user" });
    }
  }
  return res.json({ message: "user already exists" });
};

// SIGN IN
export const signIn: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email: email, password: password });
  console.log(user);

  if (!user) {
    console.log("kita");

    return res.status(401).json({ message: "Invalid credentials" });
  }

  const id = user._id;

  const token = jwt.sign({ id }, "secret");
  res.json({
    token,
  });
};

// Renew Password
export const reNewPassword: RequestHandler = async (req, res) => {
  const { email } = req.body;
  const user = await UserModel.findOne({ email: email });
  if (!user) {
    res.status(401).json({
      message: "user not found",
    });
  } else {
    const otp = 1234;
    // send otp by email

    UserModel.findOneAndUpdate({ email: email }, { name: "Zoliu" });

    // model.findOneAndUpdate(conditions,update,function(error,result){
    //   if(error){
    //     // handle error
    //   }else{
    //     console.log(result);
    //   }
    // });
    // const userUpdate = await UserModel.updateOne({ name: "Zoluu" });
    // console.log(userUpdate);

    // const updateuser = await UserModel.findOne({ email: email });
    // console.log(updateuser);

    res.json({ message: "OTP succesfully created" });
  }
};

// OTP GENERATE
export const otpGenerate: RequestHandler = async (req, res) => {
  const { email } = req.body;
  console.log("email", email);

  const user = await UserModel.findOne({ email: email });
  if (!user) {
    res.status(401).json({
      message: "user not found",
    });
    return;
  }

  const otp = 1234;

  try {
    const updatedUser = await UserModel.updateOne({ email: email }, { otp });
    console.log(updatedUser);

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

      res.json({ message: "OTP code is send by email" });
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    return res
      .status(401)
      .json({ error: error, message: "could not generate otp" });
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

  if (!user.otp) {
    console.log("OTP DOESNOT MATCH");

    res.status(401).json({
      message: "otp did not generated",
    });
    return;
  }

  if (user.otp !== otp) {
    return res.status(401).json({ message: "OTP does not match try again" });
  }
  if (user.otp === otp) {
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
