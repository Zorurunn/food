import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

type Payload = {
  userId: string;
};

export const authMiddleware: RequestHandler = (req, res, next) => {
  console.log(req);

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  try {
    const { userId } = jwt.verify(authorization, "secret") as Payload;

    // req.userId = userId;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }
};
