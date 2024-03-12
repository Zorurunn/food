import { RequestHandler } from "express";
import { FoodModel, CategoryModel } from "../models";

// GET ALL FOODS
export const getAllFoods: RequestHandler = async (req, res) => {
  const foods = await FoodModel.find({});

  res.json(foods);
};

// CREATE FOOD
export const createFood: RequestHandler = async (req, res) => {
  const { name, ingredients, imgPath, price, discount, category } = req.body;

  const isRemain = await FoodModel.findOne({ name });

  if (isRemain) {
    return res.status(401).json({
      message: "food name already exist",
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
    return res.json({ message: `"${name}" food  created` });
  } catch (error) {
    return res
      .status(401)
      .json({ error: error, message: "could not create food" });
  }
};

// UPDATE FOOD
export const updateFood: RequestHandler = async (req, res) => {
  const { name, ingredients, imgPath, price, discount, category, _id } =
    req.body;

  const thisFood = await FoodModel.findOne({ _id });

  if (!thisFood) {
    return res.status(401).json({
      message: "food not found",
    });
  }

  try {
    const updatedFood = await FoodModel.updateOne(
      { _id: _id },
      { name, ingredients, imgPath, price, discount, category }
    );

    return res.json("food is successfully updated");
  } catch (error) {
    return res
      .status(401)
      .json({ error: error, message: "could not update food detail" });
  }
};

// GET ALL CATEGORIES
export const getAllCategories: RequestHandler = async (req, res) => {
  const categories = await CategoryModel.find({});

  res.json(categories);
};

// CREATE CATEGORY
export const createCategory: RequestHandler = async (req, res) => {
  const { name } = req.body;

  const isRemain = await CategoryModel.findOne({ name: name });
  if (isRemain) {
    return res.status(401).json({
      message: "Category already exists",
    });
  }

  try {
    await CategoryModel.create({
      name,
    });
    return res.json({ message: `"${name}" category  created` });
  } catch (error) {
    return res
      .status(401)
      .json({ error: error, message: "could not create category" });
  }
};

// UPDATE CATEGORY
export const updateCategory: RequestHandler = async (req, res) => {
  const { name, _id } = req.body;

  const isRemain = await CategoryModel.findOne({ _id: _id });

  if (!isRemain) {
    return res.status(401).json({
      message: "category not found",
    });
  }

  try {
    await CategoryModel.updateOne(
      {
        name,
        _id,
      },
      { name }
    );
    return res.json({ message: `"${name}" category  updated` });
  } catch (error) {
    return res
      .status(401)
      .json({ error: error, message: "could not update category" });
  }
};

// DELETE CATEGORY
export const deleteCategory: RequestHandler = async (req, res) => {
  const { name, _id } = req.body;

  const isRemain = await CategoryModel.findOne({ _id: _id });

  if (!isRemain) {
    return res.status(401).json({
      message: "category not found",
    });
  }

  try {
    await CategoryModel.deleteOne({
      name,
      _id,
    });
    return res.json({ message: `"${name}" category deleted` });
  } catch (error) {
    return res
      .status(401)
      .json({ error: error, message: "could not add category" });
  }
};
