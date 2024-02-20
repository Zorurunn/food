import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt from "jsonwebtoken";
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
      return res.json(user);
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
