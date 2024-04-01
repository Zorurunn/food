import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt from "jsonwebtoken";
import { secretKey } from "./auth.controller";

type Payload = {
  id: string;
  role: string;
};

// GET USER
export const getUser: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }
  const { id, role } = jwt.verify(authorization, secretKey) as Payload;

  const user = await UserModel.findOne({ _id: id });

  if (user) {
    try {
      return res.json(user);
    } catch (error) {
      return res
        .status(401)
        .json({ error: error, message: "could not send user information" });
    }
  }
  return res.json("user not found");
};
