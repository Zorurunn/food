import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt from "jsonwebtoken";

type Payload = {
  id: string;
};

// UPDATE USER
export const userUpdate: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;
  const { name, email, phoneNumber } = req.body;
  if (!authorization) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }
  const { id } = jwt.verify(authorization, "secret") as Payload;

  const user = await UserModel.findOne({ _id: id });

  if (user) {
    try {
      const updatedUser = await UserModel.updateOne(
        { _id: id },
        { name, email, phoneNumber }
      );
      return res.json(updatedUser);
    } catch (error) {
      return res
        .status(401)
        .json({ error: error, message: "could not update user information" });
    }
  }
  return res.json("user not found");
};
