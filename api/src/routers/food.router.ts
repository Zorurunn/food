import { Router } from "express";
import {
  createFood,
  getAllFoods,
  updateFood,
  createCategory,
  getAllCategories,
  deleteCategory,
  updateCategory,
} from "../controllers/food.controller";

const foodRouter = Router();

foodRouter
  .get("/getAllFoods", getAllFoods)
  .post("/createFood", createFood)
  .post("/updateFood", updateFood)
  .post("/createCategory", createCategory)
  .get("/getAllCategories", getAllCategories)
  .post("/deleteCategory", deleteCategory)
  .post("/updateCategory", updateCategory);

export default foodRouter;
