import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

type Payload = {
  id: string;
};

export const authMiddleware: RequestHandler = (req, res, next) => {
  // if (req.path == "/") return next();

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Invalid credentials in middleware",
    });
  }

  try {
    const { id } = jwt.verify(authorization, "secret") as Payload;
    console.log("userID in middleware", id);

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }
};
