import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models";
import { secretKey } from "../controllers";

type Payload = {
  id: string;
  role: string;
};

export const authMiddleware: RequestHandler = async (req, res, next) => {
  if (req.path == "/") return next();

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Invalid credentials: AUTHORIZATION NOT FOUND",
    });
  }

  try {
    const { id, role } = jwt.verify(authorization, secretKey) as Payload;

    const user = await UserModel.findOne({ _id: id });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials: USER NOT FOUND  ",
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid credentials in middleware",
    });
  }
};
