import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt from "jsonwebtoken";

type Payload = {
  userId: string;
};
// GET USER
export const getUser: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Invalid credentials in getUser",
    });
  }

  const { userId } = jwt.verify(authorization, "secret") as Payload;

  const userExist = await UserModel.findOne({ _id: userId });

  if (!userExist) {
    res.json({ message: "user not found" });
  } else {
    try {
      return res.json(userExist);
    } catch (error) {
      return res
        .status(401)
        .json({ error: error, message: "could not add user" });
    }
  }
  return;
};
