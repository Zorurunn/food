import { RequestHandler } from "express";
import { UserModel, CategoryModel, BasketModel, OrderModel } from "../models";
import jwt from "jsonwebtoken";
import { basketFoodType } from "../types/types";

type Payload = {
  id: string;
};

// ADD ORDER
export const addOrder: RequestHandler = async (req, res) => {
  try {
    const {
      userId,
      deliveryAddress,
      foods,
      deliveryStatus,
      createdAt,
      deliveredAt,
    } = req.body;
    const food = foods.filter((item: basketFoodType) => {
      return item.quantity === 3;
    });
    console.log(food);
  } catch (e) {
    console.log(e);
  }
  return res.json("userID");
};
