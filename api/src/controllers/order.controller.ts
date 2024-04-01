import { RequestHandler } from "express";
import { UserModel, CategoryModel, OrderModel } from "../models";
import jwt from "jsonwebtoken";
import { basketFoodType } from "../types/types";
import { secretKey } from "./auth.controller";

type Payload = {
  id: string;
};

// GET ORDERS
export const getOrders: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Invalid credentials Auth nashi",
    });
  }
  const { id } = jwt.verify(authorization, secretKey) as Payload;

  const user = await UserModel.findOne({ _id: id });
  if (!user) {
    return res.status(401).json({
      message: "No user found",
    });
  }
  const orders = await OrderModel.find({ userId: user.id });

  res.json(orders);
};

// CREATE ORDER
export const createOrder: RequestHandler = async (req, res) => {
  // Generate new Date
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; // months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const newDate = year + "/" + month + "/" + day;

  try {
    const { deliveryAddress, foods } = req.body;

    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: "Invalid credentials Auth nashi",
      });
    }
    const { id } = jwt.verify(authorization, secretKey) as Payload;

    const user = await UserModel.findOne({ _id: id });

    if (!user) {
      return res.status(401).json({
        message: "No User found",
      });
    }

    await OrderModel.create({
      userId: user.id,
      deliveryAddress,
      foods,
      createdAt: newDate,
      deliveryStatus: false,
    });
    return res.json("Order completed");
  } catch (e) {
    return res
      .status(401)
      .json({ error: e, message: "Order didn't complete. Try again" });
  }
};
