import { RequestHandler } from "express";
import { FoodModel, CategoryModel, UserModel } from "../models";
import jwt from "jsonwebtoken";
import { secretKey } from "./auth.controller";
import { Payload } from "../middlewares";

// CHECK IS ADMIN
const checkIsAdmin = async (authorization: string) => {
  try {
    const { id, role } = jwt.verify(authorization, secretKey) as Payload;

    const user = await UserModel.findOne({ _id: id });

    if (!user || role !== "admin") {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

// CREATE FOOD
export const createFood: RequestHandler = async (req, res) => {
  const { name, ingredients, imgPath, price, discount, category } = req.body;

  // CHECK IS ADMIN
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "Invalid credentials: AUTHORIZATION NOT FOUND",
    });
  }
  const isAdmin = await checkIsAdmin(authorization);

  if (!isAdmin) {
    return res.status(401).json({
      message: "YOU ARE NOT ADMIN OR USER NOT FOUND",
    });
  }

  // CREATE FOOD
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

  // CHECK IS ADMIN
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "Invalid credentials: AUTHORIZATION NOT FOUND",
    });
  }
  const isAdmin = await checkIsAdmin(authorization);

  if (!isAdmin) {
    return res.status(401).json({
      message: "YOU ARE NOT ADMIN OR USER NOT FOUND",
    });
  }

  // UPDATE FOOD
  const thisFood = await FoodModel.findOne({ _id });

  if (!thisFood) {
    return res.status(401).json({
      message: "food not found",
    });
  }

  try {
    await FoodModel.updateOne(
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

// CREATE CATEGORY
export const createCategory: RequestHandler = async (req, res) => {
  const { name } = req.body;

  // CHECK IS ADMIN
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "Invalid credentials: AUTHORIZATION NOT FOUND",
    });
  }
  const isAdmin = await checkIsAdmin(authorization);

  if (!isAdmin) {
    return res.status(401).json({
      message: "YOU ARE NOT ADMIN OR USER NOT FOUND",
    });
  }

  // CREATE CATEGORY
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

  // CHECK IS ADMIN
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "Invalid credentials: AUTHORIZATION NOT FOUND",
    });
  }
  const isAdmin = await checkIsAdmin(authorization);

  if (!isAdmin) {
    return res.status(401).json({
      message: "YOU ARE NOT ADMIN OR USER NOT FOUND",
    });
  }

  // UPDATE CATEGORY
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

  // CHECK IS ADMIN
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "Invalid credentials: AUTHORIZATION NOT FOUND",
    });
  }
  const isAdmin = await checkIsAdmin(authorization);

  if (!isAdmin) {
    return res.status(401).json({
      message: "YOU ARE NOT ADMIN OR USER NOT FOUND",
    });
  }

  // DELETE CATEGORY
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
