import { Router } from "express";
import {
  createFood,
  updateFood,
  createCategory,
  deleteCategory,
  updateCategory,
} from "../controllers/food.controller";

const foodRouter = Router();

foodRouter
  .post("/createFood", createFood)
  .post("/updateFood", updateFood)
  .post("/createCategory", createCategory)
  .post("/deleteCategory", deleteCategory)
  .post("/updateCategory", updateCategory);

export default foodRouter;
