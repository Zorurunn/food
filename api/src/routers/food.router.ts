import { Router } from "express";
import {
  createFood,
  getAllFoods,
  updateFood,
  createCategory,
  getAllCategories,
} from "../controllers/food.controller";

const foodRouter = Router();

foodRouter
  .get("/getAllFoods", getAllFoods)
  .post("/createFood", createFood)
  .post("/updateFood", updateFood)
  .post("/createCategory", createCategory)
  .get("/getAllCategories", getAllCategories);

export default foodRouter;
