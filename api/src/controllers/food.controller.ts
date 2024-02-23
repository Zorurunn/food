import { RequestHandler } from "express";
import { FoodModel, UserModel, CategoryModel } from "../models";
import jwt from "jsonwebtoken";

type Payload = {
  id: string;
};
// GET ALL FOODS
export const getAllFoods: RequestHandler = async (req, res) => {
  console.log("GET ALL FOODS");

  const foods = await FoodModel.find({});

  res.json(foods);
};

// CREATE FOOD
export const createFood: RequestHandler = async (req, res) => {
  const { name, ingredients, imgPath, price, discount, category } = req.body;
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Invalid credentials Auth nashi",
    });
  }
  const { id } = jwt.verify(authorization, "secret") as Payload;

  const user = await UserModel.findOne({ _id: id });

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials user nashi",
    });
  }

  try {
    await FoodModel.create({
      name,
      ingredients,
      imgPath,
      price,
      discount,
      category,
    });
    return res.json({ message: `new food "${name}" created` });
  } catch (error) {
    return res
      .status(401)
      .json({ error: error, message: "could not add user" });
  }
};

// UPDATE FOOD
export const updateFood: RequestHandler = async (req, res) => {
  const { name, ingredients, imgPath, price, discount, category, _id } =
    req.body;
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Invalid credentials Auth nashi",
    });
  }
  const { id } = jwt.verify(authorization, "secret") as Payload;

  const user = await UserModel.findOne({ _id: id });

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials user nashi",
    });
  }

  const thisFood = await FoodModel.findOne({ _id });

  if (!thisFood) {
    return res.status(401).json({
      message: "Invalid credentials food nashi",
    });
  }
  try {
    const updatedFood = await FoodModel.updateOne(
      { _id: _id },
      { name, ingredients, imgPath, price, discount, category }
    );

    console.log(updatedFood);

    return res.json("food is successfully updated");
  } catch (error) {
    return res
      .status(401)
      .json({ error: error, message: "could not update user information" });
  }
};

// GET ALL CATEGORIES
export const getAllCategories: RequestHandler = async (req, res) => {
  console.log("GET ALL categories");

  const categories = await CategoryModel.find({});

  res.json(categories);
};
// CREATE CATEGORY
export const createCategory: RequestHandler = async (req, res) => {
  const { name } = req.body;
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Invalid credentials Auth nashi",
    });
  }
  const { id } = jwt.verify(authorization, "secret") as Payload;

  const user = await UserModel.findOne({ _id: id });

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials user nashi",
    });
  }

  try {
    await CategoryModel.create({
      name,
    });
    return res.json({ message: `new category "${name}" created` });
  } catch (error) {
    return res
      .status(401)
      .json({ error: error, message: "could not add category" });
  }
};
