import { RequestHandler } from "express";
import { FoodModel } from "../models";

export const getAllFoods: RequestHandler = async (req, res) => {
  console.log("GET ALL FOODS");
  
  const foods = await FoodModel.find({});

  res.json(foods);
};

export const createFood: RequestHandler = async (req, res) => {
  console.log("createFodd kita");
  
  const {name, ingredients, imgPath, price, discount, category}= req.body

    try {
      const createdFood = await FoodModel.create({
        name, ingredients, imgPath, price, discount, category
      });
      return res.json({ message: `new food "${name}" created` });
    } catch (error) {
      return res
        .status(401)
        .json({ error: error, message: "could not add user" });
    }

};

