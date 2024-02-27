import { RequestHandler } from "express";
import { FoodModel, UserModel, CategoryModel } from "../models";
import jwt from "jsonwebtoken";

type Payload = {
  id: string;
};
// GET DISTRICTS
export const getDistricts: RequestHandler = async (req, res) => {
  console.log("GET ALL DISTRICTS");

  const districts = await FoodModel.find({});

  res.json(districts);
};
